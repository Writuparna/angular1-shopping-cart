<?php 

	$connect = mysqli_connect('localhost','root','','signup_form');
	$data = json_decode( file_get_contents('php://input') );


	//echo $connect;

	if(!$connect)
		echo 'connection failure';
	else
		echo 'connection success';

?>