<?php


require('./include/cors.php');

require('./include/db.php');

$data = json_decode(file_get_contents("php://input"));

$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {
	case "GET":
		$sql = "SELECT * FROM team";
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

				$deleted = mysqli_query($db_conn, "delete from team where id='$deletedId'");

				if ($deleted) {
					echo json_encode(["success" => true]);
					return;
				} else {
					echo json_encode(["success" => false, "msg" => "Server Problem. Please Try Again"]);
					return;
				}
			
		}else if (isset($data->userids)) {
			$editid = mysqli_real_escape_string($db_conn, trim($data->userids));
			$allUsers = mysqli_query($db_conn, "SELECT * FROM team where id = '" . $editid . "'");
			if (mysqli_num_rows($allUsers) > 0) {
                while ($row = mysqli_fetch_assoc($allUsers)) {
                    $json_data[] = $row;
                }
                echo json_encode($json_data);
            }
		} else if (isset($_POST['id'])) {
			

			$heading = mysqli_real_escape_string($db_conn, $_POST['heading']);
				$name = mysqli_real_escape_string($db_conn, $_POST['name']);
                $designation = mysqli_real_escape_string($db_conn, $_POST['designation']);
                $facebook = mysqli_real_escape_string($db_conn, $_POST['facebook']);
                $insta = mysqli_real_escape_string($db_conn, $_POST['insta']);
                $linkdin = mysqli_real_escape_string($db_conn, $_POST['linkdin']);
                $twitter = mysqli_real_escape_string($db_conn, $_POST['twitter']);
          

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
				$sql = "SELECT * FROM `team` WHERE `id`=$id";
				$result = mysqli_query($db_conn, $sql);
				$row = @mysqli_fetch_assoc($result);
				$filename=$row['image'];
			}
				

				$edit = mysqli_query($db_conn, "update team set heading ='$heading', name ='$name',designation='$designation',facebook='$facebook',insta='$insta',twitter='$twitter',linkdin='$linkdin',image='$filename' where id='$id'");
				if ($edit) {

					echo json_encode("successfully Updated");
					return;
				} else {
					echo json_encode(["success" => false, "msg" => "Servers Problem. Please Try Again"]);
					return;
				}
			
		}  else {
			//if (isset($_POST['title']) && isset($_POST['slogan']) && isset($_POST['youtubeurl'])) {
				if ($_POST['heading']!="" && $_POST['name']!=""&& $_POST['designation']!=""  && $_POST['facebook']!="" && $_POST['insta']!="" && $_POST['linkdin']!="" && $_POST['twitter']!="" &&isset($_FILES['picture'])) {


				$heading = mysqli_real_escape_string($db_conn, $_POST['heading']);
				$name = mysqli_real_escape_string($db_conn, $_POST['name']);
                $designation = mysqli_real_escape_string($db_conn, $_POST['designation']);
                $facebook = mysqli_real_escape_string($db_conn, $_POST['facebook']);
                $insta = mysqli_real_escape_string($db_conn, $_POST['insta']);
                $linkdin = mysqli_real_escape_string($db_conn, $_POST['linkdin']);
                $twitter = mysqli_real_escape_string($db_conn, $_POST['twitter']);


				
           


				$image = $_FILES['picture'];
				$filename = $image['name'];
				$filepath = $image['tmp_name'];
				$fileerror = $image['error'];
				if ($fileerror == 0) {
					$destfile = 'images/' . $filename;
					move_uploaded_file($filepath, $destfile);
				}


				$add = mysqli_query($db_conn, "insert into team (heading,name,designation,facebook,insta,twitter,linkdin,image) values('$heading','$name','$designation','$facebook','$insta','$twitter','$linkdin','$filename')");
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
