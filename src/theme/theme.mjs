import scrollEasy from "./scroll.mjs";

export default class theme {

    constructor() {
        $("body").addClass("easy_fechado");
        this.doOnOrientationChange();
	    $("#r").val(100);

        document.addEventListener(
            "touchmove",
            function (event) {
                event.preventDefault();
            },
            false
        );

        window.addEventListener("orientationchange", this.doOnOrientationChange());
    }

    render() {
        var resultado = false;

        let divEasy = $('<div>', {
            id: 'easyapp'
            }
        ).appendTo('body');

        $.ajax({
            url: 'src/theme/theme.html',
            type: 'GET',
            async: false,
            success: (data) => {
                $('#easyapp').append(data);
                resultado = true;

                this.toggleEasy();
                scrollEasy();
                $("#scroll_wrapper").mCustomScrollbar({
                    theme: "dark",
                });
            }
        });

        return resultado;
    }

    doOnOrientationChange() {
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

    toggleEasy() {
        let that = this;

        /* OPEN EASY W/ ANIMATION - JQUERY */
        $('#easyapp').on('click', '#botao_easy', function(event) {
            if (that.doOnOrientationChange() === "landscape") {
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
            if (that.doOnOrientationChange() === "landscape") {
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
    }
}
