// 设置cookie
function setCookie(key, val, expires) {
    // 创建时间对象
    let t = new Date();
    // 将当前时区（东八区，晚8小时）设置为零时区，然后加上需要设置cookie的过期时间expires
    let time = t.getTime() - 8 * 3600000 * + expires * 1000;
    // 将计算好的时间设置为当前时间对象t
    t.setTime(time);
    // 设置cookie
    document.cookie = `${key}=${val};expires=${t}`;
}
function setCookie(key, value, expires) {
    /* 当前的+8时区的当前时间 */
    let time = new Date();
    let t = time.getTime() - 8 * 60 * 60 * 1000 + expires * 1000;
    time.setTime(t);
    document.cookie = `${key}=${value};expires=` + time;
}
function addCookie(name, value, expireHours) {
    var exdate = new Date();
    exdate.setTime(exdate.getTime() + expireHours * 60 * 60 * 1000);
    document.cookie = c_name + "=" + escape(value) + ((expireHours == null) ? "" : ";expires=" + exdate.toUTCString());
}

// 获取cookie
function getCookie(key) {
    // 获取cookie，并根据;进行截取
    let str = document.cookie.split('; ');
    // 定义一个返回值
    let value = '';
    // 遍历截取好的cookie字符串数组
    str.forEach(item => {
        let arr = item.split('=');
        if (arr[0] === key) {
            value = arr[1];
        }
    })

    return value;
}