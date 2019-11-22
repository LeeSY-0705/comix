function Register(){
    this.btn = $('.btn');
    this.user_phone = $('.user_phone');
    this.user_name = $('.user_name');
    this.user_pwd = $('.user_pwd');
    this.eventBind()
}
Register.prototype.run = function(res){
    // console.log(res)
    switch (res.state){
        case 0 : alert('用户名已存在');locationbar.href = "http://localhost:8888/html/register.html"
        break;
        case 2 : alert('手机号已存在');location.href = "http://localhost:8888/html/register.html"
        break;
        case 3 : alert('注册失败');
        break;
        case 1 : alert('注册成功');location.href = "http://localhost:8888/html/login.html"
    }
}
Register.prototype.eventBind = function(){
    let _this = this;
    this.btn.click(function(){
        // console.log(_this.user_name.val())
        // console.log(1)
        $.ajax('http://localhost/1923/comix/dist/php/register.php',{
            type:'get',
            dataType : 'json',
            data:{
                userName : _this.user_name.val(),
                userPwd: _this.user_pwd.val(),
                userPhone : _this.user_phone.val()
            },
            success : function(res){
                _this.run(res)
            }
        })
        
    })
}

new Register()
