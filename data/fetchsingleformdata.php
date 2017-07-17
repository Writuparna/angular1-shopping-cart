<?php
$connect = mysqli_connect('localhost','root','','signup_form');
$data = json_decode( file_get_contents('php://input') );
$user_id = mysqli_real_escape_string($connect, $data->id);
$output = array();
$query = "SELECT * FROM user_table WHERE id='$user_id'" ;

$result = mysqli_query($connect, $query);
$user_details = mysqli_fetch_assoc($result);
$response = [];
if(mysqli_num_rows($result)==1){
	$response['status'] = 'success';
    $response['data'] = $user_details;
}else{
	$response['status'] = 'fail';
    $response['msg'] = 'Invalid user';
}

echo json_encode($response);
?>