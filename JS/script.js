$(document).ready(function () {
    modalImg = document.getElementById("modalImg");
    $('#topBtn').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 900);  
    });

    $("#logoHome").click(function (){
        $('html, body').animate({scrollTop: 0 }, 1200);
    });

    $('#myHistoryScroll').click(function () {
        $('html, body').animate({ scrollTop: $('#scrollAboutMe').offset().top - 60 }, 1200);
    });
    $('#contacts').click(function () {
        $('html, body').animate({ scrollTop: $('#h1Contacts').offset().top }, 1200);
    });
    $('#scrollMoments').click(function () {
        $('html, body').animate({ scrollTop: $('#momentAncora').offset().top - 115 }, 1300);
    });
    $('#myTextScroll').click(function () {
        $('html, body').animate({ scrollTop: $('#textAncora').offset().top - 145 }, 1300);
    });
    $('#myExperienceScroll').click(function () {
        $('html, body').animate({ scrollTop: $('#scrollmyExperience').offset().top - 100 }, 1200);
    });
    $('#lol').click(function () {
        var width = 150;
        var height
        $('.nick').show(600);
        window.open("https://br.op.gg/summoner/userName=theuXma", "League of Legends", "scrollbars='no', location=no, directories=no, status=no, menubar=no, toolbar=no, resizable=no width=500 height=600");
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

