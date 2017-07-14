<?php //include_once 'database.php'; ?>

<?php

$connect = mysqli_connect('localhost','root','','signup_form');
$data = json_decode( file_get_contents('php://input') );

$name = mysqli_real_escape_string($connect, $data->username);
$password = mysqli_real_escape_string($connect, $data->userpass);

$query = "SELECT * FROM user_table where name='$name' and password='$password'";

$result = mysqli_query($connect, $abc);

if(mysqli_num_rows($result)==1){
	session_start();
	$_SESSION['auth']='true';
	header('location:index.php');
}else{
	echo 'wrong username or password';
}



?>