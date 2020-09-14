$(() => {
    // 左侧选择栏，点击性别筛选按钮
    $('.refine-link').click(function () {
        if ($(this).children().prop('checked')) {
            $(this).children().prop('checked', false);
        } else {
            $(this).children().prop('checked', true);
        }
    });

    
























})