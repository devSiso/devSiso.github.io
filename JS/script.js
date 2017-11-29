$(document).ready(function(){
    $('#topBtn').click(function(){
        $('html, body').animate({scrollTop:0},500);
    });

    $('#myHistoryScroll').click(function(){
        $('html, body').animate({scrollTop:$('#scrollHistoryTitle').offset().top }, 1000);
    });
     $('#contacts').click(function(){
        $('html, body').animate({scrollTop:$('#h1Contacts').offset().top }, 1200);
        $('#number').show(1600);   
    });
    var posicaoInicial = $('#aboutMe').position().top;

    $(window).scroll(function () { // oscultador de scroll
    var posicaoScroll = $(window).scrollTop(); // obtem a quantidade de scroll no momento
    console.log(posicaoScroll);
     if (posicaoScroll > 540){
         $('#topBtn').show(); //856
     } 
     if (posicaoScroll == 0) {
        $('#topBtn').hide();
     }
});
});

