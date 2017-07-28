<?php 

	$connect = mysqli_connect('localhost','root','','signup_form');
	$data = json_decode( file_get_contents('php://input') );

$pid = mysqli_real_escape_string($connect, $data->p_id);
$pname = mysqli_real_escape_string($connect, $data->p_name);
$poriginalprice = mysqli_real_escape_string($connect, $data->p_originalprice);
$proQty = mysqli_real_escape_string($connect, $data->proQty);
$totalPrice = mysqli_real_escape_string($connect, $data->totalPrice);


$abc = "INSERT INTO cart_table(p_id, p_name, p_originalprice, proQty, totalPrice) VALUES ('".$pid."','".$pname."','".$poriginalprice."','".$proQty."','".$totalPrice."')";



echo $abc;
mysqli_query($connect, $abc);

	//echo mysqli_affected_rows($connect);
if(mysqli_affected_rows($connect) > 0){
	echo "<span style='display: block; padding: 10px 15px; color: #2E6A00; border: 2px solid #2E6A00;'>value Added to cart</span>";
}else{
	echo "<span style='display: block; padding: 10px 15px; color: #D32F00; border: 2px solid #D32F00;'>value doesnot Added to cart</span>";
	echo mysqli_error($connect);
}

?>