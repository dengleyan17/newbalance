<?php
# 001-先连接数据库
# window系统默认的用户名是"root" 默认密码为""
$db = mysqli_connect("gz2005.io", "root", "123456", "project");

# 002-获取客户端提交的参数
$username = $_REQUEST["username"];
$password = $_REQUEST["password"];
$email = $_REQUEST["email"];

#003-对数据库执行操作
# 思路：检查当前用户名在数据库中是否已经存在，如果不存在那么就执行插入一条语句的操作，如果已经存在了那么就返回错误的提示信息。
# 查询指定表中的所有数据 SELECT * FROM user;
# 查询指定表中的所有号码 SELECT username FROM user;
# 查询指定表中的号码密码 SELECT username,password FROM user;
# 查询指定表中是否有等于指定值的数据  SELECT * FROM user WHERE username="jay";

$sql = "SELECT * FROM user WHERE username='$username'";

# 执行SQL语句
$result = mysqli_query($db,$sql);


if(mysqli_num_rows($result) == 0){

    # 该用户不存在可以直接注册
  # 具体：向数据库中写入一行数据
  $sql = "INSERT INTO `user` (`id`, `username`, `password`,`email`) VALUES (NULL, '$username', '$password','$email')";
  $result = mysqli_query($db, $sql);
  
  $arr = array("status"=>"success","msg"=> "恭喜你，注册成功！");
  echo json_encode($arr);
  // echo '{"status":"success","msg":"恭喜你，注册成功！"}';
}else{
# 该用户已经存在，不能再注册
  echo '{"status":"error","msg":"抱歉，该用户名已经被注册，请重新选择一个更优秀的名字！！"}';
}
?>