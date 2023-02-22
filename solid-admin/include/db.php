<?php
$db_conn = mysqli_connect("localhost", "root", "", "solidwork");

if(!$db_conn)
{
    echo die(mysqli_connect_error());
}
?>