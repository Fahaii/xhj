<?php
require('./_connect.php');

//书写sql语句
$sql = "CREATE TABLE msg (
			id INT(11) NOT NULL PRIMARY KEY,
			username VARCHAR(50) NOT NULL,
			userpwd VARCHAR(50) NOT NULL	
)";
$result = mysqli_query($conn,$sql);
if($result){
	echo "数据表创建成功";
}else{
	echo "数据表创建失败";
}

?>