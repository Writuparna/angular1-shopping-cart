<?php

$connect = mysqli_connect('localhost','root','','signup_form');
$data = json_decode( file_get_contents('php://input') );

$email = mysqli_real_escape_string($connect, $data->useremail);
$country = mysqli_real_escape_string($connect, $data->country);
$state = mysqli_real_escape_string($connect, $data->state);
$city = mysqli_real_escape_string($connect, $data->city);
$pincode = mysqli_real_escape_string($connect, $data->pincode);
$address = mysqli_real_escape_string($connect, $data->address);



$abc = "UPDATE user_table SET country = '".$country."', state = '".$state."', city = '".$city."', pincode = '".$pincode."', fulladdress = '".$address."' WHERE email ='".$email."'";



mysqli_query($connect, $abc);

if(mysqli_affected_rows($connect) > 0){
	echo "<span style='display: block; padding: 10px 15px; color: #2E6A00; border: 2px solid #2E6A00;'>Appointment Updated</span>";
}else{
	echo "<span style='display: block; padding: 10px 15px; color: #D32F00; border: 2px solid #D32F00;'>Appointment NOT Updated</span>";
	echo mysqli_error($connect);
}


?>


