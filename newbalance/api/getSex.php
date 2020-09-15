<?php
header("Content-Type: text/html;charset=utf-8");
// 1、连接数据库
include_once "./connetDB.php";
// mysqli_query($db,"SET NAMES utf8");
mysqli_query($db,'SET NAMES utf8');
mysqli_set_charset($db,'utf8');

$sex = $_REQUEST["sex"];

if($sex == "man"){
    $sql = "SELECT * FROM goods WHERE `sex` = 'man'";
  } elseif ($sex == "female") {
    $sql = "SELECT * FROM goods WHERE `sex` = 'female'";
  } elseif ($sex == "neutral") {
    $sql = "SELECT * FROM goods WHERE `sex` = 'neutral'";
  }

  $result = mysqli_query($db,$sql);
  $data = mysqli_fetch_all($result,MYSQLI_ASSOC);
  
//   var_dump($data);
  /* 3、把数据转换为JSON数据返回 */
  echo json_encode($data,true);

?>