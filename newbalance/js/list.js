$(() => {
    // 渲染列表
    let data = {
        sort: 'default',
        page: 0
    };

    $.ajax({
        type: 'get',
        url: '../api/getList.php',
        dataType: 'json',
        data,
        success(res) {
            createListItem(res);
        }
    });

    function createListItem(data) {
        let res = data.map(item => {
            return `<li class="tile initSwatch">
            <div class="product product-tile" data-model="${item.model}" data-id="${item.goodsid}">
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
                    <div class="product-pricing">￥${item.pirce}</div>
                </div>
            </div>
        </li>`
        }).join('');

        $('#product-list-main').html(res);
    };








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