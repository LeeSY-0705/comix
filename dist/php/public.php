<?php
    header("content-type:text/html;charset=utf-8");
    /*
        参数:
            服务器主机的地址
            数据库登陆的用户名
            登陆密码
            数据库的名称
    */
    $server = 'localhost';
    $uName = 'root';
    $uPwd = 'root';
    $db_name = 'test';

    //建立连接
    $connect = new mysqli($server,$uName,$uPwd,$db_name);

    //判断是否连接失败！
    if($connect -> connect_error){
        //返回失败信息以及报错信息；
        die("数据库连接失败".$connect -> connect_error);
    }
    
    //设置编码
    $connect -> query("set names utf-8");

    
?>