<?php
header("Content-Type:text/html;charset=utf-8");

$name = $_POST["username"];
$pwd = $_POST["password"];

$conn = mysqli_connect("localhost","root","root","xhj");

mysqli_query($conn,"set name utf8");

$sql = "insert into msg (username,userpwd) values ('$name','$pwd')";
/* insert into user (uname,pwd) values ('$uname','$pwd') */
$result = mysqli_query($conn,$sql);

mysqli_close($conn);

if($result){
    echo /* "1"; */"<script>alert('注册成功');location.href = '../login.html'</script>";
}else{
    echo /* "2"; */"<script>alert('注册失败');location.href = 'register.html'</script>";
}