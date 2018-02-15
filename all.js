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
        $('.menu').removeClass('menu-visible-active');
        $('.menu-hamburger').removeClass('x-burger');
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
        $('.menu').removeClass('menu-visible-active');
        $('.menu-hamburger').removeClass('x-burger');
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
    $('#jogadasScroll').click(function(){
        $('.menu').removeClass('menu-visible-active');
        $('.menu-hamburger').removeClass('x-burger');
        $('html, body').animate({
            scrollTop: $('.jogadas-title').offset().top - 400
        },2000);
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
$('.wrap').click(function(){
  $('.modalVideo').addClass('modal-video-visible');
  $(".modal-video-content").append($("<iframe />").attr("src", "https://www.youtube.com/embed/NegpOiWYAF4?rel=0&amp;controls=1&amp;showinfo=0&amp;frameborder=0&amp;autoplay=1")).dialog({dialogoptions});
  body.style.overflow="hidden";
});
$('.close-modal-video').click(function(){
    $('.modalVideo').removeClass('modal-video-visible');
    $('.modal-video-content iframe').remove();
    body.style.overflow="";
});
$('.wrap-2').click(function(){
    $('.modalVideo').addClass('modal-video-visible');
    body.style.overflow="hidden";
    $(".modal-video-content").append($("<iframe />").attr("src", "https://www.youtube.com/embed/KxMU_CfsO00?rel=0&amp;controls=1&amp;showinfo=0&amp;frameborder=0&amp;autoplay=1")).dialog({dialogoptions});
});
$('.wrap-3').click(function(){
    $('.modalVideo').addClass('modal-video-visible');
    $(".modal-video-content").append($("<iframe />").attr("src", "https://www.youtube.com/embed/x5x3ix3EsWg?rel=0&amp;controls=1&amp;showinfo=0&amp;frameborder=0&amp;autoplay=1")).dialog({dialogoptions});
    body.style.overflow="hidden";
})
$('.wrap-4').click(function(){
    $('.modalVideo').addClass('modal-video-visible');
    $(".modal-video-content").append($("<iframe />").attr("src", "https://www.youtube.com/embed/JEnfZs7X2Vs?rel=0&amp;controls=1&amp;showinfo=0&amp;frameborder=0&amp;autoplay=1")).dialog({dialogoptions});
    body.style.overflow="hidden";
});
$('.wrap-5').click(function(){
    $('.modalVideo').addClass('modal-video-visible');
    body.style.overflow="hidden";
    $(".modal-video-content").append($("<iframe />").attr("src", "https://www.youtube.com/embed/RE-z4SqWneE?rel=0&amp;controls=1&amp;showinfo=0&amp;frameborder=0&amp;autoplay=1")).dialog({dialogoptions});
});
$('.wrap-6').click(function(){
    $('.modalVideo').addClass('modal-video-visible');
    body.style.overflow="hidden";
    $(".modal-video-content").append($("<iframe />").attr("src", "https://www.youtube.com/embed/aq0IGj-hBuk?rel=0&amp;controls=1&amp;showinfo=0&amp;frameborder=0&amp;autoplay=1")).dialog({dialogoptions});
});
$('.wrap-7').click(function(){
    body.style.overflow="hidden";
    $('.modalVideo').addClass('modal-video-visible');
    $(".modal-video-content").append($("<iframe />").attr("src", "https://www.youtube.com/embed/NYrqXPpKCpc?rel=0&amp;controls=1&amp;showinfo=0&amp;frameborder=0&amp;autoplay=1")).dialog({dialogoptions});
});
$('.wrap-8').click(function(){
    body.style.overflow="hidden";   
    $('.modalVideo').addClass('modal-video-visible');
    $(".modal-video-content").append($("<iframe />").attr("src", "https://www.youtube.com/embed/AS3uu6ImPag?rel=0&amp;controls=1&amp;showinfo=0&amp;frameborder=0&amp;autoplay=1")).dialog({dialogoptions});
});
$('.wrap-9').click(function(){
    body.style.overflow="hidden";
    $('.modalVideo').addClass('modal-video-visible');
    $(".modal-video-content").append($("<iframe />").attr("src", "https://www.youtube.com/embed/Uh1LvRp2UWI?rel=0&amp;controls=1&amp;showinfo=0&amp;frameborder=0&amp;autoplay=1")).dialog({dialogoptions});
});
$('.wrap-10').click(function(){
    body.style.overflow="hidden";
    $('.modalVideo').addClass('modal-video-visible');
    $(".modal-video-content").append($("<iframe />").attr("src", "https://www.youtube.com/embed/QLJi_3Vz6OY?rel=0&amp;controls=1&amp;showinfo=0&amp;frameborder=0&amp;autoplay=1")).dialog({dialogoptions});
});
$('.wrap-11').click(function(){
    body.style.overflow="hidden";
    $('.modalVideo').addClass('modal-video-visible');
    $(".modal-video-content").append($("<iframe />").attr("src", "https://www.youtube.com/embed/EzOfkBtxBvQ?rel=0&amp;controls=1&amp;showinfo=0&amp;start=10&amo;frameborder=0&amp;autoplay=1")).dialog({dialogoptions});
});
$('.wrap-12').click(function(){
    body.style.overflow="hidden";
    $('.modalVideo').addClass('modal-video-visible');
    $(".modal-video-content").append($("<iframe />").attr("src", "https://www.youtube.com/embed/XWfo_eZ5sf0?rel=0&amp;controls=1&amp;showinfo=0&amp;frameborder=0&amp;autoplay=1")).dialog({dialogoptions});
});
$('.wrap-13').click(function(){
    body.style.overflow="hidden";
    $('.modalVideo').addClass('modal-video-visible');
    $(".modal-video-content").append($("<iframe />").attr("src", "https://www.youtube.com/embed/O6AWsqKNSsM?rel=0&amp;controls=1&amp;showinfo=0&amp;frameborder=0&amp;autoplay=1")).dialog({dialogoptions});
});
$('.wrap-14').click(function(){
    body.style.overflow="hidden";
    $('.modalVideo').addClass('modal-video-visible');
    $(".modal-video-content").append($("<iframe />").attr("src", "https://www.youtube.com/embed/_DsXWCaq78E?rel=0&amp;controls=1&amp;showinfo=0&amp;frameborder=0&amp;autoplay=1")).dialog({dialogoptions});
});
$('.wrap-15').click(function(){
    body.style.overflow="hidden";
    $('.modalVideo').addClass('modal-video-visible');
    $(".modal-video-content").append($("<iframe />").attr("src", "https://www.youtube.com/embed/_AL1k0Gw7F8?rel=0&amp;controls=1&amp;showinfo=0&amp;frameborder=0&amp;autoplay=1")).dialog({dialogoptions});
});
$('.wrap-16').click(function(){
    body.style.overflow="hidden";
    $('.modalVideo').addClass('modal-video-visible');
    $(".modal-video-content").append($("<iframe />").attr("src", "https://www.youtube.com/embed/AJXViSslvsY?rel=0&amp;controls=0&amp;showinfo=0&amp;frameborder=0&amp;autoplay=1")).dialog({dialogoptions});
});
$('.wrap-17').click(function(){
    body.style.overflow="hidden";
    $('.modalVideo').addClass('modal-video-visible');
    $(".modal-video-content").append($("<iframe />").attr("src", "https://www.youtube.com/embed/VOaePF9tuvU?rel=0&amp;controls=1&amp;showinfo=0&amp;frameborder=0&amp;autoplay=1")).dialog({dialogoptions});
});
$('.wrap-18').click(function(){
    body.style.overflow="hidden";
    $('.modalVideo').addClass('modal-video-visible');
    $(".modal-video-content").append($("<iframe />").attr("src", "https://www.youtube.com/embed/E1g3fFwmrl8?rel=0&amp;controls=1&amp;showinfo=0&amp;frameborder=0&amp;autoplay=1")).dialog({dialogoptions});
});
$('.wrap-19').click(function(){
    body.style.overflow="hidden";
    $('.modalVideo').addClass('modal-video-visible');
    $(".modal-video-content").append($("<iframe />").attr("src", "https://www.youtube.com/embed/40up33DDvFw?rel=0&amp;controls=1&amp;showinfo=0&amp;frameborder=0&amp;autoplay=1")).dialog({dialogoptions});
});
$('.wrap-20').click(function(){
    body.style.overflow="hidden";
    $('.modalVideo').addClass('modal-video-visible');
    $(".modal-video-content").append($("<iframe />").attr("src", "https://www.youtube.com/embed/l6mjb30APQg?rel=0&amp;controls=1&amp;showinfo=0&amp;frameborder=0&amp;autoplay=1")).dialog({dialogoptions});
});
$('.wrap-21').click(function(){
    body.style.overflow="hidden";
    $('.modalVideo').addClass('modal-video-visible');
    $(".modal-video-content").append($("<iframe />").attr("src", "https://www.youtube.com/embed/KInXo0ESPiE?rel=0&amp;controls=1&amp;showinfo=0&amp;frameborder=0&amp;autoplay=1")).dialog({dialogoptions});
});
$('.wrap-22').click(function(){
    body.style.overflow="hidden";
    $('.modalVideo').addClass('modal-video-visible');
    $(".modal-video-content").append($("<iframe />").attr("src", "https://www.youtube.com/embed/JHJG0f_A4Tk?rel=0&amp;controls=1&amp;showinfo=0&amp;frameborder=0&amp;autoplay=1")).dialog({dialogoptions});
});
$('.wrap-23').click(function(){
    body.style.overflow="hidden";
    $('.modalVideo').addClass('modal-video-visible');
    $(".modal-video-content").append($("<iframe />").attr("src", "https://www.youtube.com/embed/sezWHZ68CN8?rel=0&amp;controls=1&amp;showinfo=0&amp;frameborder=0&amp;autoplay=1")).dialog({dialogoptions});
});
$('.wrap-24').click(function(){
    body.style.overflow="hidden";
    $('.modalVideo').addClass('modal-video-visible');
    $(".modal-video-content").append($("<iframe />").attr("src", "https://www.youtube.com/embed/sBzhytErvjM?rel=0&amp;controls=1&amp;showinfo=0&amp;frameborder=0&amp;autoplay=1")).dialog({dialogoptions});
});
$('.wrap-25').click(function(){
    body.style.overflow="hidden";
    $('.modalVideo').addClass('modal-video-visible');
    $(".modal-video-content").append($("<iframe />").attr("src", "https://www.youtube.com/embed/5p3gQvGWjL0?rel=0&amp;controls=1&amp;showinfo=0&amp;frameborder=0&amp;autoplay=1")).dialog({dialogoptions});
});
$('.wrap-26').click(function(){
    body.style.overflow="hidden";
    $('.modalVideo').addClass('modal-video-visible');
    $(".modal-video-content").append($("<iframe />").attr("src", "https://www.youtube.com/embed/_mufkZnThVM?rel=0&amp;controls=1&amp;showinfo=0&amp;frameborder=0&amp;autoplay=1")).dialog({dialogoptions});
});
$('.wrap-27').click(function(){
    body.style.overflow="hidden";
    $('.modalVideo').addClass('modal-video-visible');
    $(".modal-video-content").append($("<iframe />").attr("src", "https://www.youtube.com/embed/-7bz-ZJhtZo?rel=0&amp;controls=1&amp;showinfo=0&amp;frameborder=0&amp;autoplay=1")).dialog({dialogoptions});
});
$('.wrap-28').click(function(){
    $('.modalVideo').addClass('modal-video-visible');
    $(".modal-video-content").append($("<iframe />").attr("src", "https://www.youtube.com/embed/EZDP3XuR3Ow?rel=0&amp;controls=1&amp;showinfo=0&amp;frameborder=0&amp;autoplay=1")).dialog({dialogoptions});
});
$('.wrap-29').click(function(){
    body.style.overflow="hidden";
    $('.modalVideo').addClass('modal-video-visible');
    $(".modal-video-content").append($("<iframe />").attr("src", "https://www.youtube.com/embed/Shk98y-xtWw?rel=0&amp;controls=1&amp;showinfo=0&mp;frameborder=0&amp;autoplay=1")).dialog({dialogoptions});
});
$('.wrap-30').click(function(){
    body.style.overflow="hidden";
    $('.modalVideo').addClass('modal-video-visible');
    $(".modal-video-content").append($("<iframe />").attr("src", "https://www.youtube.com/embed/p1vD3ZD2Or8?rel=0&amp;controls=1&amp;showinfo=0&amp;frameborder=0&amp;autoplay=1")).dialog({dialogoptions});
});
$('.wrap-31').click(function(){
    body.style.overflow="hidden";
    $('.modalVideo').addClass('modal-video-visible');
    $(".modal-video-content").append($("<iframe />").attr("src", "https://www.youtube.com/embed/sNH8TKRME8I?rel=0&amp;controls=1&amp;showinfo=0&amp;frameborder=0&amp;autoplay=1")).dialog({dialogoptions});
});
$('.wrap-32').click(function(){
    body.style.overflow="hidden";
    $('.modalVideo').addClass('modal-video-visible');
    $(".modal-video-content").append($("<iframe />").attr("src", "https://www.youtube.com/embed/V-4cgYvgjAE?rel=0&amp;controls=1&amp;showinfo=0&amp;frameborder=0&amp;autoplay=1")).dialog({dialogoptions});
});
$(window).on('keyup', function(e){
    if(e.keyCode == 27 || e.keyCode == 8) {
        $('.modalVideo').removeClass('modal-video-visible');
        body.style.overflow="";
        $('.modal-video-content iframe').remove();
    }
});
$('#menu-burger').on('click', function(){
    console.time('g');
    if($('.menu-hamburger').hasClass('x-burger') && $('.menu').hasClass('menu-visible-active')){
        $('.menu-hamburger').removeClass('x-burger');
        $('.menu').removeClass('menu-visible-active');
    }else{
    $('.menu').addClass('menu-visible-active');
    $('.menu-hamburger').addClass('x-burger');
    }
    console.timeEnd('g');    
});
});
if ($(window).width() > 375) {
  console.log($(window).width());
  var background_image_parallax = function ($object, multiplier) {
    multiplier = typeof multiplier !== 'undefined' ? multiplier : 0.5;
    multiplier = 1 - multiplier;
    var $doc = $(document);
    $object.css({ "background-attatchment": "fixed" });
    $(window).scroll(function () {
      var from_top = $doc.scrollTop(),
        bg_css = '0px ' + (multiplier * from_top) + 'px';
      $object.css({ "background-position": bg_css });
    });
  };
  background_image_parallax($(".homePage"), 1.4);
  background_image_parallax($(".areaLore"), 1.1);
  background_image_parallax($(".jogadas-area"), 1.010);

  $(window).scroll(function () {
    var height = $(window).scrollTop();
    if (height < 400 || height > 1275) {
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
    } else {
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
  $(window).on('hide.visibility', function () {
    $('#video_p, #video_q, #video_w, video_e, video_r').get(0).pause();
  });
  $(window).blur(function () {
    $('#video_p, #video_q, #video_w, video_e, video_r').get(0).pause();
  });
  $(window).focus(function () {
    $('#video_p, #video_q, #video_w, video_e, video_r').get(0).play();
  });
}
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