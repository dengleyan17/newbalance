// 在购物车页面判断是否有登录，如果有登录就显示购物车的数据
let login = getCookie('username');

if(!login){
    alert('登陆后再查看购物车有啥吧')
    location.href = './login&reg.html?pathname=' + location.href;
};

$.ajax({
    type: 'get',
    url: '../api/getCarData.php',
    dataType: 'json',
    data:{
        username: login
    },
    success(res){
        console.log(res);
    }
})