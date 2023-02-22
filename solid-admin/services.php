<?php


require('./include/cors.php');

require('./include/db.php');

$data = json_decode(file_get_contents("php://input"));

$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {
	case "GET":
		$sql = "SELECT * FROM services";
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

				$deleted = mysqli_query($db_conn, "delete from services where id='$deletedId'");

				if ($deleted) {
					echo json_encode(["success" => true]);
					return;
				} else {
					echo json_encode(["success" => false, "msg" => "Server Problem. Please Try Again"]);
					return;
				}
			
		}else if (isset($data->userids)) {
			$editid = mysqli_real_escape_string($db_conn, trim($data->userids));
			$allUsers = mysqli_query($db_conn, "SELECT * FROM services where id = '" . $editid . "'");
			if (mysqli_num_rows($allUsers) > 0) {
                while ($row = mysqli_fetch_assoc($allUsers)) {
                    $json_data[] = $row;
                }
                echo json_encode($json_data);
            }
		} else if (isset($_POST['id'])) {
			

			
            $title = mysqli_real_escape_string($db_conn, $_POST['title']);
            $description = mysqli_real_escape_string($db_conn, $_POST['description']);
          

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
				$sql = "SELECT * FROM `services` WHERE `id`=$id";
				$result = mysqli_query($db_conn, $sql);
				$row = @mysqli_fetch_assoc($result);
				$filename=$row['image'];
			}
				

				$edit = mysqli_query($db_conn, "update services set title ='$title', description ='$description',image='$filename' where id='$id'");
				if ($edit) {

					echo json_encode("successfully Updated");
					return;
				} else {
					echo json_encode(["success" => false, "msg" => "Servers Problem. Please Try Again"]);
					return;
				}
			
		}  else {
			//if (isset($_POST['title']) && isset($_POST['slogan']) && isset($_POST['youtubeurl'])) {
				if ($_POST['title']!="" && $_POST['description']!=""&&isset($_FILES['picture'])) {


				$title = mysqli_real_escape_string($db_conn, $_POST['title']);
				$description = mysqli_real_escape_string($db_conn, $_POST['description']);
				
           


				$image = $_FILES['picture'];
				$filename = $image['name'];
				$filepath = $image['tmp_name'];
				$fileerror = $image['error'];
				if ($fileerror == 0) {
					$destfile = 'images/' . $filename;
					move_uploaded_file($filepath, $destfile);
				}


				$add = mysqli_query($db_conn, "insert into services (title,description,image) values('$title','$description','$filename')");
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
