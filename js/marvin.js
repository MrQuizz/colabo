$(document).ready(function () {
    console.log("ready!");

    var top;
    var left;

    $("#bodyCercle").keydown(function (event) {
        // connaitre le numéro de la touche
        // console.log(event.type + " :" + event.which);
        switch (event.which) {
            case 40 :
                top = "+=100px";
                $("#cerlce").animate({marginTop: top},500,function (){});
                console.log("touche du bas");
                break;

            case 38 :
                top = "-=100px";
                $("#cerlce").animate({marginTop: top},500,function (){});
                console.log("touche du haut");
                break;

            case 39:
                left = "+=100px";
                $("#cerlce").animate({marginLeft: left},500,function (){});
                console.log("touche de droite");
                break;

            case 37:
                left = "-=100px";
                $("#cerlce").animate({marginLeft: left},500,function (){});
                console.log("touche de gauche");
                break;

            case 90:
                $("#cerlce").css("background-color","green");
                break;

            default:return; // exit this handler for other keys
        }
        event.preventDefault(); // prevent the default action (scroll / move caret)
    });
});