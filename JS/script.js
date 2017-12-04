$(document).ready(function () {
    $('#topBtn').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 700);
    });

    $('#myHistoryScroll').click(function () {
        $('html, body').animate({ scrollTop: $('#scrollAboutMe').offset().top - 60 }, 1000);
    });
    $('#contacts').click(function () {
        $('html, body').animate({ scrollTop: $('#h1Contacts').offset().top }, 1200);
    });
    $('#scrollMoments').click(function () {
        $('html, body').animate({ scrollTop: $('#momentAncora').offset().top - 115 }, 1200);
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
    });
});

