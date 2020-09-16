<?php
header("Content-Type: text/html;charset=utf-8");
// 1、连接数据库
include_once "./connetDB.php";
// mysqli_query($db,"SET NAMES utf8");
mysqli_query($db,'SET NAMES utf8');
mysqli_set_charset($db,'utf8');
// $con = mysqli_connect('gz2005.io','root','123456','newbalance');

$id = $_REQUEST['id'];

$sql = "SELECT * FROM `goods` WHERE `goodsid`='$id'";

$res = mysqli_query($db,$sql);

$row = mysqli_fetch_assoc($res);

$result = mysqli_query($db,$sql);
$data = mysqli_fetch_all($result,MYSQLI_ASSOC);

/* 3、把数据转换为JSON数据返回 */
echo json_encode($data,true);

?>
