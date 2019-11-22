<?php
    header("Access-Control-Allow-Origin:*");
    header('content-type:text/html;charset=utf-8');
    include './public.php';

    $userN = @$_POST['userName'];
    $userP = @$_POST['userPwd'];

    $sql = "select * from registerlogin where name='$userN'";
    
    $res = mysqli_query($connect,$sql);
   
    if(!$arr = mysqli_fetch_assoc($res)){
       
        $sql1 = "select * from registerlogin where phone='$userN'";
        $res1 = mysqli_query($connect,$sql1);
        if(!$arr1 = mysqli_fetch_assoc($res1)){
            $data = array(
                'state' => 0,
                'info' => '用户名不存在'
            );
            die(json_encode($data));
        }else{
            $sql2 = "select * from registerlogin where password='$userP'";
            $res2 = mysqli_query($connect,$sql2);
            if($arr2 = mysqli_fetch_assoc($res2)){
                $data = array(
                    'state'=> 1,
                    'info' => '登陆成功',
                    "userName" => "$userN"
                );
                die(json_encode($data));
            }else{
                $data = array(
                    'state' => 2,
                    'info' => '密码不正确'
                    
                );
                die(json_encode($data));
            }
        }         
    }else{
        $sql2 = "select * from registerlogin where password='$userP'";
        $res2 = mysqli_query($connect,$sql2);
        if($arr2 = mysqli_fetch_assoc($res2)){
            $data = array(
                'state'=> 1,
                'info' => '登陆成功',
                "userName" => "$userN"
            );
            die(json_encode($data));
        }else{
            $data = array(
                'state' => 2,
                'info' => '密码不正确'
            );
            die(json_encode($data));
        }
    }









?>