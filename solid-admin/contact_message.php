<?php


require('./include/cors.php');

require('./include/db.php');

$data = json_decode(file_get_contents("php://input"));


$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {
	case "GET":
		$sql = "SELECT * FROM contactmessage";
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

				$deleted = mysqli_query($db_conn, "delete from contactmessage where id='$deletedId'");

				if ($deleted) {
					echo json_encode(["success" => true]);
					return;
				} else {
					echo json_encode(["success" => false, "msg" => "Server Problem. Please Try Again"]);
					return;
				}
			
		}else if (isset($data->userids)) {
			$editid = mysqli_real_escape_string($db_conn, trim($data->userids));
			$allUsers = mysqli_query($db_conn, "SELECT * FROM contactmessage where id = '" . $editid . "'");
			if (mysqli_num_rows($allUsers) > 0) {
                while ($row = mysqli_fetch_assoc($allUsers)) {
                    $json_data[] = $row;
                }
                echo json_encode($json_data);
            }
		}  else {
			//if (isset($_POST['title']) && isset($_POST['slogan']) && isset($_POST['youtubeurl'])) {

                if ($_POST['name']!="" && $_POST['email']!="" && $_POST['subject']!="" && $_POST['message']!="") {


                    $name = mysqli_real_escape_string($db_conn, $_POST['name']);
                    $email = mysqli_real_escape_string($db_conn, $_POST['email']);
                    $subject = mysqli_real_escape_string($db_conn, $_POST['subject']);
                    $message = mysqli_real_escape_string($db_conn, $_POST['message']);
            
                    $add = mysqli_query($db_conn, "insert into contactmessage (name,email,subject,message) values('$name','$email','$subject','$message')");
                    $notification = "" .$name. " Messaged your Team";

                    mysqli_query($db_conn, "insert into notification (notification) values('$notification')");


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


