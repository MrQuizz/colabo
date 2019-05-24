$(document).ready(function () {
    console.log("ready!");

    var top ;
    var left;

    $("#bodyCercle").keydown(function (event) {
         // connaitre le numéro de la touche
        // console.log(event.type + " :" + event.which);
        switch (event.which) {
            case 40 :
                top = "+=10px";
                if (randomTop< 465){
                    randomTop += 10;
                $("#cercle").animate({marginTop: top},10,function (){});
                console.log("touche du bas");
                }
                break;

            case 38 :
                top = "-=10px";
                if (randomTop > 35){
                    randomTop -=10;
                $("#cercle").animate({marginTop: top},10,function (){});
                console.log("touche du haut");
                }
                break;

            case 39:
                left = "+=10px";
                if (randomLeft<1190){
                    randomLeft +=10;
                $("#cercle").animate({marginLeft: left},10,function (){});
                console.log("touche de droite");
                }
                break;

            case 37:
                left = "-=10px";
                if (randomLeft>30){
                    randomLeft -=10;
                $("#cercle").animate({marginLeft: left},10,function (){});
                console.log("touche de gauche");
                }
                break;

            case 90:
                $("#cercle").css("background-color",'#'+(Math.random()*0xFFFFFF<<0).toString(16));
                break;

            default:return; // exit this handler for other keys
        }
        event.preventDefault(); // prevent the default action (scroll / move caret)
    });

    // cercle placé en aléatoire -----------------------------------------------------------------
    var randomTop = Math.floor(Math.random()* 440) + 60;
    var randomLeft = Math.floor(Math.random()* 1080) + 20;

    $("#cercle").css("top", randomTop + "px");
    $("#cercle").css("left", randomLeft + "px");

    // mini cercle --------------------------------------------------------------------------------


    //Pour chaque div de classe randomColor
    $(".littleCercle").each(function() {
        //On change la couleur de fond au hasard
        $(this).css("background-color", '#'+(Math.random()*0xFFFFFF<<0).toString(16));
    });
    
    // placer les mini cercle aléatoirement
    for (var i=0; i<7; ++i){
        $("#littleCercle"+i).css("top", Math.floor(Math.random()*440) +60+ "px");
        $("#littleCercle"+i).css("left", Math.floor(Math.random()*1080) +20 + "px");
    }

    // Activité : si le cercle touche les mini cercles, ceux-ci s'effacent -------------------------------


});