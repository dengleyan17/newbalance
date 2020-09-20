// 在购物车页面判断是否有登录，如果有登录就显示购物车的数据
$(()=>{
let login = getCookie('username');



if (!login) {
    alert('登陆后再查看购物车有啥吧')
    location.href = './login&reg.html?pathname=' + location.href;
};

$.ajax({
    type: 'get',
    url: '../api/getCarData.php',
    dataType: 'json',
    data: {
        username: login
    },
    success(res) {
        // console.log(res);
        renderHtml(res);
        localStorage.setItem('carData',JSON.stringify(res));
    }
});

function renderHtml(data) {
    let str;
    if (!data[0]) {
        str = `<div class="cart metadata">
                    <div class="row">
                        <div class="small-12  columns emptycart-maincontainer">
                            <div class="row">
                                <div class="small-12 columns">
                                    <p class="h1 cart-empty no-h-style" style="margin-bottom: 30px;">
                                            您的购物车没有商品。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="small-12 columns">
                             <form class="continue-shopping-btn-form" id="dwfrm_cart_d0suljnhgjqc">
                                 <button class="close-continue-shopping button cancel compact">
                                    <span>
                                        <a href="./list.html">继续购物</a>
                                    </span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>`
        $('#itemBox').html(str);
        return
    }
    let allSelect = data.every(item => {
        return item.is_select == '1';
    });
    let total = totalData(data);

    str = `<div class="page-body content-body">
            <div class="cart metadata">
                <div class="row cart-login">
                    <div class="small-12 columns">
                        <a href="./list.html" class="button cancel compact continue-shopping">
                            <span class="icon-outlinearrowleft"></span>
                            <span> 来来来，咱们返回列表页继续购买~</span>
                        </a>
                    </div>
                </div>
                <div class="row">
                    <div class="small-12 columns">
                        <div class="cart-title">
                            您的购物车
                        </div>
                    </div>
                </div>
                <!-- 商品列表 -->
                <form class="checkoutProgressForm custom" name="cartForm" id="dwfrm_cart">
                    <div class="row">
                        <div class="small-12 columns">
                            <div class="bag">
                                <!-- 全选，清除所有 -->
                                <div class="row">
                                    <div class="small-12 columns bag-header shopping-list">
                                        <div class="row">
                                            <span>
                                                <label for="allChecked" style="float: left;line-height: 3em;
                                                margin-left: 15px;">
                                                    <input type="checkbox" ${allSelect ? 'checked' : ''} id="allChecked" name="allChecked"
                                                        style="vertical-align:middle;margin: 0;">
                                                    <span>checked</span>
                                                </label>
                                            </span>
                                            <span>
                                                <div style="float: right;"  id="clear">
                                                    <span class="icon-alt-close" id="clear"></span>
                                                    <span id="clear">clear</span>
                                                </div>
                                            </span>
                                        </div>
                                    </div>
                                </div>`

    data.forEach(item => {
        // console.log(item);
        str += `<div class="product-line row" data_id="${item.goodsid}">
        <div class="remove-from-list" data_id="${item.goodsid}">
            <a href="###" id="delete"></a>
        </div>
        <div class="small-1 columns">
            <span class="pList-remove-from-cart plist-cart-action">
                <a href="###">
                    <input type="checkbox" id="select" ${item.is_select === 1 ? 'checked' : ''} data_id="${item.goodsid}">
                </a>
            </span>
        </div>
        <!-- 小图 -->
        <div class="small-4 medium-2 columns image">
            <a href="./goods.html?id=${item.goodsid}">
                <img src="${item.src}"
                    alt="">
            </a>
        </div>
        <div class="small-7 medium-9 columns">
            <div class="row">
                <div class="small-12 columns">
                    <div class="product-name">
                        <a href="./goods.html?id=${item.goodsid}">${item.deatil}</a>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="small-12 medium-4 columns details">
                    <div class="product-pricing">
                        <div class="pricing">
                            <div class="price">
                                <div class="salesprice">
                                    ¥${item.price}
                                </div>
                            </div>
                        </div>
                        <br>
                        <br>
                    </div>
                    <div class="product-attribute">
                        <span class="label">货号:</span>
                        <span class="value">${item.model}</span>
                    </div>
                    <div class="product-attribute">
                        <span class="label">尺码和宽度:</span>
                        <span class="value">
                            41.5
                            - D
                        </span>
                    </div>
                    <div class="product-attribute">
                        <span class="label">颜色:</span>
                        <span class="value">灰色/卡斯尔洛克色</span>
                    </div>
                </div>
                <div class="small-12 medium-3 columns actions">
                    <div class="stockstate">
                        <ul>
                            <li class="isinstock">
                                <span>支付完成的订单, 会在下单后24小时内发货</span>
                                <br>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="small-12 medium-2 columns quantity btn-group" role="group" data_id="${item.goodsid}">
                    <div class="btn" id="reduce">-</div>
                    <div class="btn">${item.cart_number}</div>
                    <div class="btn" id="add">+</div>
                </div>
                <div class="small-12 medium-3  columns line-total"
                    style="text-align: center;padding-top: 5px;">
                    <div class="price">
                        ¥${item.price}
                    </div>
                </div>
            </div>
        </div>
    </div>`
    });

    str += `</div>
                </div>
            </div>
            </form>
            <!-- 结算面板 -->
            <div class="row">
                <div id="cartpromoform" class="small-12 medium-4 columns">
            </div>
                <div class="small-12 medium-4 columns">
                    <div class="cartordertotals" id="cartordertotals">
                        <div class="order-total">
                            <ul>
                                <li class="subtotal">
                                    <span class="total-type">订单数量：</span>
                                    <span class="total-value">${total.count}</span>
                                </li>
                                <li class="total order-total">
                                    <span class="total-type">总计：</span>
                                    <span class="total-value">￥${total.totalPrice}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="small-12 columns">
                    <hr class="spacer">
                </div>
            </div>
            <div class="row only-screen">
                <div class="small-12 columns">
                    <div class="cart-actions row">
                        <div class="checkout-button standard">
                            <fieldset>
                                <button id="continuecheckoutbutton"
                                    class="button primary compact checkoutProgressButton continuecheckout"
                                    name="dwfrm_cart_checkoutCart">
                                    <span>订单结算</span>
                                    <span class="icon-lock"></span>
                                </button>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="small-12 columns">
                    <hr class="spacer">
                </div>
            </div>
        </div>
    </div>
</div>`

    $('#itemBox').html(str);


};

// 换色
// $('#itemBox').on('click','#select',function(e){
//     e.stopPropagation();
//     console.log($(this).parent().parent().parent().parent())
//     if($(this).prop('checked')){
//         $(this).parent().parent().parent().parent().removeClass('not-in-cart');
//     }else{
//         $(this).parent().parent().parent().parent().addClass('not-in-cart');
//     }

// })


let itemBox = document.querySelector('#itemBox');

itemBox.onclick = (event) => {
    let e = event || window.event;
    e.stopPropagation();
    let t = e.target;
    let goods_id,goods_num;
    

    switch(t.id){
        case 'add':
            goods_id = t.parentNode.getAttribute('data_id');
            goods_num = t.previousElementSibling.innerHTML * 1 + 1;
            upDataNum(login,goods_id,goods_num);
            break;
        case 'reduce':
            goods_id = t.parentNode.getAttribute('data_id');
            goods_num = t.nextElementSibling.innerHTML * 1 - 1;
            if(goods_num <= 1){
                goods_num = 1;
            }
            upDataNum(login,goods_id,goods_num);
            break;
        case 'delete':
            goods_id = t.parentNode.getAttribute('data_id');
            confirm('是否确认删除宝贝？');
            removeData(login,goods_id);
            window.location.href = './cart.html';
            break;
        case 'allChecked':
            let allCheckedCarData = JSON.parse(localStorage.getItem('carData'));
            allCheckedCarData.forEach(item => {
                item.is_select = t.checked ? 1 : 0;
            });
            renderHtml(allCheckedCarData);
            localStorage.setItem('carData',JSON.stringify(allCheckedCarData));
            break;
        case 'select':
            goods_id = t.getAttribute('data_id');
            let checkedCarData = JSON.parse(localStorage.getItem('carData'));
            checkedCarData.forEach(item => {
                if(item.goodsid === goods_id){
                    item.is_select = t.checked ? 1 : 0
                }
            });
            renderHtml(checkedCarData);
            localStorage.setItem('carData',JSON.stringify(checkedCarData));
            break;
        case 'clear':
            clearData(login);
            break;
    }

}


function upDataNum(username,goods_id,goods_num){
    $.ajax({
        type: 'get',
        url: '../api/updCarData.php',
        dataType: 'json',
        data:{
            username,
            goods_id,
            goods_num
        },
        success(res){
            let carData = JSON.parse(localStorage.getItem('carData'));
            carData.forEach(item => {
                if(item.goodsid === goods_id){
                    item.cart_number = goods_num;
                }
            })
            renderHtml(carData);
            localStorage.setItem('carData',JSON.stringify(carData));
        }
    })
}

function removeData(username,goods_id){
    $.ajax({
        type: 'get',
        url: '../api/removeCarData.php',
        dataType: 'json',
        data:{
            username,
            goods_id
        },
        success(res){
            let carData = JSON.parse(localStorage.getItem('carData'));
            newCarData = carData.filter(item => {
                return item.goods_id !== goods_id
            });
            renderHtml(newCarData);
            localStorage.setItem('carData',JSON.stringify(newCarData));
        }
    })
}

function clearData(username){
    $.ajax({
        type: 'get',
        url: '../api/clearCarData.php',
        dataType: 'json',
        data:{
            username
        },
        success(res){
            if(res.code){
                localStorage.removeItem('carData');
                renderHtml([]);
            }
        }
    })
}

function totalData(data){
    let selectData = data.filter(item => {
        return item.is_select === 1
    });
    let obj = {
        count: 0,
        totalPrice: 0
    };

    selectData.forEach(item => {
        obj.count += item.cart_number * 1;
        let p = item.price.split(",").join('')
        obj.totalPrice += p * item.cart_number;
    });
    return obj;
}







});
