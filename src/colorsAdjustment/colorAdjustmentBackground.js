$("#btn_mudaCorFundo").click(function (e) {
  //window.alert("Aqui estou eu");

  if ($("body").hasClass("AdjustColorFundo")) {
    $("body").removeClass("AdjustColorFundo");
    $("#AdjustColorFundo").removeClass("Ativa");
    $("#mudaCorFundo").hide();
  } else {
    $("body").addClass("AdjustColorFundo");
    $("#AdjustColorFundo").addClass("Ativa");
    $("#mudaCorFundo").show();
  }
});
/*
$('input:radio[name="editaCor"]').change(function () {
  if ($(this).val() == "fundo") {
    $('input:radio[name="Cor"]').change(function () {
      if ($(this).val() == "red") {
        $("body").removeClass("FundoAzul");
        $("body").removeClass("FundoAmarelo");
        $("body").removeClass("FundoRosa");
        $("body").addClass("FundoVermelho");
      } else if ($(this).val() == "blue") {
        $("body").removeClass("FundoVermelho");
        $("body").removeClass("FundoAmarelo");
        $("body").removeClass("FundoRosa");
        $("body").addClass("FundoAzul");
      } else if ($(this).val() == "yellow") {
        $("body").removeClass("FundoVermelho");
        $("body").removeClass("FundoAzul");
        $("body").removeClass("FundoRosa");
        $("body").addClass("FundoAmarelo");
      } else if ($(this).val() == "pink") {
        $("body").removeClass("FundoVermelho");
        $("body").removeClass("FundoAzul");
        $("body").removeClass("FundoAmarelo");
        $("body").addClass("FundoRosa");
      }
    });
  }
});
*/

$(".cores").on("change", function () {
  var radioEditaCores = document.getElementsByName("editaCor");
  var radioCores = document.getElementsByName("Cor");

  if (radioEditaCores[1].checked) {
    //console.log('Fundo checked');

    if (radioCores[0].checked) {
      console.log("Fundo + Branco");
      $("body").removeClass("FundoAzul");
      $("body").removeClass("FundoAmarelo");
      $("body").removeClass("FundoPreto");
      $("body").removeClass("FundoRosa");
      $("body").removeClass("FundoRoxo");
      $("body").removeClass("FundoVermelho");
      $("body").removeClass("FundoVerde");
      $("body").addClass("FundoBranco");
    } else if (radioCores[1].checked) {
      console.log("Fundo + Preto");
      $("body").removeClass("FundoAzul");
      $("body").removeClass("FundoAmarelo");
      $("body").removeClass("FundoBranco");
      $("body").removeClass("FundoRosa");
      $("body").removeClass("FundoRoxo");
      $("body").removeClass("FundoVermelho");
      $("body").removeClass("FundoVerde");
      $("body").addClass("FundoPreto");
    } else if (radioCores[2].checked) {
      console.log("Fundo + Verde");
      $("body").removeClass("FundoAzul");
      $("body").removeClass("FundoAmarelo");
      $("body").removeClass("FundoBranco");
      $("body").removeClass("FundoRosa");
      $("body").removeClass("FundoRoxo");
      $("body").removeClass("FundoVermelho");
      $("body").removeClass("FundoPreto");
      $("body").addClass("FundoVerde");
    } else if (radioCores[3].checked) {
      console.log("Fundo + Roxo");
      $("body").removeClass("FundoAzul");
      $("body").removeClass("FundoAmarelo");
      $("body").removeClass("FundoBranco");
      $("body").removeClass("FundoRosa");
      $("body").removeClass("FundoVerde");
      $("body").removeClass("FundoVermelho");
      $("body").removeClass("FundoPreto");
      $("body").addClass("FundoRoxo");
    } else if (radioCores[4].checked) {
      console.log("Fundo + Vermelho");
      $("body").removeClass("FundoAzul");
      $("body").removeClass("FundoAmarelo");
      $("body").removeClass("FundoBranco");
      $("body").removeClass("FundoRosa");
      $("body").removeClass("FundoVerde");
      $("body").removeClass("FundoRoxo");
      $("body").removeClass("FundoPreto");
      $("body").addClass("FundoVermelho");
    } else if (radioCores[5].checked) {
      console.log("Fundo + Amarelo");
      $("body").removeClass("FundoAzul");
      $("body").removeClass("FundoVermelho");
      $("body").removeClass("FundoBranco");
      $("body").removeClass("FundoRosa");
      $("body").removeClass("FundoVerde");
      $("body").removeClass("FundoRoxo");
      $("body").removeClass("FundoPreto");
      $("body").addClass("FundoAmarelo");
    } else if (radioCores[6].checked) {
      console.log("Fundo + Azul");
      $("body").removeClass("FundoAmarelo");
      $("body").removeClass("FundoVermelho");
      $("body").removeClass("FundoBranco");
      $("body").removeClass("FundoRosa");
      $("body").removeClass("FundoVerde");
      $("body").removeClass("FundoRoxo");
      $("body").removeClass("FundoPreto");
      $("body").addClass("FundoAzul");
    } else if (radioCores[7].checked) {
      console.log("Fundo + Rosa");
      $("body").removeClass("FundoAmarelo");
      $("body").removeClass("FundoVermelho");
      $("body").removeClass("FundoBranco");
      $("body").removeClass("FundoAzul");
      $("body").removeClass("FundoVerde");
      $("body").removeClass("FundoRoxo");
      $("body").removeClass("FundoPreto");
      $("body").addClass("FundoRosa");
    }
  }
});

export const injectColorAdjustmentsBackgroundCss = `

.FundoVermelho span,
.FundoVermelho div {
  background-color: #e4111c;
}

.FundoAzul span,
.FundoAzul div {
  background-color: #06a1dd;
}

.FundoAmarelo span,
.FundoAmarelo div {
  background-color: #feef16;
}

.FundoRosa span,
.FundoRosa div {
  background-color: #e40d7d;
}

.FundoPreto span,
.FundoPreto div {
  background-color: #000000;
}

.FundoVerde span,
.FundoVerde div {
  background-color: #17963e;
}

.FundoRoxo span,
.FundoRoxo div {
  background-color: #312582;
}

.FundoBranco span,
.FundoBranco div {
  background-color: #ffffff;
}

`;
