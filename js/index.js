$(function(){
    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        autoplay:{
            disableOnInteraction: false,
        },
        effect:'fade',
        pagination: {
          el: '.swiper-pagination',
          clickable :true
        },
    })    



    var ctlist = $(".all-box > .ct-list >ul >li");
    var ctwrap =$(".all-box > .ct-list > div >.ct-wrap");
    // console.log(ctwrap)
    $.each(ctlist, function (indexInArray, valueOfElement) { 
        ctlist.eq(0).css({"color":"#fff","background":"red","border":"1px solid red"})
        $(this).mouseover(function(){
            ctlist.eq(indexInArray).css({"color":"#fff","background":"red","border":"1px solid red"}).siblings().css({"color":"#424242","background":"#fff","border":"1px solid #424242"})
            ctwrap.eq(indexInArray).css("display","block").siblings().css("display","none");
            // ctwrap.eq(indexInArray).addClass("animated fadeIn").siblings().removeClass("animated fadeIn")
        

        })
    });


    //分享
    jsModern.share({
        qrcode: "#share-qrcode",
        douban: "#share-douban",
        qzone: "#share-qzone",
        sina: "#share-sina",
        qq: "#share-qq"
    });  



    var $citybox = $('.all-box > .nav-top > .nav-top-left > ul >li:nth-child(1)>.top-city');
    var $allcity = $('.all-box > .nav-top > .nav-top-left > ul >li:nth-child(1)');
    var $jiantou = $(".all-box > .nav-top > .nav-top-left > ul >li:nth-child(1)>i");
    $allcity.hover(function(){

        $citybox.stop().slideDown();
        $jiantou.css("transform","rotate(180deg)");

    },function(){

        $citybox.stop().slideUp();
        $jiantou.css("transform","rotate(360deg)");
     
    })
   





})