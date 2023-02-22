<?php


require('./include/cors.php');

require('./include/db.php');

$data = json_decode(file_get_contents("php://input"));

$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {
	case "GET":
		$sql = "SELECT * FROM visitor";
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
	
			
			$row = mysqli_query($db_conn, "SELECT * FROM visitor where id = '1'");
            $row1=mysqli_fetch_assoc($row);
			
		
			

			$count= $row1['visitor_count']+1;
             
          

            


			

				$edit = mysqli_query($db_conn, "update visitor set visitor_count ='$count' where id=1");
				if ($edit) {

					echo json_encode("successfully Updated");
					return;
				} else {
					echo json_encode(["success" => false, "msg" => "Servers Problem. Please Try Again"]);
					return;
				}
			
		
}
