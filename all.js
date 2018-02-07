(function () {
    var menu = document.getElementById('navbar'); // colocar em cache
    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) menu.classList.add('navbarScrolled'); // > 0 ou outro valor desejado
        else menu.classList.remove('navbarScrolled');
    });
})();
$(document).ready(function(){
    $('#passive').click(function(){
        if($("#passive").hasClass('clicked')){
            // $("#passive").removeClass('clicked');
        }else{
            $('#passive').addClass('clicked');
            $("#qID").removeClass('clicked');
            $("#wID").removeClass('clicked');
            $("#eID").removeClass('clicked');
            $('#rID').removeClass('clicked');
        }
        if($("#name_p").hasClass('skillName') && $("#text_p").hasClass('skill_txt') && $("#video_p").hasClass('videoDisplay')) {
            var videoP = document.getElementById('video_p');
            videoP.currentTime = 0;
            videoP.play();
            $("#name_p").removeClass('skillName');
            $('#text_p').removeClass('skill_txt');
            $('#video_p').removeClass('videoDisplay');

            $('#name_q').addClass('skillName');
            $('#text_q').addClass('skill_txt');
            $('#name_w').addClass('skillName');
            $('#text_w').addClass('skill_txt');
            $("#name_e").addClass('skillName');
            $("#text_e").addClass('skill_txt');
            $("#name_r").addClass('skillName');
            $("#text_r").addClass('skill_txt');
            $('#video_q').addClass('videoDisplay');
            $('#video_w').addClass('videoDisplay');
            $('#video_e').addClass('videoDisplay');
            $('#video_r').addClass('videoDisplay');
        }else{
            // $("#name_p").addClass('skillName');
            // $('#text_p').addClass('skill_txt');
            // $('#video_p').addClass('videoDisplay');

        }
    });
    $('#qID').click(function(){
        if($("#qID").hasClass('clicked')){
            // $("#qID").removeClass('clicked');
        }else{
            $("#qID").addClass('clicked');
            $("#passive").removeClass('clicked');
            $('#wID').removeClass('clicked');
            $("#eID").removeClass('clicked');
            $('#rID').removeClass('clicked');
        }
        if($("#name_q").hasClass('skillName') && $('#text_q').hasClass('skill_txt')&& $("#video_q").hasClass('videoDisplay')) {
            $("#name_q").removeClass('skillName');
            $("#text_q").removeClass('skill_txt');
            $("#video_q").removeClass('videoDisplay');
            var videoQ = document.getElementById('video_q');
            videoQ.currentTime = 0;
            videoQ.play();

            $('#name_p').addClass('skillName');
            $("#text_p").addClass('skill_txt');
            $('#name_w').addClass('skillName');
            $('#text_w').addClass('skill_txt');
            $("#name_e").addClass('skillName');
            $("#text_e").addClass('skill_txt');
            $("#name_r").addClass('skillName');
            $("#text_r").addClass('skill_txt');
            $("#video_p").addClass('videoDisplay');
            $('#video_w').addClass('videoDisplay');
            $('#video_e').addClass('videoDisplay');
            $('#video_r').addClass('videoDisplay');
        }else{
            // $('#name_q').addClass('skillName');
            // $('#text_q').addClass('skill_txt');
            // $("#video_q").addClass('videoDisplay');
        }
    });
    $('#wID').click(function(){
        if($("#wID").hasClass('clicked')){
            // $("#wID").removeClass('clicked');
        }else{
            $("#wID").addClass('clicked');
            $("#passive").removeClass('clicked');
            $("#qID").removeClass('clicked');
            $("#eID").removeClass('clicked');
            $('#rID').removeClass('clicked');
        }
        if($("#name_w").hasClass('skillName') && $('#text_w').hasClass('skill_txt')&& $("#video_w").hasClass('videoDisplay')) {
            var videoW = document.getElementById('video_w');
            videoW.currentTime = 0;
            videoW.play();
            $("#name_w").removeClass('skillName');
            $("#text_w").removeClass('skill_txt');
            $("#video_w").removeClass('videoDisplay');

            $("#name_p").addClass('skillName');
            $("#text_p").addClass('skill_txt');
            $('#name_q').addClass('skillName');
            $('#text_q').addClass('skill_txt');
            $("#name_e").addClass('skillName');
            $("#text_e").addClass('skill_txt');
            $("#name_r").addClass('skillName');
            $("#text_r").addClass('skill_txt');
            $("#video_p").addClass('videoDisplay');
            $("#video_q").addClass('videoDisplay');
            $("#video_e").addClass('videoDisplay');
            $("#video_r").addClass('videoDisplay');
        }else{
            // $('#name_w').addClass('skillName');
            // $('#text_w').addClass('skill_txt');
            
        }
    });
    $('#eID').click(function(){
        if($("#eID").hasClass('clicked')) {
            // $("#eID").removeClass('clicked');
        }else {
            $("#eID").addClass('clicked');
            $("#wID").removeClass('clicked');
            $('#qID').removeClass('clicked');
            $("#passive").removeClass('clicked')
            $('#rID').removeClass('clicked');
        }
        if($("#name_e").hasClass('skillName') && $('#text_e').hasClass('skill_txt')&& $("#video_e").hasClass('videoDisplay')) {
            var videoE = document.getElementById('video_e');
            videoE.currentTime = 0;
            videoE.play();
            $("#name_e").removeClass('skillName');
            $("#text_e").removeClass('skill_txt');
            $("#video_e").removeClass('videoDisplay');

            $("#name_p").addClass('skillName');
            $("#text_p").addClass('skill_txt');
            $('#name_q').addClass('skillName');
            $('#text_q').addClass('skill_txt');
            $("#name_w").addClass('skillName');
            $('#text_w').addClass('skill_txt');
            $("#name_r").addClass('skillName');
            $("#text_r").addClass('skill_txt');
            $("#video_p").addClass('videoDisplay');
            $("#video_q").addClass('videoDisplay');
            $("#video_w").addClass('videoDisplay');
            $("#video_r").addClass('videoDisplay');
        } else {
            // $("#name_e").addClass('skillName');
            // $("#text_e").addClass('skill_txt');

        }
    });
    $("#rID").click(function(){
        if($("#rID").hasClass('clicked')) {
            // $('#rID').removeClass('clicked');
        } else {
            $("#rID").addClass('clicked');
            $("#wID").removeClass('clicked');
            $('#qID').removeClass('clicked');
            $("#passive").removeClass('clicked')
            $("#eID").removeClass('clicked');
        }
        if($("#name_r").hasClass('skillName') && $("#text_r").hasClass('skill_txt')&& $("#video_r").hasClass('videoDisplay')) {
            var videoR = document.getElementById('video_r');
            videoR.currentTime = 0;
            videoR.play();
            $('#name_r').removeClass('skillName');
            $("#text_r").removeClass('skill_txt');
            $("#video_r").removeClass('videoDisplay');

            $("#name_p").addClass('skillName');
            $("#text_p").addClass('skill_txt');
            $('#name_q').addClass('skillName');
            $('#text_q').addClass('skill_txt');
            $("#name_w").addClass('skillName');
            $('#text_w').addClass('skill_txt');
            $("#name_e").addClass('skillName');
            $("#text_e").addClass('skill_txt');
            $("#video_p").addClass('videoDisplay');
            $("#video_q").addClass('videoDisplay');
            $("#video_w").addClass('videoDisplay');
            $("#video_e").addClass('videoDisplay');
        } else {
            // $("#name_r").addClass('skillName');
            // $("#text_r").addClass('skill_txt');
        }
    });
    $("#skillsHere").hover(function(){
        $("#skillsHere").addClass('animatedArrow');
    },function(){
        $("#skillsHere").removeClass('animatedArrow');
    });
    $("#loreBtn").click(function(){
        $("#modal").addClass('visible-modal');
        body.style.overflow="hidden";
    });
    $('.close-modal').click(function(){
        $('#modal').removeClass('visible-modal');
        body.style.overflow="";
    });

    $(window).on('keyup', function(e){
        if(e.keyCode == 27 || e.keyCode == 8) {
            $('#modal').removeClass('visible-modal');
            body.style.overflow="";
        }
    });
    $('#cardJungle').click(function(){
        $("#cardJungleFull").addClass('left-animate');
        $("#cardJungle").addClass('hidden-card low-height')
        $('.card-container').addClass('container-move');
        $("#cardPadraoFull").addClass('hidden-card')
        $("#cardLocoFull").addClass('hidden-card')
        $('.rune-page').addClass('visible-runepage');
        $('.backHover').addClass('back-visible');
    });
    $('#cardPadrao').click(function(){
        $("#cardPadraoFull").addClass('left-animate');
        $("#cardPadrao").addClass('hidden-card low-height')
        $('.card-container').addClass('container-move');
        $("#cardJungleFull").addClass('hidden-card')
        $("#cardLocoFull").addClass('hidden-card')
        $('.rune-page').addClass('visible-runepage')
        $('.backHover').addClass('back-visible');
    });
    $('#cardAtkSpeed').click(function(){
        $("#cardLocoFull").addClass('left-animate');
        $("#cardAtkSpeed").addClass('hidden-card low-height');
        $('.card-container').addClass('container-move');
        $("#cardPadraoFull").addClass('hidden-card')
        $("#cardJungleFull").addClass('hidden-card')
        $('.backHover').addClass('back-visible');
        $('.rune-page').addClass('visible-runepage');
    });
    $(".backHover").click(function(){
        $('#cardPadraoFull').removeClass('hidden-card left-animate');
        $('#cardJungleFull').removeClass('hidden-card left-animate');
        $('#cardLocoFull').removeClass('hidden-card left-animate');
        $('.card-container').removeClass('container-move');
        $('#cardJungle').removeClass('hidden-card low-height');
        $('#cardPadrao').removeClass('hidden-card low-height');
        $('#cardAtkSpeed').removeClass('hidden-card low-height')
        $('.rune-page').removeClass('visible-runepage');
        $('.backHover').removeClass('back-visible');
        $('.speels').removeClass('speels-visibility');
        $('.tableArea').removeClass('table-visibility'); 
        $('.tableTitle').removeClass('table-visibility');
        $('.areaItem').removeClass('item-visibility');   
    });
});
$(document).ready(function () {
    $('#loreScroll').click(function () {
        $('html, body').animate({
            scrollTop: $('.loreTitle').offset().top - 200
        }, 1700);
    });
    $('#scroll').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 700);

    });
    $("#skillsHere").click(function () {
        $('html, body').animate({
            scrollTop: $('#skillsArea').offset().top + 200
        }, 600);
    });
    $("#skillsHere").click(function(){
        var videoP = document.getElementById('video_p');
        videoP.currentTime = 0;
        videoP.play();
    });
    $("#buildScroll").click(function () {
        if($('.speels').hasClass('speels-visibility')){
            $('html, body').animate({
                scrollTop: $('.speel-title').offset().top - 100
            }, 1700);
        }else{
        $('html, body').animate({
            scrollTop: $('.card-title').offset().top - 100
        }, 1700);
    }
    });
    $("#skillsHere").click(function () {
        $('html, body').animate({
            scrollTop: $('#skillsArea').offset().top - 100
        }, 600);
    });

    $.fn.scrollEnd = function (callback, timeout) {
        $(this).scroll(function () {
            var $this = $(this);
            if ($this.data('scrollTimeout')) {
                clearTimeout($this.data('scrollTimeout'));
            }
            $this.data('scrollTimeout', setTimeout(callback, timeout));
        });
    };


    var scrolling = false;

    $(document).on('wheel', function (e) {

        if (scrolling)
            return;

        scrolling = true;

        if (e.originalEvent.deltaY < 0) {
            // $('html, body').animate({
            //     scrollTop: 0
            // }, 100);
        } else {
           
        }
    });

    $(window).scrollEnd(function () {
        scrolling = false;
    }, 20);
    
    var ar=new Array(33,34,35,36,37,38,39,40);

