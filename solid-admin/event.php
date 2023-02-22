<?php


require('./include/cors.php');

require('./include/db.php');

$data = json_decode(file_get_contents("php://input"));

$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {
	case "GET":
		$sql = "SELECT * FROM event";
		$mysqli = mysqli_query($db_conn, $sql);
		$json_data = [];
        if(mysqli_num_rows($mysqli)>0){
		while ($row = mysqli_fetch_assoc($mysqli)) {
			$json_data[] = $row;
		}
        echo json_encode($json_data);
    }
		
		break;

	case "POST":
		if (isset($data->deletedId)) {

				$deletedId = mysqli_real_escape_string($db_conn, trim($data->deletedId));

				$deleted = mysqli_query($db_conn, "delete from event where id='$deletedId'");

				if ($deleted) {
					echo json_encode(["success" => true]);
					return;
				} else {
					echo json_encode(["success" => false, "msg" => "Server Problem. Please Try Again"]);
					return;
				}
			
		}else if (isset($data->userids)) {
			$editid = mysqli_real_escape_string($db_conn, trim($data->userids));
			$allUsers = mysqli_query($db_conn, "SELECT * FROM event where id = '" . $editid . "'");
			if (mysqli_num_rows($allUsers) > 0) {
                while ($row = mysqli_fetch_assoc($allUsers)) {
                    $json_data[] = $row;
                }
                echo json_encode($json_data);
            }
		} 

		else if (isset($data->eventid)) {
			$editid = mysqli_real_escape_string($db_conn, trim($data->eventid));
			$allUsers = mysqli_query($db_conn, "SELECT * FROM event where eventno = '" . $editid . "'");
			if (mysqli_num_rows($allUsers) > 0) {
                while ($row = mysqli_fetch_assoc($allUsers)) {
                    $json_data[] = $row;
                }
                echo json_encode($json_data);
            }
		} 
		else if (isset($data->eventimageid)) {
			$editid = mysqli_real_escape_string($db_conn, trim($data->eventimageid));
			$allUsers = mysqli_query($db_conn, "SELECT * FROM event_image where work_id = '" . $editid . "'");
			if (mysqli_num_rows($allUsers) > 0) {
                while ($row = mysqli_fetch_assoc($allUsers)) {
                    $json_data[] = $row;
                }
                echo json_encode($json_data);
            }
		} 
		
		else if (isset($_POST['id'])) {
			

			$subject = mysqli_real_escape_string($db_conn, $_POST['subject']);
				$venue = mysqli_real_escape_string($db_conn, $_POST['venue']);
                $training_date = mysqli_real_escape_string($db_conn, $_POST['training_date']);
                $url = mysqli_real_escape_string($db_conn, $_POST['url']);
                $desc = mysqli_real_escape_string($db_conn, $_POST['desc']);
                $duration = mysqli_real_escape_string($db_conn, $_POST['duration']);
          

            $id = mysqli_real_escape_string($db_conn, $_POST['id']);


			if(isset($_FILES['picture'])){
				$image = $_FILES['picture'];
				$filename = $image['name'];
				$filepath = $image['tmp_name'];
				$fileerror = $image['error'];
				if ($fileerror == 0) {
					$destfile = 'images/' . $filename;
					move_uploaded_file($filepath, $destfile);
				}
			}
			else{
				$sql = "SELECT * FROM `event` WHERE `id`=$id";
				$result = mysqli_query($db_conn, $sql);
				$row = @mysqli_fetch_assoc($result);
				$filename=$row['image'];
			}
				

				$edit = mysqli_query($db_conn, "update event set subject ='$subject', venue ='$venue',duration='$duration',url='$url',training_date='$training_date',description='$desc',image='$filename' where id='$id'");
				if ($edit) {

					echo json_encode("successfully Updated");
					return;
				} else {
					echo json_encode(["success" => false, "msg" => "Servers Problem. Please Try Again"]);
					return;
				}
			
		}  else {
			//if (isset($_POST['title']) && isset($_POST['slogan']) && isset($_POST['youtubeurl'])) {
				if ($_POST['subject']!="" && $_POST['venue']!=""&& $_POST['training_date']!=""  && $_POST['url']!="" && $_POST['desc']!="" && $_POST['duration']!="" &&isset($_FILES['picture'])) {


				$subject = mysqli_real_escape_string($db_conn, $_POST['subject']);
				$venue = mysqli_real_escape_string($db_conn, $_POST['venue']);
                $training_date = mysqli_real_escape_string($db_conn, $_POST['training_date']);
                $url = mysqli_real_escape_string($db_conn, $_POST['url']);
                $desc = mysqli_real_escape_string($db_conn, $_POST['desc']);
                $duration = mysqli_real_escape_string($db_conn, $_POST['duration']);
                


				
           


				$image = $_FILES['picture'];
				$filename = $image['name'];
				$filepath = $image['tmp_name'];
				$fileerror = $image['error'];
				if ($fileerror == 0) {
					$destfile = 'images/' . $filename;
					move_uploaded_file($filepath, $destfile);
				}

				

				  $captcha = md5(microtime());
				  $eventno = substr($captcha,0,10);
				$add = mysqli_query($db_conn, "insert into event (subject,venue,training_date,url,duration,description,image,eventno) values('$subject','$venue','$training_date','$url','$duration','$desc','$filename','$eventno')");
				if ($add) {
					
					$last_id = mysqli_insert_id($db_conn);
                    $files = $_FILES['files'];
                    for ($i = 0; $i < count($files['name']); $i++) {
                        $file = [
                          'name' => $files['name'][$i],
                          'type' => $files['type'][$i],
                          'tmp_name' => $files['tmp_name'][$i],
                          'error' => $files['error'][$i]
                          
                        ];
                    
                        $destination = 'images/' . $file['name'];
                        move_uploaded_file($file['tmp_name'], $destination);
                    
                        // Insert file information into the database
                        // $query = "INSERT INTO fabrication_image (image,work_id) VALUES ('" . $file['name'] . "')";
                        // mysqli_query($db_conn, $query);
    
                        mysqli_query($db_conn, "insert into event_image (image_name,work_id) values('".$file['name'] ."','$eventno')");
                      }
					echo json_encode(["success" => true, "msg" => "Data Added Sucessfully"]);
					return;
				} else {
					echo json_encode(["success" => false, "msg" => "Server Problem. Please Try Again"]);
					return;
				}
			} else {
				echo json_encode(["success" => false, "msg" => "Please fill required fields"]);
				return;
			}
		}
	
}
