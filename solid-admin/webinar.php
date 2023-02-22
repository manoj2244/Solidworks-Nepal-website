<?php


require('./include/cors.php');

require('./include/db.php');

$data = json_decode(file_get_contents("php://input"));

$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {
	case "GET":
		$sql = "SELECT * FROM webinar";
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

				$deleted = mysqli_query($db_conn, "delete from webinar where id='$deletedId'");

				if ($deleted) {
					echo json_encode(["success" => true]);
					return;
				} else {
					echo json_encode(["success" => false, "msg" => "Server Problem. Please Try Again"]);
					return;
				}
			
		}else if (isset($data->userids)) {
			$editid = mysqli_real_escape_string($db_conn, trim($data->userids));
			$allUsers = mysqli_query($db_conn, "SELECT * FROM webinar where id = '" . $editid . "'");
			if (mysqli_num_rows($allUsers) > 0) {
                while ($row = mysqli_fetch_assoc($allUsers)) {
                    $json_data[] = $row;
                }
                echo json_encode($json_data);
            }
		}
		else if (isset($data->webinarid)) {
			$editid = mysqli_real_escape_string($db_conn, trim($data->webinarid));
			$allUsers = mysqli_query($db_conn, "SELECT * FROM webinar where webno = '" . $editid . "'");
			if (mysqli_num_rows($allUsers) > 0) {
                while ($row = mysqli_fetch_assoc($allUsers)) {
                    $json_data[] = $row;
                }
                echo json_encode($json_data);
            }
		}
		 else if (isset($_POST['id'])) {
			

			$title = mysqli_real_escape_string($db_conn, $_POST['title']);
				$guest = mysqli_real_escape_string($db_conn, $_POST['guest']);
                $webinar_date = mysqli_real_escape_string($db_conn, $_POST['webinar_date']);
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
				$sql = "SELECT * FROM `webinar` WHERE `id`=$id";
				$result = mysqli_query($db_conn, $sql);
				$row = @mysqli_fetch_assoc($result);
				$filename=$row['image'];
			}
				

				$edit = mysqli_query($db_conn, "update webinar set title ='$title', guest ='$guest',duration='$duration',url='$url',webinar_date='$webinar_date',description='$desc',image='$filename' where id='$id'");
				if ($edit) {

					echo json_encode("successfully Updated");
					return;
				} else {
					echo json_encode(["success" => false, "msg" => "Servers Problem. Please Try Again"]);
					return;
				}
			
		}  else {
			//if (isset($_POST['title']) && isset($_POST['slogan']) && isset($_POST['youtubeurl'])) {
				if ($_POST['title']!="" && $_POST['guest']!=""&& $_POST['webinar_date']!=""  && $_POST['url']!="" && $_POST['desc']!="" && $_POST['duration']!="" &&isset($_FILES['picture'])) {


				$title = mysqli_real_escape_string($db_conn, $_POST['title']);
				$guest = mysqli_real_escape_string($db_conn, $_POST['guest']);
                $webinar_date = mysqli_real_escape_string($db_conn, $_POST['webinar_date']);
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
				$webno = substr($captcha,0,10);

				$add = mysqli_query($db_conn, "insert into webinar (title,guest,webinar_date,url,duration,description,image,webno) values('$title','$guest','$webinar_date','$url','$duration','$desc','$filename','$webno')");
				if ($add) {
					$last_id = mysqli_insert_id($db_conn);
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
