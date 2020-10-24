<?php
$name = $_GET["name"];
$conn = mysqli_connect("localhost","root","root","xhj");
mysqli_query($conn,"set names utf8");
	
	$sql = "select username from msg where username='$name'";
	
	$result = mysqli_query($conn,$sql);
	
	$arr = mysqli_fetch_assoc($result);
	
	if(!!$arr){
		echo 0;
	}else{
		echo 1;
	}

?>