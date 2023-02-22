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


if(isset($_POST['title'])&&isset($_POST['slogan'])&&isset($_POST['youtubeurl'])){
		
	$title = mysqli_real_escape_string($db_conn, $_POST['title']);
	$slogan = mysqli_real_escape_string($db_conn, $_POST['slogan']);
	$youtube = mysqli_real_escape_string($db_conn, $_POST['youtubeurl']);
	

	
	$image=$_FILES['picture'];
  $filename=$image['name'];
  $filepath=$image['tmp_name'];
  $fileerror=$image['error'];
	if($fileerror==0){
		$destfile='images/' .$filename;
		move_uploaded_file($filepath, $destfile);
	}
	
	//$date = date('Y-m-d');

	$add = mysqli_query($db_conn,"insert into intro (title,slogan,youtubeurl,image) values('$title','$slogan','$youtube','$filename')");
	if($add){
		$last_id = mysqli_insert_id($db_conn);
		echo json_encode(["success"=>true,"insertid"=>$last_id]);
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