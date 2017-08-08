/**
 * Created by hama on 2017/7/31.
 */
$(function(){
    /*顶部的鼠标移入颜色变化*/
    //1.发生的目标元素 a
    //2.什么事件 mouseover,mouseout
    //3.改变链接颜色
    $('.top a').mouseover(function(event){$(this).css('color','#fff');}).mouseout(function(){$(this).css('color','#a4b094');})
    $('.shopCar').mouseover(function(){$(this).css({color:'#FF6700',background:'#fff'});$('.goods').stop(true,false).slideDown();}).mouseout(function(){$(this).css({color:'#a4b094',background:'#424242'});$('.goods').stop(true,false).slideUp();});
    var flag = true;
    /*表单的输入框移入效果*/
    $('.ser1').mouseover(function(){if(flag){$('.ser1 input').css('border','1px solid #000');$('.ser2').css('border','1px solid #000').css('borderLeft','none');}}).mouseout(function(){if(flag){$('.ser1 input').css('border','1px solid #ccc');$('.ser2').css('border','1px solid #ccc').css('borderLeft','none');}})
    /*热门搜索的移入效果*/
    $('.hot a').mouseover(function(){$(this).css({'color':'#fff', 'background':'orange'})}).mouseout(function(){$(this).css({'color':'#757575', 'background':'#eee'})})
    /*按钮移入后的效果*/
    $('.ser2').mouseover(function(){if(flag){$('.ser1 input').css({'border':'1px solid #000', 'border-right':'none'});
            $(this).css({
                'background':'orange',
                'color':'#fff',
                'border':'none'
            })
        }
    }).mouseout(function(){
        if(flag){
            $('.ser1 input').css('border','1px solid #ccc');
            $(this).css({
                'background':'#fff',
                'color':'#000',
                'border':'1px solid #ccc',
                'border-left':'none'
            })
        }
    })
    /*表单获取焦点的时候*/
    $('.ser1 input').focus(function(){
        flag = false;
        $(this).css('border-color','orange');
        $('.ser2').css('border-color','orange');
        $('.keywordsList').show().css('border-color','orange');
    }).blur(function(){
        flag = true;
        $(this).css('border-color','#ccc');
        $('.ser2').css('border-color','#ccc');
        $('.keywordsList').hide().css('border-color','#ccc');
    })
    /*导航效果开始*/
    $('.nav li').mouseover(function(){
        $(this).children('a').css('color','#FF6700');
        if($(this).index() < 7){
            $('.select').removeClass('hide');
            $('.select').slideDown().finish();
            $('.select').find('ul').addClass('hide');
            $('.select').find('ul').eq($(this).index()).removeClass('hide');
        }
    }).mouseout(function(){
        $(this).children('a').css('color','#000');
    })
    $('.nav').mouseout(function(){
        $('.select').slideUp();
    })
    $('.select').find('ul').mouseover(function(){
        $('.select').slideDown().finish() //停止当前动画和动画队列
    }).mouseout(function(){
        $('.select').slideUp()
    })
    /*轮播图的效果*/
    var num = 0;
    var timer;
    timer = setInterval(autoplay,5000)
    $('.round li').mouseover(function(){
        clearInterval(timer);
        num = $(this).index();
        displayImg();
    })
    $('.banner').mouseover(function(){
        clearInterval(timer);
    }).mouseout(function() {
        timer = setInterval(autoplay, 5000)
    });
    $('.direcL').click(function(){
        //上一张
        clearInterval(timer);
        num = num - 1;
        if(num < 0){
            num = 4;
        }
        displayImg();
    })
    $('.direcR').click(function(){
        //下一张
        clearInterval(timer);
        num = num + 1;
        if(num > 4){
            num = 0;
        }
        displayImg();
    })
    function displayImg(){
        $('.round li').eq(num).css('background','orange').siblings().css({
            'background':"#000",
            'opacity':'0.5'
        });
        $('.banner > img').eq(num).removeClass('hide').siblings('img').addClass('hide');
    }
    function autoplay (){
        num ++;
        if(num > 4){
            num = 0;
        }
        displayImg();
    }
    /*隐藏的导航*/
    $('.navL li').mouseover(function(){
        $(this).css('background','#ff6700');
        $('.navHide').removeClass('hide');
        $('.ulHide').addClass('hide');
        $('.ulHide').eq($(this).index()).removeClass('hide');
    }).mouseout(function(){
        $(this).css('background','transparent');
    })
    /*鼠标移出二级导航的范围后，让它消失*/
    $('.navL').mouseout(function(){
        $('.navHide').addClass('hide');
    })
    /*用户移入三级导航的时候，也要让它显示*/
    $('.ulHide').mouseover(function(){
        $('.navHide').removeClass('hide');
        $('.navL li').eq($(this).index()).css('background','#ff6700');
    }).mouseout(function(){
        $('.navHide').addClass('hide');
        $('.navL li').eq($(this).index()).css('background','transparent');
    })

    //小米明星单品
    $('.starPro .prev').click(function () {
        $(this).css('color','orange');
        $('.starPro ul').css('left','-1226px')
    }).mouseout(function () {
        $(this).css('color','rgb(176,180,188)');
    })
    $('.starPro .next').click(function () {
        $(this).css('color','orange');
        $('.starPro ul').css('left','0px')
    }).mouseout(function () {
        $(this).css('color','rgb(176,180,188)');
    })

    $('.product1').mouseover(function () {
        $(this).css({
            'margin-top':'0px',
            'box-shadow':'0 0 30px gray '
        })
    }).mouseout(function () {
        $(this).css({
            'margin-top':'4px',
            'box-shadow':'none '
        })
    })
    $('.productR li').mouseover(function () {
        $(this).css({
            'margin-top':'-4px',
            'box-shadow':'0 0 30px gray '
        })
    }).mouseout(function () {
        $(this).css({
            'margin-top':'0px',
            'box-shadow':'none '
        })
    })
    $('.productR h2 a').mouseover(function () {
        $(this).css('color','orange');
    }).mouseout(function () {
        $(this).css('color','#000');
    })
    $('.toAll a').mouseover(function () {
        $(this).css('color','orange');
    }).mouseout(function () {
        $(this).css('color','grey');
    })
    $('.productL li img').mouseover(function () {
        $(this).css({
            'margin-top':'8px',
            'box-shadow':'0 0 30px gray '
        })
    }).mouseout(function () {
        $(this).css({
            'margin-top':'10px',
            'box-shadow':'none '
        })
    })

    $('.ProLi li').mouseover(function () {
        $(this).find('.slideDiv').stop(true,false).slideDown().removeClass('hide')
    }).mouseout(function () {
        $(this).find('.slideDiv').stop(true,false).slideUp().addClass('hide')
    })
    function tabCut(cut1,cut2) {
        cut1.mouseover(function () {
        $(this).css({
            'color':'orange',
            'border-bottom':'2px solid orange'
        }).siblings('li').css({
            'color':'rgb(176,180,188)',
            'border-bottom':'none'
        });
        cut2.eq($(this).index()).removeClass('hide').siblings('.ProLi').addClass('hide');

    })
    }
    tabCut($('.list41 li'),$('.productR2 .ProLi'))
    tabCut($('.list42 li'),$('.productR3 .ProLi'))
    tabCut($('.list43 li'),$('.productR4 .ProLi'))

//    为你推荐
    $('.recommend .scroll2 li').mouseover(function () {
        $(this).css('padding-top','8px')
    }).mouseout(function () {
        $(this).css('padding-top','10px')
    })
    var n = 0;
    $('.recommend .next2').click(function () {
        n++;
        $(this).css('color','orange');
        if(n<4){
            $('.scroll2').css('left','-'+(n*1226)+'px')
        }else{
            n =3;
        }
        return n;
    }).mouseout(function () {
        $(this).css('color','rgb(176,180,188)');
    })
    $('.recommend .prev2').click(function () {
        $(this).css({'color':'orange'});
        n--;
        if(n>0){
            $('.scroll2').css('left',-(n*1226)+'px')
        }else{
            n =0;
        }
    }).mouseout(function () {
        $(this).css('color','rgb(176,180,188)');
    })
//    热评产品
    $('.hotList li').mouseover(function () {
        $(this).css({'margin-top':'15px', 'box-shadow':'0 0 30px gray '})
    }).mouseout(function () {
        $(this).css({
            'margin-top':'19px',
            'box-shadow':'none '
        })
    })
    //内容
    $('.contList  .contList-1').mouseover(function () {
        $('.contList-1 .l2').eq($(this).index()).css('background','lightgrey')
        $('.contList-1 .r2').eq($(this).index()).css('background','lightgrey')
    }).mouseout(function () {
        $('.contList-1 .l2').css('background','white')
        $('.contList-1 .r2').css('background','white')
    })
    //视频内容
    $('.video .videoList li').mouseover(function () {
        $(this).css({
            margin:'15px 10px 0 0',
            boxShadow:'0 0 28px gray'
        });
        $('.video .videoList .iconfont').eq($(this).index()).css('color','orange');
    }).mouseout(function () {
        $(this).css({
            margin:'20px 10px 0 0',
            boxShadow:'none'
        });
        $('.video .videoList .iconfont').css('color','#fff');
    })
})