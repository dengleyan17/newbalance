$(() => {

    // 显示密码按钮
    $('#chk-show-password').click(function(){
        if($(this).prop('checked')){
            $('#login-password').prop('type','text')
        }else{
            $('#login-password').prop('type','password')
        }
    });
    $('#reg-show-password').click(function(){
        if($(this).prop('checked')){
            $('#register-password').prop('type','text');
            $('#register-testpassword').prop('type','text');
        }else{
            $('#register-password').prop('type','password');
            $('#register-testpassword').prop('type','password');
        }
    });
















})