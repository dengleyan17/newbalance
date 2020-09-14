<?php
$db = mysqli_connect("gz2005.io", "root", "123456", "newbalance");

if (!$db) {
  die('连接错误: ' . mysqli_error($db));
}
?>