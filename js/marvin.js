$(document).ready(function () {
    console.log("ready!");

    var top = 0;
    var left = 0;

    $("#bodyCercle").keydown(function (event) {
        switch (event.which) {
            case 40 :
                top = top + 5;
                $("#cerlce").css("margin-top", top + "px");
                console.log("touche du bas");
                break;

            case 38 :
                top = top - 5;
                $("#cerlce").css("margin-top", top + "px");
                console.log("touche du haut");
                break;

            case 39:
                left = left + 5;
                $("#cerlce").css("margin-left", left + "px");
                console.log("touche de droite");
                break;

            case 37:
                left = left - 5;
                $("#cerlce").css("margin-left", left + "px");
                console.log("touche de gauche");
                break;

        }
            

    });

});