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
		
	$userids = mysqli_real_escape_string($db_conn, trim($data->userids));

  $add = mysqli_query($db_conn,"delete from intro where id='$userids'");

	if($add){
		echo json_encode(["success"=>true]);
		return;
    }else{
        echo json_encode(["success"=>false,"msg"=>"Server Problem. Please Try Again"]);
		return;
    } 

} else{
    echo json_encode(["success"=>false,"msg"=>"Please fill all the required fields!"]);
	return;
}

?>