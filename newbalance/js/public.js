$(() => {
    // 导入公共头部和脚部
    $('#headerBox').load('./header.html');
    $('#footerBox').load('./footer.html');

    // 禁止选中网页文字
    document.onselectstart = function () { return false };

    
   







});