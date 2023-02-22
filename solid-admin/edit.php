<?php


header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$db_conn = mysqli_connect("localhost", "root", "", "solidwork");

// Check connection
if($db_conn === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}

$data = json_decode(file_get_contents("php://input"));

if(isset($data->userids) 
	&& !empty(trim($data->userids))
	){
  $adduserid = mysqli_real_escape_string($db_conn, trim($data->userids));
	$allUsers = mysqli_query($db_conn,"SELECT * FROM intro where id = '".$adduserid."'");
	if(mysqli_num_rows($allUsers) > 0){
		while($row = mysqli_fetch_array($allUsers)){
      $viewjson["id"] = $row['id'];
      $viewjson["title"] = $row['title'];
      $viewjson["slogan"] = $row['slogan'];
      $viewjson["youtubeurl"] = $row['youtubeurl'];
      $viewjson["image"] = $row['image'];
     
      $json_array["userdata"][] = $viewjson;
		}
		echo json_encode(["success"=>true,"userlist"=>$json_array]);
		return;
			
	}
	else{
		echo json_encode(["success"=>false]);
		return;
	}
		
}



?>