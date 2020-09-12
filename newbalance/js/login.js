$(() => {

    // 显示密码按钮
    $('#chk-show-password').click(function () {
        if ($(this).prop('checked')) {
            $('#loginPassword').prop('type', 'text');
        } else {
            $('#loginPassword').prop('type', 'password');
        }
    });
    $('#reg-show-password').click(function () {
        if ($(this).prop('checked')) {
            $('#registerPassword').prop('type', 'text');
            $('#registerTestpassword').prop('type', 'text');
        } else {
            $('#registerPassword').prop('type', 'password');
            $('#registerTestpassword').prop('type', 'password');
        }
    });

    // 注册表单验证
    let option = {
        registerName: '/^[a-zA-Z0-9]{6,9}$/.test(val)',
        registerEmail: '/^[a-z0-9A-Z]+[-|a-z0-9A-Z._]+@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\\.)+[a-z]{2,}$/.test(val)',
        registerTestemail: '$("#registerTestemail").val() === $("#registerEmail").val()',
        registerPassword: '/^[a-zA-Z0-9]{8,12}$/.test(val)',
        registerTestpassword: '$("#registerTestpassword").val() === $("#registerPassword").val()'

    }
    $('.formfield input').blur(function () {
        let val = $.trim($(this).val());
        let regIdx = this.id
        // console.log(eval(option[idIdx]));
        if (eval(option[regIdx])) {
            $(this).parent().parent().removeClass('error');
            $(this).parent().parent().removeClass('errorTotal');
            $(this).next().css('display', 'none');
        } else {
            $(this).parent().parent().addClass('error');
            $(this).parent().parent().addClass('errorTotal');
            $(this).next().css('display', 'block');
        }

    });

    // 点击注册按钮
    $('#regBtn').click(function (e) {
        let event = e || window.event;
        event.preventDefault();

        $('.formfield input').trigger('blur');
        if ($('.errorTotal').length !== 0) {
            return
        } else if (!$('#reg-check').prop('checked')) {
            return
        }

        let data = {
            username: $('#registerName').val(),
            password: $('#registerPassword').val(),
            email: $('#registerEmail').val()
        }

        $.ajax({
            url: '../api/register.php',
            type: 'get',
            data,
            dataType: 'json',
            success(res) {
                console.log(res);

                if (res.status === 'success') {
                    alert(`${res.msg}`);
                    window.location.href = './login&reg.html';
                } else {
                    alert(`${res.msg}`);
                }
            }
        })

    });

    // 登录表单验证
    let loginOpiton = {
        loginUsername: '$("#loginUsername").val().length === 0',
        loginPassword: '$("#loginPassword").val().length === 0'
    }
    $('.loginForm input').blur(function () {
        let logIdx = this.id;

        if (eval(loginOpiton[logIdx])) {
            $(this).parent().parent().addClass('error');
            $(this).parent().parent().addClass('loginerrorTotal');
            $(this).next().css('display', 'block');
        } else {
            $(this).parent().parent().removeClass('error');
            $(this).parent().parent().removeClass('loginerrorTotal');
            $(this).next().css('display', 'none');
        }
    })


    // 登录按钮点击
    $('#loginBtn').click(function (e) {
        let event = e || window.event;
        event.preventDefault();

        $('.loginForm input').trigger('blur');
        if ($('loginerrorTotal').length !== 0) {
            return
        }

        let data = {
            email: $.trim($('#loginUsername').val()),
            password: $.trim($('#loginPassword').val())
        }

        $.ajax({
            url: '../api/login.php',
            type: 'post',
            dataType: 'json',
            data,
            success(res) {
                if (res.status === 'success') {
                    alert(`${res.data.msg}`);
                    window.location.href = './index.html';
                    if ($('#login-rememberme').prop('checked')) {
                        addCookie('username', `${res.data.username}`, 176);
                    } else {
                        addCookie('username', `${res.data.username}`);
                    }
                } else {
                    alert(`${res.data.msg}`);
                }
            }
        })


    })




















    function addCookie(name, value, expireHours) {
        var exdate = new Date();
        exdate.setTime(exdate.getTime() + expireHours * 60 * 60 * 1000);
        document.cookie = `${name}=${escape(value)};expires=${exdate.toUTCString()};path=/`;

    }



})