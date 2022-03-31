/* BASICS */
/* DATA DE ATUALIZAÇÃO */

/* DEBUG */
let DEBUG = true;
if (!DEBUG) {
  if (!window.console) window.console = {};
  let methods = ["log", "debug", "warn", "info"];
  for (let i = 0; i < methods.length; i++) {
    console[methods[i]] = function () {};
  }
}

console.log(" ************* Easy Starting ************* ");

window.addEventListener("DOMContentLoaded", function () {
  // INIT SMOOTH SCROLL
  mobileSmoothScroll();
  $("body").addClass("easy_fechado");
  doOnOrientationChange();

  // EASY COPY + YEAR
  versao_da_aplicacao = document.getElementById("versao_da_aplicacao");
  versao_da_aplicacao.innerHTML = "1.0.0";
  vai_buscar_uma_data_ano.innerHTML = vai_buscar_uma_data("vai_buscar_uma_data_ano");

  /* LISTENS WINDOW RESIZE FOR PAGE FLOW NON-DESTRUCTION :) - JQUERY */
  function DimensAo_DA_JanelA() {
    var LArgurA_DA_JAnelA = document.documentElement.clientWidth;

    if (LArgurA_DA_JAnelA <= 960 && $("body").hasClass("easy_aberto")) {
      $("#nav_easy").css("left", "314px");
      $("#botao_easy").css("left", "-200px");
      $("body").addClass("easy_aberto");
    } else if (LArgurA_DA_JAnelA <= 960 && $("body").hasClass("easy_fechado")) {
      $("#nav_easy").css("left", "-314px");
      $("#botao_easy").css("left", "-81px");
      $("body").addClass("easy_fechado");
    } else if (LArgurA_DA_JAnelA > 960 && $("body").hasClass("easy_aberto")) {
      $("#nav_easy").css("left", "20px");
      $("#botao_easy").css("left", "399px");
      $("body").addClass("easy_aberto");
    } else if (LArgurA_DA_JAnelA > 960 && $("body").hasClass("easy_fechado")) {
      $("#nav_easy").css("left", "-480px");
      $("#botao_easy").css("left", "-81px");
      $("body").addClass("easy_fechado");
    }
  }
  window.addEventListener("resize", DimensAo_DA_JanelA); // TAU.

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

  /* - */

  /* OPEN EASY W/ ANIMATION - JQUERY */
  $("#botao_easy").click(function () {
    if (doOnOrientationChange() === "landscape") {
      tablet();
    } else {
      const _isItMobile = screen.width <= 960;
      if (!_isItMobile) {
        desktop();
      } else {
        mobile();
      }

      function desktop() {
        $("#nav_easy").animate(
          {
            left: "20px",
          },
          500
        );
        $("#botao_easy").animate(
          {
            left: "399px",
          },
          250
        );
      }

      function mobile() {
        $("#nav_easy").animate(
          {
            left: "314px",
          },
          500
        );
        $("#botao_easy").animate(
          {
            left: "-200px",
          },
          250
        );
      }
    }

    function tablet() {
      if ($("body").hasClass("easy_fechado")) {
        $("#nav_easy").css("left", "-480px");
        $("#botao_easy").css("left", "399px");
      }

      $("#nav_easy").animate(
        {
          left: "20px",
        },
        500
      );
      $("#botao_easy").animate(
        {
          left: "308px",
        },
        250
      );
      setTimeout(function () {
        $("#botao_easy").animate({
          left: "388px",
        });
      }, 1);
    }

    $("body").addClass("easy_aberto");
    $("body").removeClass("easy_fechado");
    event.stopPropagation();
    return false;
  });

  /* CLOSE EASY W/ ANIMATION - JQUERY */
  $("#botao_fechar_easy").click(function () {
    if (doOnOrientationChange() === "landscape") {
      tablet();
    } else {
      const _isItMobile = screen.width <= 960;
      if (!_isItMobile) {
        desktop();
      } else {
        mobile();
      }

      function desktop() {
        $("#nav_easy").animate(
          {
            left: "-480px",
          },
          500
        );
        $("#botao_easy").animate(
          {
            left: "-81px",
          },
          100
        );
      }

      function mobile() {
        if ($("body").hasClass("easy_aberto")) {
          $("#nav_easy").css("left", "20px");
          $("#botao_easy").css("left", "408px");
        }
        $("#nav_easy").animate(
          {
            left: "-350px",
          },
          500
        );

        $("#botao_easy").animate(
          {
            left: "-81px",
          },
          100
        );
      }
    }

    function tablet() {
      // $("#nav_easy").css("left", "20px");
      // $("#botao_easy").css("left", "388px");
      $("#nav_easy").animate(
        {
          left: "-480px",
        },
        500
      );

      $("#botao_easy").animate(
        {
          left: "-81px",
        },
        100
      );
    }

    $("body").removeClass("easy_aberto");
    $("body").addClass("easy_fechado");
    event.stopPropagation();
    return false;
  });

  // FUNCTION FOR SMOOTH SCROLL ON MOBILE
  function mobileSmoothScroll() {}
  document.addEventListener(
    "touchmove",
    function (event) {
      event.preventDefault();
    },
    false
  );
  // TOOLTIPS INIT
  $(function () {
    $('[data-toggle="tooltip"]').tooltip({ trigger: "hover", animation: true, container: "#nav_easy" });
  });
});
// SCROLL BAR INIT
(function ($) {
  $(window).on("load", function () {
    $("#scroll_wrapper").mCustomScrollbar({
      theme: "dark",
    });
  });
})(jQuery);
