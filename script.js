$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY>500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
   
});
$('.scroll-up-btn').click(function(){
    $('html').animate({scrollTop: 0});
});
var typed = new Typed(".tape" , {
    strings : ["Student", "Developer" , " Kleiner Programmer C", "Freelancer"],
    typeSpeed: 100,
    backSpeed:60,
    loop: true
});
var typed = new Typed(".tape-2" , {
    strings : ["Student", "Developer" , " Kleiner Programmer C", "Freelancer"],
    typeSpeed: 100,
    backSpeed:60,
    loop: true
});

document.getElementById("me").innerHTML="Ich bin ein Student an der TU Kaiserslautern in Deutschland.Genauer gesagt,bin ich im ersten Semester und mag ich wahnsinnig alles was Informatik angeht,nämlich Programmierung,Kunstliche Intelligenz,Robotics sowie Forschungen in diesem Bereich.Seitdem ich im Gymnasium war,hatte ich schon mit der Programmierung begonnen,nämlich mit Html,Css und JavaScript.Danach habe mein Interess an der Programmierung in Programmiersprache C gelegt und damit habe 2 kleine Software entwickelt.Die erste hat zum Ziel,den Auswahl neuen AbiturientInnen zu Universitätsverwaltung meiner Heimat zu vereinvaren.Davon flogt die zweite,die zum Ziel hat ,die Beiträge zwischen Leuten in einem Dokument zu speichern.Mein zu erreinchendes Ziel ist die Schaffung von Softwaren,die die Leute auf der ganzen Welt das Leben vereinfachen,ohne Ihren Arbeitsplätzen im Gefahr zu setzen";