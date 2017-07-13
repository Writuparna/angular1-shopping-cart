<?php //include_once 'database.php'; ?>

<?php

$connect = mysqli_connect('localhost','root','','signup_form');
$output = array();

$query = "SELECT * FROM user_table";

$result = mysqli_query($connect,$query);

if(mysqli_num_rows($result) > 0){

	while($row = mysqli_fetch_array($result)){
		$output[] = $row;
	}
	echo json_encode($output);

}




?>