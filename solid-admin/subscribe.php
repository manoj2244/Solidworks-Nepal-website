<?php


require('./include/cors.php');

require('./include/db.php');

$data = json_decode(file_get_contents("php://input"));


$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {
	case "GET":
		$sql = "SELECT * FROM subscribe";
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

				$deleted = mysqli_query($db_conn, "delete from subscribe where id='$deletedId'");

				if ($deleted) {
					echo json_encode(["success" => true]);
					return;
				} else {
					echo json_encode(["success" => false, "msg" => "Server Problem. Please Try Again"]);
					return;
				}
			
		}else if (isset($data->userids)) {
			$editid = mysqli_real_escape_string($db_conn, trim($data->userids));
			$allUsers = mysqli_query($db_conn, "SELECT * FROM subscribe where id = '" . $editid . "'");
			if (mysqli_num_rows($allUsers) > 0) {
                while ($row = mysqli_fetch_assoc($allUsers)) {
                    $json_data[] = $row;
                }
                echo json_encode($json_data);
            }
		}  else {
			//if (isset($_POST['title']) && isset($_POST['slogan']) && isset($_POST['youtubeurl'])) {

                if ($_POST['subscribe']!="") {


                    $subscribe = mysqli_real_escape_string($db_conn, $_POST['subscribe']);
                    
            
                    $add = mysqli_query($db_conn, "insert into subscribe (subscribe) values('$subscribe')");
                    $notification = " This" .$subscribe. " Subscribed your Website";
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


