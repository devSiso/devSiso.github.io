$(document).ready(function () {
    modalImg = document.getElementById("modalImg");
    $('#topBtn').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 900);  
    });

    $("#logoHome").click(function (){
        $('html, body').animate({scrollTop: 0 }, 1200);
        $('.card').hide(900);
        $(".momentsTitle").hide(900);
    });

    $('#myHistoryScroll').click(function () {
        $('html, body').animate({ scrollTop: $('#scrollAboutMe').offset().top - 60 }, 1200);
    });
    $('#contacts').click(function () {
        $('html, body').animate({ scrollTop: $('#h1Contacts').offset().top }, 1200);
    });
    $('#scrollMoments').click(function () {
        $('html, body').animate({ scrollTop: $('#momentAncora').offset().top - 115 }, 1300);
        $('.card').show(1850);
        $(".momentsTitle").show(1200);
    });
    $('#myExperienceScroll').click(function () {
        $('html, body').animate({ scrollTop: $('#scrollmyExperience').offset().top - 100 }, 1200);
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
        if(posicaoScroll > 1320){
            $('.card').show(1200);
            $(".momentsTitle").show(1300);
        }
    });
    $("#modalMD10").click(function(){
        $("#exampleModal .modal-title").html("1ª Melhor de 10");
        modalImg.src = "imagens/primeiramd10Oficial.jpg";

    });
    $("#modalBeto").click(function(){
        $("#exampleModal .modal-title").html("Viagem ao Beto Carrero World");
        modalImg.src = "imagens/beto.jpeg";
    });
    $("#modalMarcha").click(function(){
        $("#exampleModal .modal-title").html("Evento Musical Cristao: Marcha para Jesus");
        modalImg.src = "imagens/marcha.jpeg";
    });
    $("#modalJanta").click(function(){
        $("#exampleModal .modal-title").html("Janta com os brother");
        modalImg.src = "imagens/jantacomOsbroder.jpg";
    });
    $("#modalPenta").click(function(){
        $("#exampleModal .modal-title").html("1º Pentakill em partida ranqueada");
        modalImg.src = "imagens/primeiropenta.jpeg";
    });
    $("#modalShopping").click(function(){
        $("#exampleModal .modal-title").html("Role no Shopping");
        modalImg.src = "imagens/roleNoShopping.jpg";
    });
    $("#modalSkate").click(function(){
        $("#exampleModal .modal-title").html("Role de skate com meus parceiros");
        modalImg.src = "imagens/roledeskt.jpg";
    });
    $("#modalTattoo").click(function(){
        $("#exampleModal .modal-title").html("Minha primeira tatuagem");
        modalImg.src = "imagens/tattoo.png";
    });
});

