<?php


require('./include/cors.php');

require('./include/db.php');

$data = json_decode(file_get_contents("php://input"));

$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {
	case "GET":
		$sql = "SELECT * FROM faq";
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

				$deleted = mysqli_query($db_conn, "delete from faq where id='$deletedId'");

				if ($deleted) {
					echo json_encode(["success" => true]);
					return;
				} else {
					echo json_encode(["success" => false, "msg" => "Server Problem. Please Try Again"]);
					return;
				}
			
		}else if (isset($data->userids)) {
			$editid = mysqli_real_escape_string($db_conn, trim($data->userids));
			$allUsers = mysqli_query($db_conn, "SELECT * FROM faq where id = '" . $editid . "'");
			if (mysqli_num_rows($allUsers) > 0) {
                while ($row = mysqli_fetch_assoc($allUsers)) {
                    $json_data[] = $row;
                }
                echo json_encode($json_data);
            }
		} else if (isset($_POST['id'])) {
			

			$question = mysqli_real_escape_string($db_conn, $_POST['question']);
				$answer = mysqli_real_escape_string($db_conn, $_POST['answer']);
               
             
          

            $id = mysqli_real_escape_string($db_conn, $_POST['id']);

				

				$edit = mysqli_query($db_conn, "update faq set question ='$question', answer ='$answer' where id='$id'");
				if ($edit) {

					echo json_encode("successfully Updated");
					return;
				} else {
					echo json_encode(["success" => false, "msg" => "Servers Problem. Please Try Again"]);
					return;
				}
			
		}  else {
			//if (isset($_POST['title']) && isset($_POST['slogan']) && isset($_POST['youtubeurl'])) {
				if ($_POST['question']!="" && $_POST['answer']!="") {


                    $question = mysqli_real_escape_string($db_conn, $_POST['question']);
                    $answer = mysqli_real_escape_string($db_conn, $_POST['answer']);
                 


				
           




				$add = mysqli_query($db_conn, "insert into faq (question,answer) values('$question','$answer')");
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
