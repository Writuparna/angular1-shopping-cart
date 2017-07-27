<?php //include_once 'database.php'; ?>

<?php

$connect = mysqli_connect('localhost','root','','signup_form');
$data = json_decode( file_get_contents('php://input') );

$name = mysqli_real_escape_string($connect, $data->username);
$phone = mysqli_real_escape_string($connect, $data->userphno);
$email = mysqli_real_escape_string($connect, $data->useremail);
$password = mysqli_real_escape_string($connect, $data->userpass);
$confirmpassword = mysqli_real_escape_string($connect, $data->userconfirmpass);
$country = mysqli_real_escape_string($connect, $data->country);
$state = mysqli_real_escape_string($connect, $data->state);
$city = mysqli_real_escape_string($connect, $data->city);
$pincode = mysqli_real_escape_string($connect, $data->pincode);
$address = mysqli_real_escape_string($connect, $data->address);

/*$name = $_POST['username'];
$phone = $_POST['userphno'];
$email = $_POST['useremail'];
$password = $_POST['userpass'];
$confirmpassword = $_POST['userconfirmpass'];*/


$abc = "INSERT INTO user_table(name, phone, email, password, confirmpass, country, state, city, pincode, fulladdress) VALUES ('".$name."','".$phone."','".$email."','".$password."','".$confirmpassword."','".$country."','".$state."','".$city."','".$pincode."','".$address."')";



echo $abc;
mysqli_query($connect, $abc);

	//echo mysqli_affected_rows($connect);
if(mysqli_affected_rows($connect) > 0){
	echo "<span style='display: block; padding: 10px 15px; color: #2E6A00; border: 2px solid #2E6A00;'>Appointment Added</span>";
}else{
	echo "<span style='display: block; padding: 10px 15px; color: #D32F00; border: 2px solid #D32F00;'>Appointment NOT Added</span>";
	echo mysqli_error($connect);
}



?>