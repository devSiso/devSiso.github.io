$(document).ready(function () {
    $('#topBtn').click(function () {
        $('.card').hide(500);
        $('html, body').animate({ scrollTop: 0 }, 900);
        
    });

    $("#logoHome").click(function (){
        $('html, body').animate({scrollTop: 0 }, 900);
        $('.card').hide(900);
    });

    $('#myHistoryScroll').click(function () {
        $('html, body').animate({ scrollTop: $('#scrollAboutMe').offset().top - 60 }, 1000);
    });
    $('#contacts').click(function () {
        $('html, body').animate({ scrollTop: $('#h1Contacts').offset().top }, 1600);
    });
    $('#scrollMoments').click(function () {
        $('html, body').animate({ scrollTop: $('#momentAncora').offset().top - 115 }, 1000);
        $('.card').show(2200);
    });
    $('#myExperienceScroll').click(function () {
        $('html, body').animate({ scrollTop: $('#scrollmyExperience').offset().top - 100 }, 1000);
    });
    var posicaoInicial = $('#aboutMe').position().top;

    $(window).scroll(function () { // oscultador de scroll
        var posicaoScroll = $(window).scrollTop(); // obtem a quantidade de scroll no momento
        console.log(posicaoScroll);
        if (posicaoScroll > 540) {
            $('#topBtn').show(); //856
        }
        if (posicaoScroll < 320) {
            $('#topBtn').hide();
        }
        if(posicaoScroll > 1260){
            $('.card').show(1200);
        }
    });
});

