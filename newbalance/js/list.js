$(() => {
    // 渲染列表
    // 第一次渲染的默认情况，按照默认排序，从第0条信息起

    $.ajax({
        type: 'get',
        url: '../api/getList.php',
        dataType: 'json',
        data: {
            sort: 'default',
            page: 0,
            size: 20,
        },
        success(res) {
            createListItem(res);
        }
    });

    function createListItem(data) {
        let res = data.map(item => {
            return `<li class="tile initSwatch">
            <div class="product product-tile" data-model="${item.model}" data-id="${item.goodsid}">
                <span class="new-colors-banner exp-90-only-new" ${item.new === '0' ? 'style="display:none;"' : 'style="display:block;"'}>
                    <div class="new">New</div>
                </span>
                <a href="./goods.html?id=${item.goodsid}" class="product-image">
                    <img src="${item.src}"
                        class="shot lazy exp-90-loaded"
                        alt="${item.tit}, ${item.model}" title="${item.model}">
                </a>
                <div class="product-top-spacer">
                    <p class="product-name">
                        <a href="./goods.html?id=${item.goodsid}" title="${item.tit}">
                            ${item.tit}
                        </a>
                    </p>
                    <p class="exp-90-product-gendercat">
                        ${item.deatil}
                    </p>
                    <div class="product-pricing">￥${item.price}</div>
                </div>
                <div class="swatches">
                    <div class="colorcount" ${item.color === "0" ? 'style="display: none;"' : 'style="display: block;"'}>
                        <span>${item.color}</span>颜色有货供应
                    </div>
                </div>
            </div>
        </li>`
        }).join('');

        $('#product-list-main').html(res);
    };

    // 按热销、价格高低、默认排序
    $('.sortby select').change(function () {
        let changeSort = $(this).val();
        $.ajax({
            type: 'get',
            url: '../api/getList.php',
            data: {
                sort: changeSort,
                page: 0,
                size: 20
            },
            dataType: 'json',
            success(res) {
                createListItem(res);
            }
        })

    })

    // 按照性别筛选商品
    $('.checkbox .refine-link').click(function () {

        let changeSex = $.trim($(this).text());
        console.log(changeSex);

        $.ajax({
            type: 'get',
            url: '../api/getSex.php',
            dataType: 'json',
            data: {
                sex: changeSex
            },
            success(res) {
                createListItem(res);
            }
        })
    })

    // 加载全部款式
    $('.loadingMore').click(function (e) {
        let event = e || window.event;
        event.preventDefault();
        $.ajax({
            type: 'get',
            url: '../api/getList.php',
            dataType: 'json',
            data: {
                page: 0,
                sort: $('.sortby select').find("option:selected").val(),
                size: 34
            },
            success(res) {
                createListItem(res);
            }
        });
        window.scrollTo({ top: 433, behavior: 'smooth' });
        $(this).css('display', 'none');
    })


    // 左侧选择栏，点击性别筛选按钮,并且显示在右侧
    $('.refine-link').click(function () {
        if ($(this).children().prop('checked')) {
            $(this).children().prop('checked', false);
            $(`.${$.trim($(this).text())}`).css('display', 'none');
        } else {
            $(this).children().prop('checked', true);
            $(`.${$.trim($(this).text())}`).css('display', 'inline-block');
        }
    });


    // 点击右侧关闭性别筛选。且左侧的checked取消
    $('.refbreads .refinement .lnr').click(function () {
        let lid = $.trim($(this).parent().text());
        // console.log(lid);
        $(`.checkbox .refine-link #${lid}`).prop('checked', false);
        $(this).parent().css('display', 'none');

    });






})