<?php


require('./include/cors.php');

require('./include/db.php');

$data = json_decode(file_get_contents("php://input"));

$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {
	case "GET":
		$sql = "SELECT * FROM testomonial";
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

				$deleted = mysqli_query($db_conn, "delete from testomonial where id='$deletedId'");

				if ($deleted) {
					echo json_encode(["success" => true]);
					return;
				} else {
					echo json_encode(["success" => false, "msg" => "Server Problem. Please Try Again"]);
					return;
				}
			
		} else if (isset($_POST['id'])) {
			

			
            $name = mysqli_real_escape_string($db_conn, $_POST['name']);
            $designation = mysqli_real_escape_string($db_conn, $_POST['designation']);
            $message = mysqli_real_escape_string($db_conn, $_POST['message']);

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
				$sql = "SELECT * FROM `testomonial` WHERE `id`=$id";
				$result = mysqli_query($db_conn, $sql);
				$row = @mysqli_fetch_assoc($result);
				$filename=$row['image'];
			}
				

				$edit = mysqli_query($db_conn, "update testomonial set name ='$name', designation ='$designation', message='$message',image='$filename' where id='$id'");
				if ($edit) {

					echo json_encode("successfully Updated");
					return;
				} else {
					echo json_encode(["success" => false, "msg" => "Servers Problem. Please Try Again"]);
					return;
				}
			
		}  else {
			//if (isset($_POST['title']) && isset($_POST['slogan']) && isset($_POST['youtubeurl'])) {
				if ($_POST['name']!="" && $_POST['designation']!="" && $_POST['message']!="") {

				$name = mysqli_real_escape_string($db_conn, $_POST['name']);
				$designation = mysqli_real_escape_string($db_conn, $_POST['designation']);
				$message = mysqli_real_escape_string($db_conn, $_POST['message']);
           


				$image = $_FILES['picture'];
				$filename = $image['name'];
				$filepath = $image['tmp_name'];
				$fileerror = $image['error'];
				if ($fileerror == 0) {
					$destfile = 'images/' . $filename;
					move_uploaded_file($filepath, $destfile);
				}


				$add = mysqli_query($db_conn, "insert into testomonial (name,designation,message,image) values('$name','$designation','$message','$filename')");
				if ($add) {
					$last_id = mysqli_insert_id($db_conn);
					echo json_encode("Data Added Sucessfully");
					return;
				} else {
					echo json_encode(["success" => false, "msg" => "Server Problem. Please Try Again"]);
					return;
				}
			} else {
				echo json_encode("Please fill all the required fields!");
				return;
			}
		}
	
}