$(document).keydown(function(e) {
     var key = e.which;
      //console.log(key);
      //if(key==35 || key == 36 || key == 37 || key == 39)
      if($.inArray(key,ar) > -1) {
          e.preventDefault();
          return false;
      }
      return true;
});

});
var background_image_parallax = function($object, multiplier){
    multiplier = typeof multiplier !== 'undefined' ? multiplier : 0.5;
      multiplier = 1 - multiplier;
    var $doc = $(document);
    $object.css({"background-attatchment" : "fixed"});
      $(window).scroll(function(){
        var from_top = $doc.scrollTop(),
            bg_css = '0px ' +(multiplier * from_top) + 'px';
        $object.css({"background-position" : bg_css });
    });
  };
  background_image_parallax($(".homePage"),1.4);
  background_image_parallax($(".areaLore"),1.1);

  $(window).scroll(function() {
    var height = $(window).scrollTop();
    if(height  < 400 || height > 1275) {
      var stopVideo_p = document.getElementById("video_p");
      stopVideo_p.pause();
      stopVideo_p.currentTime = 0;

      var stopVideo_q = document.getElementById('video_q');
      stopVideo_q.pause();
      stopVideo_q.currentTime = 0;
      
      var stopVideo_w = document.getElementById('video_w');
      stopVideo_w.pause();
      stopVideo_w.currentTime = 0;

      var stopVideo_e = document.getElementById('video_w');
      stopVideo_e.pause();
      stopVideo_e.currentTime = 0;

      var stopVideo_r = document.getElementById('video_r');
      stopVideo_r.pause();
      stopVideo_r.currentTime = 0;
    }else{
      var stopVideo_p = document.getElementById("video_p");
      stopVideo_p.play();
      var stopVideo_q = document.getElementById('video_q');
      stopVideo_q.play();
      var stopVideo_w = document.getElementById('video_w');
      stopVideo_w.play();
      var stopVideo_e = document.getElementById('video_e');
      stopVideo_e.play();
      var stopVideo_r = document.getElementById('video_r');
      stopVideo_r.play();
    }
});
$(window).on('hide.visibility', function() {
  $('#video_p, #video_q, #video_w, video_e, video_r').get(0).pause();
});
$(window).blur(function(){
  $('#video_p, #video_q, #video_w, video_e, video_r').get(0).pause();
});
$(window).focus(function(){
  $('#video_p, #video_q, #video_w, video_e, video_r').get(0).play();
});
$(document).ready(function(){
    $('#cardJungleFull').click(function(){
        $('html, body').animate({
            scrollTop: $('.speel-title').offset().top - 100
        }, 700);
        $('.rune-jungle').addClass('rune-visibility');
        $('.rune-padrao').removeClass('rune-visibility');
        $('.rune-atkSpeed').removeClass('rune-visibility');
        $('.speels-jungle').addClass('speels-visibility');
        $('.speels-padrao').removeClass('speels-visibility');
        $('.tableArea').addClass('table-visibility');
        $('.tableTitle').addClass('table-visibility');
        $('.buildJungle').addClass('item-visibility');
        $('.buildPadrao').removeClass('item-visibility');
        $('.atkSpeedBuild').removeClass('item-visibility');
    });
    $('#cardPadraoFull').click(function(){
        $('html, body').animate({
            scrollTop: $('.speel-title').offset().top - 100
        }, 700);
        $('.tableArea').addClass('table-visibility');
        $('.rune-padrao').addClass('rune-visibility');
        $('.rune-jungle').removeClass('rune-visibility');
        $('.rune-atkSpeed').removeClass('rune-visibility');
        $('.speels-padrao').addClass('speels-visibility');
        $('.speels-jungle').removeClass('speels-visibility');
        $('.tableTitle').addClass('table-visibility');
        $('.buildPadrao').addClass('item-visibility');
        $('.buildJungle').removeClass('item-visibility');
        $('.atkSpeedBuild').removeClass('item-visibility');
    });
    $('#cardLocoFull').click(function(){
        $('html, body').animate({
            scrollTop: $('.speel-title').offset().top - 100
        }, 700);
        $('.rune-atkSpeed').addClass('rune-visibility');
        $('.rune-jungle').removeClass('rune-visibility');
        $('.rune-padrao').removeClass('rune-visibility');
        $('.speels-padrao').addClass('speels-visibility');
        $('.speels-jungle').removeClass('speels-visibility');
        $('.tableArea').addClass('table-visibility');
        $('.tableTitle').addClass('table-visibility');
        $('.atkSpeedBuild').addClass('item-visibility');
        $('.buildPadrao').removeClass('item-visibility');
        $('.buildJungle').removeClass('item-visibility');
    });
});