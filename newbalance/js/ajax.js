function ajax(option) {
    // 判断必要参数
    if (!option.url) {
        throw new Error('请输入发送请求的url');
    }

    // 设置默认参数
    let info = {
        type: 'get',
        data: '',
        async: true,
        success() {

        }
    }

    // 循环传递参数，若没有发送参数则使用默认值
    for(let key in option){
        info[key] = option[key];
    }

    // 判断请求是get or post 
    if(!/^(get|post)$/i.test(info.type)){
        throw new Error('请使用get或post请求');
    }

    // 判断参数是否符合要求
    if(!(typeof info.data === 'string' && /^(\w+=\w+&?)*$/.test(info.data) || Object.prototype.toString.call(info.data) === '[object Object]')){
        throw new Error('参数只支持对象或key=value');
    }

    // 将对象参数处理成key=value
    let str = '';
    if(Object.prototype.toString.call(info.data) === '[object Object]'){
        for(let key in info.data){
            str += `${key}=${info.data[key]}&`
        }
    }
    info.data = str.slice(0,-1);

    // 判断回到函数是否正确
    if(!(Object.prototype.toString.call(info.success) === "[object Function]")){
        throw new Error('回调函数不正确');
    }

    // 判断async的值
    if(!(Object.prototype.toString.call(info.async) === "[object Boolean]")){
        throw new Error('async是布尔值类型');
    }
    let xhr;
    try{
        xhr = new XMLHttpRequest();
    }catch(error){
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }

    if(/^(get)$/i.test(info.type)){
        xhr.open(info.type,info.url + '?' + info.data,info.async);
        xhr.send();
    }else{
        xhr.open(info.type,info.url,info.async);
        xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
        xhr.send(info.data);
    }

    xhr.onreadystatechange = ()=>{
        if(/^2\d{2}$/.test(xhr.status) && xhr.readyState === 4){
            info.success(xhr.responseText);
        }
    }

}


// 封装一个promise的ajax
function pAjax(option) {
    return new Promise(function (resvole, reject) {
        ajax({
            url: option.url,
            data: option.data || '',
            type: option.type || 'get',
            async: option.async || true,
            success(res) {
                // console.log(res3);
                resvole(JSON.parse(res));
            }
        })
    })
}