<?php


require('./include/cors.php');

require('./include/db.php');

$data = json_decode(file_get_contents("php://input"));

$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {
	case "GET":
		$sql = "SELECT * FROM profile";
		$mysqli = mysqli_query($db_conn, $sql);
		$json_data = [];
		while ($row = mysqli_fetch_assoc($mysqli)) {
			$json_data[] = $row;
		}
		echo json_encode($json_data);
		break;

	case "POST":
		$about = mysqli_real_escape_string($db_conn, $_POST['about']);
		$company = mysqli_real_escape_string($db_conn, $_POST['company']);
		$services = mysqli_real_escape_string($db_conn, $_POST['services']);
		$email = mysqli_real_escape_string($db_conn, $_POST['email']);
		$phone = mysqli_real_escape_string($db_conn, $_POST['phone']);
		$country = mysqli_real_escape_string($db_conn, $_POST['country']);
		$address = mysqli_real_escape_string($db_conn, $_POST['address']);
		$facebook = mysqli_real_escape_string($db_conn, $_POST['facebook']);
		$youtube = mysqli_real_escape_string($db_conn, $_POST['youtube']);
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
			$sql = "SELECT * FROM `profile` WHERE `id`=$id";
			$result = mysqli_query($db_conn, $sql);
			$row = @mysqli_fetch_assoc($result);
			$filename=$row['image'];
		}
 


		
		$edit = mysqli_query($db_conn, "update profile set about ='$about', company ='$company', services='$services', country='$country',email='$email',phone='$phone',address='$address',youtube='$youtube',facebook='$facebook',image='$filename' where id='$id'");
		if ($edit) {

			echo json_encode("successfully Updated");
			return;
		} else {
			echo json_encode(["success" => false, "msg" => "Servers Problem. Please Try Again"]);
			return;
		}
		


    }
