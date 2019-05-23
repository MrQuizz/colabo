$(document).ready(function () {
    console.log("ready!");

    var top;
    var left;

    $("#bodyCercle").keydown(function (event) {
        switch (event.which) {
            case 40 :
                top = top + 150;
                $("#cerlce").animate({marginTop: top + "px"},500,function (){});
                console.log("touche du bas");
                break;

            case 38 :
                top = top - 150;
                $("#cerlce").animate({marginTop: top + "px"},500,function (){});
                console.log("touche du haut");
                break;

            case 39:
                left = left + 150;
                $("#cerlce").animate({marginLeft: left + "px"},500,function (){});
                console.log("touche de droite");
                break;

            case 37:
                left = left - 150;
                $("#cerlce").animate({marginLeft: left + "px"},500,function (){});
                console.log("touche de gauche");
                break;

        }
            

    });

});