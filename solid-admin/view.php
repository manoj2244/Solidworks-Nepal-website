<?php


require('./include/cors.php');

require('./include/db.php');

$sql = "SELECT * FROM intro";
$mysqli = mysqli_query($db_conn,$sql);
$json_data = [];
while($row = mysqli_fetch_assoc($mysqli))
{
    $json_data[] = $row;
}
echo json_encode($json_data);


?>