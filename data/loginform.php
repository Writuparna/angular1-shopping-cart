<?php //include_once 'database.php'; ?>

<?php

$connect = mysqli_connect('localhost','root','','signup_form');
$data = json_decode( file_get_contents('php://input') );
//echo '<pre>'; print_r($data);exit;
$email = mysqli_real_escape_string($connect, $data->useremail);
$password = mysqli_real_escape_string($connect, $data->userpass);

$query = "SELECT * FROM user_table where email='$email' and password='$password'";
$result = mysqli_query($connect, $query);
$user_details = mysqli_fetch_assoc($result);
$response = [];
if(mysqli_num_rows($result)==1){
	$response['status'] = 'success';
    $response['data'] = $user_details;
}else{
	$response['status'] = 'fail';
    $response['msg'] = 'Wrong username or password';
}

echo json_encode($response);
?>