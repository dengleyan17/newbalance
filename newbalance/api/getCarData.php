<?php
    $username = $_REQUEST['username'];

    #链接数据库
    $con = mysqli_connect('gz2005.io','root','123456','newbalance');

    # 设置SQL语句
    $sql = "SELECT * FROM `car` WHERE `username`='$username'";
    $res = mysqli_query($con,$sql);
    if(!$res){
        die('error for mysql' . mysqli_error($con));
    }
    // print_r($res);
    $arr = array();
    # 拿出该用户的购物车的上商品id
    while($row = mysqli_fetch_assoc($res)){
        array_push($arr,$row);
    }

   

    $dataArr = array();
    foreach($arr as $key => $value){
        // print_r($value);
        $id = $value['goods_id'];
        $sql2 = "SELECT * FROM `goods` WHERE `goodsid` = '$id'";
        $res2 = mysqli_query($con,$sql2);
        $row2 = mysqli_fetch_assoc($res2);
        # 把购物车中商品数量的值 添加给商品中的cart_number
        $row2['cart_number'] = $value['goods_num'];
        array_push($dataArr,$row2);
    }

    print_r(json_encode($dataArr));
?>