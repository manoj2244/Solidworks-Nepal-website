<?php


require('./include/cors.php');

require('./include/db.php');

$data = json_decode(file_get_contents("php://input"));

$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {
	case "GET":
		$sql = "SELECT * FROM mission";
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

				$deleted = mysqli_query($db_conn, "delete from mission where id='$deletedId'");

				if ($deleted) {
					echo json_encode(["success" => true]);
					return;
				} else {
					echo json_encode(["success" => false, "msg" => "Server Problem. Please Try Again"]);
					return;
				}
			
		} else if (isset($_POST['id'])) {
                $mission = mysqli_real_escape_string($db_conn, $_POST['mission']);
				$plan = mysqli_real_escape_string($db_conn, $_POST['plan']);
				$goal = mysqli_real_escape_string($db_conn, $_POST['goal']);
			
                $id = mysqli_real_escape_string($db_conn, $_POST['id']);


			if(isset($_FILES['mission_picture'])){
			
				$image1 = $_FILES['mission_picture'];
				$filename1 = $image1['name'];
				$filepath1 = $image1['tmp_name'];
				$fileerror1 = $image1['error'];
				if ($fileerror1 == 0) {
					$destfile1 = 'images/' . $filename1;
					move_uploaded_file($filepath1, $destfile1);
				}
			}
			else{
				$sql = "SELECT * FROM `mission` WHERE `id`=$id";
				$result = mysqli_query($db_conn, $sql);
				$row = @mysqli_fetch_assoc($result);
				$filename1=$row['missionimage'];
			}
            if(isset($_FILES['plan_picture'])){
                $image2 = $_FILES['plan_picture'];
				$filename2 = $image2['name'];
				$filepath2 = $image2['tmp_name'];
				$fileerror2 = $image2['error'];
				if ($fileerror2 == 0) {
					$destfile2 = 'images/' . $filename2;
					move_uploaded_file($filepath2, $destfile2);
				}


            }
            else{
				$sql = "SELECT * FROM `mission` WHERE `id`=$id";
				$result = mysqli_query($db_conn, $sql);
				$row = @mysqli_fetch_assoc($result);
				$filename2=$row['planimage'];
			}
            if(isset($_FILES['goal_picture'])){
                $image3 = $_FILES['goal_picture'];
				$filename3 = $image3['name'];
				$filepath3 = $image3['tmp_name'];
				$fileerror3 = $image3['error'];
				if ($fileerror3 == 0) {
					$destfile3 = 'images/' . $filename3;
					move_uploaded_file($filepath3, $destfile3);
				}


            }
            else{
				$sql = "SELECT * FROM `mission` WHERE `id`=$id";
				$result = mysqli_query($db_conn, $sql);
				$row = @mysqli_fetch_assoc($result);
				$filename3=$row['goalimage'];
			}


				

				$edit = mysqli_query($db_conn, "update mission set mission ='$mission', plan ='$plan', goal='$goal', missionimage='$filename1', planimage='$filename2', goalimage='$filename3' where id='$id'");
				if ($edit) {

					echo json_encode("successfully Updated");
					return;
				} else {
					echo json_encode(["success" => false, "msg" => "Servers Problem. Please Try Again"]);
					return;
				}
			
		}  else {
			//if (isset($_POST['title']) && isset($_POST['slogan']) && isset($_POST['youtubeurl'])) {
				if ($_POST['mission']!="" && $_POST['plan']!="" && $_POST['goal']!="") {

				$mission = mysqli_real_escape_string($db_conn, $_POST['mission']);
				$plan = mysqli_real_escape_string($db_conn, $_POST['plan']);
				$goal = mysqli_real_escape_string($db_conn, $_POST['goal']);
               


				$image1 = $_FILES['mission_picture'];
				$filename1 = $image1['name'];
				$filepath1 = $image1['tmp_name'];
				$fileerror1 = $image1['error'];
				if ($fileerror1 == 0) {
					$destfile1 = 'images/' . $filename1;
					move_uploaded_file($filepath1, $destfile1);
				}
                $image2 = $_FILES['plan_picture'];
				$filename2 = $image2['name'];
				$filepath2 = $image2['tmp_name'];
				$fileerror2 = $image2['error'];
				if ($fileerror2 == 0) {
					$destfile2 = 'images/' . $filename2;
					move_uploaded_file($filepath2, $destfile2);
				}
                $image3 = $_FILES['goal_picture'];
				$filename3 = $image3['name'];
				$filepath3 = $image3['tmp_name'];
				$fileerror3 = $image3['error'];
				if ($fileerror3 == 0) {
					$destfile3 = 'images/' . $filename3;
					move_uploaded_file($filepath3, $destfile3);
				}


				$add = mysqli_query($db_conn, "insert into mission (mission,plan,goal,missionimage,planimage,goalimage) values('$mission','$plan','$goal','$filename1','$filename2','$filename3')");
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
