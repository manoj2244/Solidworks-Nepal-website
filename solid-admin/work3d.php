<?php


require('./include/cors.php');

require('./include/db.php');

$data = json_decode(file_get_contents("php://input"));

$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {
	case "GET":
		$sql = "SELECT * FROM work3d";
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

				$deleted = mysqli_query($db_conn, "delete from work3d where id='$deletedId'");

				if ($deleted) {
					echo json_encode(["success" => true]);
					return;
				} else {
					echo json_encode(["success" => false, "msg" => "Server Problem. Please Try Again"]);
					return;
				}
			
		}

        else if (isset($data->eventid)) {
			$editid = mysqli_real_escape_string($db_conn, trim($data->eventid));
			$allUsers = mysqli_query($db_conn, "SELECT * FROM work3d where work3d_id = '" . $editid . "'");
			if (mysqli_num_rows($allUsers) > 0) {
                while ($row = mysqli_fetch_assoc($allUsers)) {
                    $json_data[] = $row;
                }
                echo json_encode($json_data);
            }
		} 
		else if (isset($data->eventimageid)) {
			$editid = mysqli_real_escape_string($db_conn, trim($data->eventimageid));
			$allUsers = mysqli_query($db_conn, "SELECT * FROM work3d_image where work_id = '" . $editid . "'");
			if (mysqli_num_rows($allUsers) > 0) {
                while ($row = mysqli_fetch_assoc($allUsers)) {
                    $json_data[] = $row;
                }
                echo json_encode($json_data);
            }
		} 
        
        else if (isset($data->userids)) {
			$editid = mysqli_real_escape_string($db_conn, trim($data->userids));
			$allUsers = mysqli_query($db_conn, "SELECT * FROM work3d where id = '" . $editid . "'");
			if (mysqli_num_rows($allUsers) > 0) {
                while ($row = mysqli_fetch_assoc($allUsers)) {
                    $json_data[] = $row;
                }
                echo json_encode($json_data);
            }
		} else if (isset($_POST['id'])) {
			

			$title = mysqli_real_escape_string($db_conn, $_POST['title']);
				$category = mysqli_real_escape_string($db_conn, $_POST['category']);
                $project_date = mysqli_real_escape_string($db_conn, $_POST['project_date']);
                $url = mysqli_real_escape_string($db_conn, $_POST['url']);
                $desc = mysqli_real_escape_string($db_conn, $_POST['desc']);
                $client = mysqli_real_escape_string($db_conn, $_POST['client']);
                $main_desc = mysqli_real_escape_string($db_conn, $_POST['main_desc']);
          

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
				$sql = "SELECT * FROM `work3d` WHERE `id`=$id";
				$result = mysqli_query($db_conn, $sql);
				$row = @mysqli_fetch_assoc($result);
				$filename=$row['image'];
			}
				

				$edit = mysqli_query($db_conn, "update work3d set title ='$title', category ='$category',client='$client',url='$url',project_date='$project_date',description='$desc',image='$filename',main_desc='$main_desc' where id='$id'");
				if ($edit) {

					echo json_encode("successfully Updated");
					return;
				} else {
					echo json_encode(["success" => false, "msg" => "Servers Problem. Please Try Again"]);
					return;
				}
			
		}  else {
			//if (isset($_POST['title']) && isset($_POST['slogan']) && isset($_POST['youtubeurl'])) {
				if ($_POST['title']!="" && $_POST['category']!=""&& $_POST['project_date']!="" && $_POST['desc']!="" && $_POST['client']!="" &&isset($_FILES['picture'])) {


				$title = mysqli_real_escape_string($db_conn, $_POST['title']);
				$category = mysqli_real_escape_string($db_conn, $_POST['category']);
                $project_date = mysqli_real_escape_string($db_conn, $_POST['project_date']);
                $url = mysqli_real_escape_string($db_conn, $_POST['url']);
                $desc = mysqli_real_escape_string($db_conn, $_POST['desc']);
                $client = mysqli_real_escape_string($db_conn, $_POST['client']);
                $main_desc = mysqli_real_escape_string($db_conn, $_POST['main_desc']);
                


				
           


				$image = $_FILES['picture'];
				$filename = $image['name'];
				$filepath = $image['tmp_name'];
				$fileerror = $image['error'];
				if ($fileerror == 0) {
					$destfile = 'images/' . $filename;
					move_uploaded_file($filepath, $destfile);
				}
                
			
                // $captcha = md5(microtime());
                // $eventno = substr($captcha,0,10);

                $work3d_id = rand(1000000,999999999);

				$add = mysqli_query($db_conn, "insert into work3d (title,category,project_date,url,client,description,image,main_desc,work3d_id) values('$title','$category','$project_date','$url','$client','$desc','$filename','$main_desc','$work3d_id')");
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
                        // $query = "INSERT INTO work3d_image (image,work_id) VALUES ('" . $file['name'] . "')";
                        // mysqli_query($db_conn, $query);
    
                        mysqli_query($db_conn, "insert into work3d_image (image,work_id) values('".$file['name'] ."','$work3d_id')");
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
