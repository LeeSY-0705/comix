function Login(){
    this.user_name = $('.user_name');
    this.user_pwd = $('.user_pwd');
    this.btn = $('.btn');
    this.getData();
}
Login.prototype.getData = function(){
    let _this = this;
    this.btn.click(function(){
        $.ajax('http://localhost/1923/comix/dist/php/login.php',{
            data:{
                userName : _this.user_name.val(),
                userPwd : _this.user_pwd.val()
            },
            type : 'post',
            dataType : 'json'
        })
        .then( function(res){
            _this.run(res)
            
        })
    })    
}
Login.prototype.run = function(res){
    switch (res.state){
        case 0 : alert('用户名不存在');location.href = "http://localhost:8888/html/login.html";break;
        case 2 : alert('密码不正确');location.href = "http://localhost:8888/html/login.html";break;
        case 1 : alert('登录成功');location.href = "http://localhost:8888/html/index.html";$.cookie('userName', res.userName, { expires: 7 ,path :'/'})
    }
}
new Login()