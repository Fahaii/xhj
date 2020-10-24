<?php
include('./linksql.php');

$name = $_POST["username"];

$pwd = $_POST["password"];


$sql = "select username,userpwd from msg where username='$name'";

$result = setConnect($sql);

$user = mysqli_fetch_assoc($result);

$message="";

if(!!$user){
    if($user['topwd'] === $pwd){// 用户名正确，密码正确，登录
        $message = 1;
    }else{// 用户名正确，密码错误，提示密码错误
        $message = '密码有误，请重新输入';
    }
}else{// 用户名不存在，提示用户名错误
    $message = '用户名不存在，请重新输入';
}

if($message === 1){// 正确登录后跳转下一个页面。
    echo "<script>location.href = '../pages/text.html';</script>";
    }else{//提示错误信息，重新登录页面。
        echo "<script>alert('$message');location.href = 'login.html';</script>";
    }

?>