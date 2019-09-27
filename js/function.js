// JavaScript Document

$(document).ready(function(){
    // アイフォン用ユーザーエージェント
    if ( navigator.userAgent.indexOf('iPhone') > 0 ) {
        $("body").addClass("iPhone");
    };
    // 電話番号処理
    var ua = navigator.userAgent;
    if(ua.indexOf('iPhone') > 0 || ua.indexOf('Android') > 0){
        $('.tel-link').each(function(){
            var str = $(this).text();
            $(this).html($('<a>').attr('href', 'tel:' + str.replace(/-/g, '')).append(str + '</a>'));
        });
    }
    // ページトップへ
    $("#pagetop").hide();
    $(window).on("scroll", function() {
        if ($(this).scrollTop() > 100) {
         $('#pagetop').slideDown("fast");
        } else {
            $('#pagetop').slideUp("fast");
        }
        scrollHeight = $(document).height();
        scrollPosition = $(window).height() + $(window).scrollTop();
        footHeight = $("footer").innerHeight();
        if ( scrollHeight - scrollPosition  <= footHeight ) {
            $("#pagetop").css({
                "position":"absolute",
                "bottom": footHeight-1
            });
        } else {
            $("#pagetop").css({
                "position":"fixed",
                "bottom": "0px"
            });
        }
    });
    //　スムーズスクロール
    $('a[href^=#]').click(function() {
	  if($(this).attr('href').length==1) return false;
      var speed = 500;// ミリ秒
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
   });

    // hover
    $('a, input[type="button"], input[type="submit"], button, .touch-hover')
      .on('touchstart', function(){
        $(this).addClass('hover');
    }).on('touchend', function(){
        $(this).removeClass('hover');
    });

    var scrollpos;
    $('#hNavMenu a').on('click', function(event){
      $(this).toggleClass("on");
      $('#globalNav').slideToggle();
      if($(this).hasClass('on')) {
        scrollpos = $(window).scrollTop();
        $('body').addClass('fixed').css({'top': -scrollpos});
        $('#globalNav').addClass('open');
      } else {
        $('body').removeClass('fixed').css({'top': 0});
        window.scrollTo( 0 , scrollpos );
        $('#globalNav').removeClass('open');
      }
      return false;
    });

    //開閉
    $('.acdon_list + ul').hide();
     $(".acdon").click(function(){
      $(this).next("ul").slideToggle();
      $(this).next("ul").siblings("ul").slideUp();
      $(this).toggleClass("close");
      $(this).siblings(".acdon").removeClass("close");
    });

     $('.acdon_dl dd').hide();
     $(".acdon_list dt").click(function(){
      $(this).next("dd").slideToggle();
      $(this).next("dd").siblings("dd").slideUp();
      $(this).toggleClass("close");
      $(this).siblings(".acdon_list dt").removeClass("close");
    });

    // タブ
    $('.tab_sty .tab-menu li:first,.tab_sty .tab-box > div:first,.tab_sty02 .tab-menu li:first,.tab_sty02 .tab-box > div:first').addClass('act');
    $('.tab-menu li').on('click', function(){
        if($(this).not('act')){
          // タブメニュー
          $(this).addClass('act').siblings('li').removeClass('act');
          // タブの中身
          var index = $('.tab-menu li').index(this);
          $('.tab-box > div').eq(index).addClass('act').siblings('div').removeClass('act');
        }
      });

    //Horizontal Tab
    $('#tabArea').easyResponsiveTabs({
        type: 'default', //Types: default, vertical, accordion
        width: '414px', //auto or any width like 600px
        fit: true, // 100% fit in a container
        tabidentify: 'hor_1', // The tab groups identifier
        activate: function(event) { // Callback function if tab is switched
            var $tab = $(this);
            var $info = $('#nested-tabInfo');
            var $name = $('span', $info);
            $name.text($tab.text());
            $info.show();
        }
    });
});
