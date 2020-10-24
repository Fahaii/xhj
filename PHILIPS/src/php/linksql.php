<?php
header("content-Type:text/html;charset=utf-8");
function setConnect($sql){
    $conn = mysqli_connect("localhost","root","root","xhj");
    mysqli_query($conn,"set names utf8");
    $result = mysqli_query($conn,$sql);
    return $result;
}

?>