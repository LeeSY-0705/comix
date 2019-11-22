<?php
    // error_reporting(E_ALL ^ E_NOTICE);
    header("Access-Control-Allow-Origin:*");
    header('content-type:text/html;charset=utf-8');
    include './public.php';

    $userN = @$_GET['userName'];
    $userPh = @$_GET['userPhone'];
    $userP = @$_GET['userPwd'];

    // echo $userN;

    $sql = "select * from registerlogin where name='$userN'";
    $res = mysqli_query($connect,$sql);
    
    if($arr = mysqli_fetch_assoc($res)){
        
        $data = array(
            'state' => 0 ,
            'info' => '用户名已存在'
        );
        die(json_encode($data));
    }else{
        $sql1 = "select * from registerlogin where phone='$userPh'";
        $res1 = mysqli_query($connect,$sql1);
        if($arr1 = mysqli_fetch_assoc($res1)){
            
            $data = array(
                'state' => 2,
                'info' => '手机号已存在'
            );
            echo json_encode($data);
        }else{
            $sql2 = "insert into registerlogin(name,phone,password) values ('$userN','$userPh','$userP')";
            $res2 = mysqli_query($connect,$sql2);
            if($res2){
                $data = array(
                    'state' => 1,
                    'info' => '注册成功'
                );
                die(json_encode($data));              
            }
        }
    }
    
    
    // if(!$res && !$res1){
        
    // }
       
    
    






?>