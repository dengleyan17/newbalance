$(() => {
    /*
        如果直接访问详情页
        没有把商品的id携带过去。显示详情页没数据
        如果从列表页去到详情页，把商品的id传递
        根据传递过来的id获商品
    */

    // 使用正则判断url地址是否携带id参数
    let idReg = /id=(\d+)/;
    let goods_id;
    // console.log(getCookie('username'));

    // console.log(idReg.test(location.search));
    if (!idReg.test(location.search)) {
        $('#container').html(`<div class="jumbotron">
                                    <h1>你还没有选择商品，请去列表页选择</h1>
                                    <p style="text-align: center;">赶紧滴</p>
                                    <p><a class="btn btn-primary btn-lg" href="./list.html" role="button">去列表页</a></p>
                                </div>`)
    } else {
        // 首次渲染
        goods_id = idReg.exec(location.search)[1];

        // console.log(goods_id);
        $.ajax({
            type: 'get',
            url: '../api/getDetail.php',
            dataType: 'json',
            data: {
                id: goods_id * 1,
            },
            success(res) {
                renderHtml(res);
            }
        });
    }

    function renderHtml(data) {
        let res = data.map((item) => {
            return `<div class="sticky-atb-outer-wrapper selectors-closed quickToBuy" style="z-index: 200;">
            <div class="stick-atb-product-info">
                <div class="sticky-atb-wrapper">
                    <div class="image">
                        <img src="${item.src}" alt="">
                    </div>
                    <div class="name-price">
                        <span class="price">￥${item.price}</span>
                    </div>
                    <div class="button-container">
                        <button class="add-to-cart disabled buyNow" type="button">
                            <span>
                                <span class="addto-content">
                                    <span class="longlabel">添加</span>
                                    <span class="lnr lnr-cart"></span>
                                </span>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        
        <section class="product-info selectors-exploded-wrapper">
        <div class="row small-collapse">
            <!-- 左侧商品图片区 -->
            <div class="small-12 medium-7 columns product-gallery-wrapper">
                <div class="product-gallery">
                    <div class="product-left">
                        <ul class="product-left-box">
                            <li class="product-left-item" idx="1">
                                <picture class="normal">
                                    <img src="https://nb.scene7.com/is/image/NB/m990n2_nb_02_i?$pdpflexf2$"
                                        alt="">
                                </picture>
                            </li>
                            <li class="product-left-item" idx="2">
                                <picture class="normal" >
                                    <img src="https://nb.scene7.com/is/image/NB/m990n2_nb_04_i?$pdpflexf2$"
                                        alt="">
                                </picture>
                            </li>
                            <li class="product-left-item" idx="3">
                                <picture class="normal">
                                    <img src="https://nb.scene7.com/is/image/NB/m990n2_nb_03_i?$pdpflexf2$"
                                        alt="">
                                </picture>
                            </li>
                            <li class="product-left-item" idx="4">
                                <picture class="normal">
                                    <img src="https://nb.scene7.com/is/image/NB/m990n2_nb_06_i?$pdpflexf2$"
                                        alt="">
                                </picture>
                            </li>
                        </ul>
                    </div>
                    <div class="product-right">
                        <div class="product-right-normalPic">
                            <picture class="normalPic clearfix" style="float: right;">
                                <img src="https://nb.scene7.com/is/image/NB/m990n2_nb_02_i?$pdpflexf2$" alt="">
                            </picture>
                        </div>
                    </div>
                </div>
            </div>
            <div class="variant-selector-container-exp93 selector-column small-12 medium-5 columns sticky">
                    <div class="row">
                        <div class="small-12 columns">
                            <div class="hide-for-mobile">
                                <span class="gender-type">
                                    ${item.deatil}
                                </span>
                                <div class="product-pricing hide-for-mobile right toppage">
                                    <span class="price">￥${item.price}</span>
                                </div>
                                <h1 class="product-name hide-for-mobile">
                                    ${item.tit}
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="small-12 columns variant-selector-container-color-exp93" style="float: none;">
                            <div class="selected-color">
                                颜色：
                                <div class="insert">灰色/白色</div>
                            </div>
                        </div>
                        <div class="detail-pic">
                            <div class="detail-pic-box" style="padding: 0 15px;">
                                <div class="detailPicItem" style="background:url('${item.src}') no-repeat; background-size: 100%;"></div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="small-12 columns variant-selector-container">
                            <div class="hide-oos">
                                <div class="sizefitlink">
                                    <div class="tool">
                                        <button class="nostyle size-chart-trigger">
                                            <span class="longlabel">尺码&尺码表</span>
                                        </button>
                                    </div>
                                </div>
                                <div class="selector-container unavailable-unclickable">
                                    <div class="selectors exploded">
                                        <div class="variant-select-wrap size">
                                            <div role="button" tabindex="0" class="variant-select-button size">
                                                <div class="title">尺码</div>
                                            </div>
                                            <ul class="variant-select size" data-attr="size">
                                                <li role="button" tabindex="0" class="select-item 37 " data-value="37"
                                                    data-display-value="37">
                                                    <span class="line">37</span>
                                                </li>
                                                <li role="button" tabindex="0" class="select-item 37_5"
                                                    data-value="37.5" data-display-value="37.5">
                                                    <span class="line">37.5</span>
                                                </li>
                                                <li role="button" tabindex="0" class="select-item 38" data-value="38"
                                                    data-display-value="38">
                                                    <span class="line">38</span>
                                                </li>
                                                <li role="button" tabindex="0" class="select-item 38_5"
                                                    data-value="38.5" data-display-value="38.5">
                                                    <span class="line">38.5</span>
                                                </li>
                                                <li role="button" tabindex="0" class="select-item 40" data-value="40"
                                                    data-display-value="40">
                                                    <span class="line">40 </span>
                                                </li>
                                                <li role="button" tabindex="0" class="select-item 40_5"
                                                    data-value="40.5" data-display-value="40.5">
                                                    <span class="line">40.5</span>
                                                </li>
                                                <li role="button" tabindex="0" class="select-item 41_5"
                                                    data-value="41.5" data-display-value="41.5">
                                                    <span class="line">41.5</span>
                                                </li>
                                                <li role="button" tabindex="0" class="select-item 42" data-value="42"
                                                    data-display-value="42">
                                                    <span class="line">42</span>
                                                </li>
                                            </ul>
                                        </div>

                                        <div class="variant-select-wrap width">
                                            <div role="button" tabindex="0" class="variant-select-button width">
                                                <div class="title">宽度</div>
                                            </div>
                                            <ul class="variant-select width" data-attr="width">
                                                <li role="button" tabindex="0" class="select-item D selected"
                                                    data-value="D" data-display-value="标准鞋宽" aria-pressed="true">
                                                    <div class="description">标准鞋宽</div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row checkout-row small-collapse medium-collapse large-collapse qty-and-add-to-bag"
                        style="display: flex;flex-wrap: wrap;margin-top: 10px;">
                        <div class="add-to-cart-wrap" style="flex-grow: 2;">
                            <!-- 加入购物车按钮 -->
                            <div class="button-container prevent-wrap">
                                <div class="hide-oos">
                                    <button class="add-to-cart disabled" type="button" alt="Add to Bag">
                                        <a href="./cart.html" style="color:snow">    
                                            <div class="product-pricing hide-for-mobile">
                                                <span class="price">￥${item.price}</span>
                                            </div>
                                            <span>
                                                <span class="addto-content">
                                                    <span class="longlabel">查看购物车</span>
                                                    <span class="lnr lnr-cart"></span>
                                                </span>
                                            </span>
                                        </a>
                                    </button>
                                </div>
                            </div>
                            <!-- 马上去结算按钮 -->
                            <div class="button-container express-add-to-cart-container buyNow">
                                <button class="express-add-to-cart disabled" style="margin-top: 14px;">
                                    <span class="longlabel">加入购物车结账</span>
                                    <span class="lnr lnr-chevron-right"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <!-- 分割线 -->
                    <hr class="border-ruler">
                    <div class="shortDesc">
                        <div class="row">
                            <div class="small-12 columns">
                                <div>经典复古，潮流百搭</div>
                            </div>
                        </div>
                    </div>
                    <!-- 产品详情 -->
                    <div class="product-details">
                        <hr class="border-ruler">
                        <div class="row section-title">
                            <div class="small-12 columns">
                                <h5 class="title turnonDetails">产品详情</h5>
                                <span class="section-toggle expand lnr-chevron-down lnr"
                                    style="display: inline-block;"></span>
                                <span class="section-toggle collapse lnr-chevron-up lnr" style="display: none;"></span>
                            </div>
                        </div>
                        <!-- 详情缩放 -->
                        <div class="row section-content" style="display: none;">
                            <div class="small-12 columns">
                                <section class="details">
                                    <div class="row">
                                        <div class="small-12 medium-12 columns">
                                            <div class="row">
                                                <div class="small-12 columns">
                                                    <div class="longdescription">
                                                        这款${item.model}鞋面采用猪皮革与网面相结合，彰显质感，舒适透气；元祖灰配色，经典复古，潮流百搭；搭载ABZORB避震中底，提升缓震性能。
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="small-12 medium-12 columns end features">
                                                    <div class="features-bucket">
                                                        <ul>
                                                            <li>货号：${item.model}</li>
                                                            <li>上市时间：2019年秋季</li>
                                                            <li>产地：美国</li>
                                                            <li>帮面材质：猪皮革+织物</li>
                                                            <li>品名：${item.deatil}</li>
                                                            <li>规格：22cm~30cm</li>
                                                            <li>等级：合格品</li>
                                                            <li>ABZORB中底</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                </div>
                            </div>
                            <hr class="border-ruler">
                        </div>
                    </div>
                </div>
            </section>
            `
        }).join('');

        $('#container').html(res);

    };

    

    // 滚动到一定程度右侧栏会显示
    $(window).scroll(function () {
        if (window.scrollY >= 450) {
            $('.quickToBuy').stop().animate({ top: 91 }, 300);
        } else {
            $('.quickToBuy').stop().animate({ top: 0 }, 300);
        }
    });

    // 左侧小图hover
    $('#container').on('mouseover', '.product-left-box li', function () {
        
        $(this).addClass('active').siblings().removeClass('active');
        let src = $(this).children().children().prop('src');
        $('.product-right .product-right-normalPic .normalPic>img').prop('src', src);
    });
    $('#container').on('mouseout', '.product-left-box li', function () {
        $(this).removeClass('active');
    });

    // 码数li添加边框效果和点击效果
    $('#container').on('mouseover', '.variant-select li', function () {
        $(this).css('border', '1px solid black').siblings().css('border', '1px solid #e5e5e5');
    });
    $('#container').on('mouseout', '.variant-select li', function () {
        $(this).css('border', '1px solid #e5e5e5');
    });
    $('#container').on('click', '.variant-select li', function () {
        $(this).addClass('clickActive').siblings().removeClass('clickActive');
    });

    // 缩放产品详情
    $('#container').on('click', '.expand', function () {
        $('.collapse').css('display', 'inline-block');
        $('.section-content').show('slow');
        $('.expand').css('display', 'none');
    });
    $('#container').on('click', '.collapse', function () {
        $('.expand').css('display', 'inline-block');
        $('.section-content').hide('slow');
        $('.collapse').css('display', 'none');
    });

    // 点击添加购物车，发送请求
    $('#container').on('click', '.buyNow', function () {
        let login = getCookie('username');

        if (!login) {
            alert('请先登录，才能看到自己的购物车噢~');
            location.href = './login&reg.html' + location.search;
            return
        }

        $.ajax({
            type: 'get',
            url: '../api/addCarData.php',
            dataType: 'json',
            data: {
                username: login,
                goods_id
            },
            success() {
                alert('购物车添加成功！');
            }
        })
    });


});