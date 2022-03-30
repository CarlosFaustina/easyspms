$("#btn_mudaCorConteudo").click(function (e) {
  //window.alert("Aqui estou eu");

  if ($("body").hasClass("AdjustColorConteudo")) {
    $("body").removeClass("AdjustColorConteudo");
    $("#AdjustColorConteudo").removeClass("Ativa");
    $("#mudaCorConteudo").hide();
  } else {
    $("body").addClass("AdjustColorConteudo");
    $("#AdjustColorConteudo").addClass("Ativa");
    $("#mudaCorConteudo").show();
  }
});
/*
$('input:radio[name="editaCor"]').change(function () {
  if ($(this).val() == "conteudo") {
    $('input:radio[name="Cor"]').change(function () {
      if ($(this).val() == "red") {
        $("body").removeClass("ConteudoAzul");
        $("body").removeClass("ConteudoAmarelo");
        $("body").removeClass("ConteudoRosa");
        $("body").addClass("ConteudoVermelho");
      } else if ($(this).val() == "blue") {
        $("body").removeClass("ConteudoVermelho");
        $("body").removeClass("ConteudoAmarelo");
        $("body").removeClass("ConteudoRosa");
        $("body").addClass("ConteudoAzul");
      } else if ($(this).val() == "yellow") {
        $("body").removeClass("ConteudoVermelho");
        $("body").removeClass("ConteudoAzul");
        $("body").removeClass("ConteudoRosa");
        $("body").addClass("ConteudoAmarelo");
      } else if ($(this).val() == "pink") {
        $("body").removeClass("ConteudoVermelho");
        $("body").removeClass("ConteudoAzul");
        $("body").removeClass("ConteudoAmarelo");
        $("body").addClass("ConteudoRosa");
      }
    });
  }
});
*/

$(".cores").on("change", function () {
  var radioEditaCores = document.getElementsByName("editaCor");
  var radioCores = document.getElementsByName("Cor");

  if (radioEditaCores[2].checked) {
    //console.log('Fundo checked');

    if (radioCores[0].checked) {
      console.log("Conteudo + Branco");
      $("body").removeClass("ConteudoAzul");
      $("body").removeClass("ConteudoAmarelo");
      $("body").removeClass("ConteudoPreto");
      $("body").removeClass("ConteudoRosa");
      $("body").removeClass("ConteudoRoxo");
      $("body").removeClass("ConteudoVermelho");
      $("body").removeClass("ConteudoVerde");
      $("body").addClass("ConteudoBranco");
    } else if (radioCores[1].checked) {
      console.log("Conteudo + Preto");
      $("body").removeClass("ConteudoAzul");
      $("body").removeClass("ConteudoAmarelo");
      $("body").removeClass("ConteudoBranco");
      $("body").removeClass("ConteudoRosa");
      $("body").removeClass("ConteudoRoxo");
      $("body").removeClass("ConteudoVermelho");
      $("body").removeClass("ConteudoVerde");
      $("body").addClass("ConteudoPreto");
    } else if (radioCores[2].checked) {
      console.log("Conteudo + Verde");
      $("body").removeClass("ConteudoAzul");
      $("body").removeClass("ConteudoAmarelo");
      $("body").removeClass("ConteudoBranco");
      $("body").removeClass("ConteudoRosa");
      $("body").removeClass("ConteudoRoxo");
      $("body").removeClass("ConteudoVermelho");
      $("body").removeClass("ConteudoPreto");
      $("body").addClass("ConteudoVerde");
    } else if (radioCores[3].checked) {
      console.log("Conteudo + Roxo");
      $("body").removeClass("ConteudoAzul");
      $("body").removeClass("ConteudoAmarelo");
      $("body").removeClass("ConteudoBranco");
      $("body").removeClass("ConteudoRosa");
      $("body").removeClass("ConteudoVerde");
      $("body").removeClass("ConteudoVermelho");
      $("body").removeClass("ConteudoPreto");
      $("body").addClass("ConteudoRoxo");
    } else if (radioCores[4].checked) {
      console.log("Conteudo + Vermelho");
      $("body").removeClass("ConteudoAzul");
      $("body").removeClass("ConteudoAmarelo");
      $("body").removeClass("ConteudoBranco");
      $("body").removeClass("ConteudoRosa");
      $("body").removeClass("ConteudoVerde");
      $("body").removeClass("ConteudoRoxo");
      $("body").removeClass("ConteudoPreto");
      $("body").addClass("ConteudoVermelho");
    } else if (radioCores[5].checked) {
      console.log("Conteudo + Amarelo");
      $("body").removeClass("ConteudoAzul");
      $("body").removeClass("ConteudoVermelho");
      $("body").removeClass("ConteudoBranco");
      $("body").removeClass("ConteudoRosa");
      $("body").removeClass("ConteudoVerde");
      $("body").removeClass("ConteudoRoxo");
      $("body").removeClass("ConteudoPreto");
      $("body").addClass("ConteudoAmarelo");
    } else if (radioCores[6].checked) {
      console.log("Conteudo + Azul");
      $("body").removeClass("ConteudoAmarelo");
      $("body").removeClass("ConteudoVermelho");
      $("body").removeClass("ConteudoBranco");
      $("body").removeClass("ConteudoRosa");
      $("body").removeClass("ConteudoVerde");
      $("body").removeClass("ConteudoRoxo");
      $("body").removeClass("ConteudoPreto");
      $("body").addClass("ConteudoAzul");
    } else if (radioCores[7].checked) {
      console.log("Conteudo + Rosa");
      $("body").removeClass("ConteudoAmarelo");
      $("body").removeClass("ConteudoVermelho");
      $("body").removeClass("ConteudoBranco");
      $("body").removeClass("ConteudoAzul");
      $("body").removeClass("ConteudoVerde");
      $("body").removeClass("ConteudoRoxo");
      $("body").removeClass("ConteudoPreto");
      $("body").addClass("ConteudoRosa");
    }
  }
});

// export const injectColorAdjustmentsContentCss = `
// .ConteudoAmarelo p,
// .ConteudoAmarelo span,
// .ConteudoAmarelo li {
//   color: #feef16;
// }

// .ConteudoVermelho p,
// .ConteudoVermelho span,
// .ConteudoVermelho li {
//   color: #e4111c;
// }
// .ConteudoRosa p,
// .ConteudoRosa span,
// .ConteudoRosa li {
//   color: #e40d7d;
// }
// .ConteudoAzul p,
// .ConteudoAzul span,
// .ConteudoAzul li {
//   color: #06a1dd;
// }

// .ConteudoPreto p,
// .ConteudoPreto span,
// .ConteudoPreto li {
//   color: #000000;
// }

// .ConteudoVerde p,
// .ConteudoVerde span,
// .ConteudoVerde li {
//   color: #17963e;
// }

// .ConteudoRoxo p,
// .ConteudoRoxo span,
// .ConteudoRoxo li {
//   color: #312582;
// }

// .ConteudoBranco p,
// .ConteudoBranco span,
// .ConteudoBranco li {
//   color: #ffffff;
// }

// `;
