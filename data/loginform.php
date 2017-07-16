<?php //include_once 'database.php'; ?>

<?php

$connect = mysqli_connect('localhost','root','','signup_form');
$data = json_decode( file_get_contents('php://input') );
//echo '<pre>'; print_r($data);exit;
$email = mysqli_real_escape_string($connect, $data->useremail);
$password = mysqli_real_escape_string($connect, $data->userpass);

$query = "SELECT * FROM user_table where email='$email' and password='$password'";
$result = mysqli_query($connect, $query);
/**/if(mysqli_num_rows($result)==1){
	session_start();
    echo "correct";
	/*$_SESSION['auth']='true';
	header('location:index.php');*/
}else{
	echo 'wrong username or password';
}

/*$result->execute();
$row = $result->rowCount();
if ($row > 0){
    echo "correct";
} else{
    echo 'wrong';
}*/

?>