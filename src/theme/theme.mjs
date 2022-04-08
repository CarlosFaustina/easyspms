import mCustomScrollbar from "./scroll.js";

export default function theme (self, destroy) {
    $("body").addClass("easy_fechado");
    doOnOrientationChange();
	$("#r").val(100);

    // Insere o HTML do Easy
    let divEasy = $('<div>', {
        id: 'easyapp'
        }
    ).appendTo('body');

    $.get('src/theme/theme.html', function(data) {
        $('#easyapp').append(data);        
    });

    /* LISTENS WINDOW RESIZE FOR PAGE FLOW NON-DESTRUCTION :) - JQUERY */
    function dimensaoDaJanela() {
        var larguraDaJanela = document.documentElement.clientWidth;

        if (larguraDaJanela <= 960 && $("body").hasClass("easy_aberto")) {
            $("#nav_easy").css("left", "314px");
            $("#botao_easy").css("left", "-200px");
            $("body").addClass("easy_aberto");
        } else if (larguraDaJanela <= 960 && $("body").hasClass("easy_fechado")) {
            $("#nav_easy").css("left", "-314px");
            $("#botao_easy").css("left", "-81px");
            $("body").addClass("easy_fechado");
        } else if (larguraDaJanela > 960 && $("body").hasClass("easy_aberto")) {
            $("#nav_easy").css("left", "20px");
            $("#botao_easy").css("left", "399px");
            $("body").addClass("easy_aberto");
        } else if (larguraDaJanela > 960 && $("body").hasClass("easy_fechado")) {
            $("#nav_easy").css("left", "-480px");
            $("#botao_easy").css("left", "-81px");
            $("body").addClass("easy_fechado");
        }
    }
    window.addEventListener("resize", dimensaoDaJanela); // TAU.

    function doOnOrientationChange() {
        switch (window.orientation) {
        case -90:
        case 90:
            if ($("body").hasClass("easy_fechado")) {
            $("#nav_easy").css("left", "-480px");
            $("#botao_easy").css("left", "-81px");  
            }
            if ($("body").hasClass("easy_aberto")) {
            $("#nav_easy").css("left", "20px");
            $("#botao_easy").css("left", "308px");
            }
            event.stopPropagation();
            return "landscape";
            break;
        case 0:
            if ($("body").hasClass("easy_fechado")) {
            $("#nav_easy").css("left", "-480px");
            $("#botao_easy").css("left", "-81px");
            }
            if ($("body").hasClass("easy_aberto")) {
            $("#nav_easy").css("left", "308px");
            $("#botao_easy").css("left", "-200px");
            }
            event.stopPropagation();
            return "portrait";
            break;
        }
    }
    window.addEventListener("orientationchange", doOnOrientationChange);

    /* OPEN EASY W/ ANIMATION - JQUERY */
    $('#easyapp').on('click', '#botao_easy', function(event) {
        if (doOnOrientationChange() === "landscape") {
            if ($("body").hasClass("easy_fechado")) {
                $("#nav_easy").css("left", "-480px");
                $("#botao_easy").css("left", "399px");
            }

            $("#nav_easy").animate({left: "20px"}, 500);
            $("#botao_easy").animate({left: "308px"}, 250);

            setTimeout(function () {
                $("#botao_easy").animate({left: "388px"});
            }, 1);
        } else {
            if (screen.width <= 960) { // Mobile
                $("#nav_easy").animate({left: "314px"}, 500);
                $("#botao_easy").animate({left: "-200px"}, 250);
            } else { // Desktop
                $("#nav_easy").animate({left: "20px"}, 500);
                $("#botao_easy").animate({left: "399px"}, 250);
            }
        }

        $("body").addClass("easy_aberto");
        $("body").removeClass("easy_fechado");
        event.stopPropagation();
        return false;
    });

    /* CLOSE EASY W/ ANIMATION - JQUERY */
    $('#easyapp').on('click', '#botao_fechar_easy', function(event){
        if (doOnOrientationChange() === "landscape") {
            $("#nav_easy").animate({left: "-480px"}, 500);
            $("#botao_easy").animate({left: "-81px"}, 100);
        } else {
            if (!(screen.width <= 960)) {
                $("#nav_easy").animate({left: "-480px"}, 500);
                $("#botao_easy").animate({left: "-81px"}, 100);
              } else {
                if ($("body").hasClass("easy_aberto")) {
                    $("#nav_easy").css("left", "20px");
                    $("#botao_easy").css("left", "408px");
                }

                $("#nav_easy").animate({left: "-350px"}, 500);
                $("#botao_easy").animate({left: "-81px"}, 100);
              }
        }

        $("body").removeClass("easy_aberto");
        $("body").addClass("easy_fechado");
        event.stopPropagation();
        return false;
    });

    // SMOOTH SCROLL ON MOBILE
    function mobileSmoothScroll() {}
    document.addEventListener(
        "touchmove",
        function (event) {
            event.preventDefault();
        },
        false
    );

    // TOOLTIPS INIT
    //$(function () {
    //    $('[data-toggle="tooltip"]').tooltip({ trigger: "hover", animation: true, container: "#nav_easy" });
    //});

    // Scroll Bar init
    //console.log(window);
    //$(window).on("load", function () {
    //    $("#scroll_wrapper").mCustomScrollbar({
    //        theme: "dark",
    //    });
    //});
}
