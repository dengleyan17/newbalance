$(()=>{
    // 滚动到一定程度右侧栏会显示
    $(window).scroll(function(){
        if(window.scrollY >= 450){
            $('.quickToBuy').stop().animate({top: 91},300);
        }else{
            $('.quickToBuy').stop().animate({top: 0},300);
        }
    });











});