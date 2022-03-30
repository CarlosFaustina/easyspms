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

  // EASY COPY + YEAR
  versao_da_aplicacao = document.getElementById("versao_da_aplicacao");
  versao_da_aplicacao.innerHTML = "1.0.0";
  vai_buscar_uma_data_ano.innerHTML = vai_buscar_uma_data("vai_buscar_uma_data_ano");

  /* OPEN EASY W/ ANIMATION - JQUERY*/
  $("#botao_easy").click(function () {
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
          left: "389px",
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

    event.stopPropagation();
    return false;
  });
  /* CLOSE EASY W/ ANIMATION - JQUERY*/
  $("#botao_fechar_easy").click(function () {
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
      $("#nav_easy").animate(
        {
          left: "-314px",
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
