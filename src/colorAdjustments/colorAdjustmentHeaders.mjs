export default function mudaCorCabecalho(self, destroy) {
  ///
  $("#btn_mudaCorCabecalho").click(function (e) {
    //window.alert("Aqui estou eu");
    console.log("coresHeaders");

    if ($("body").hasClass("AdjustColorCabecalho")) {
      $("body").removeClass("AdjustColorCabecalho");
      $("#AdjustColorCabecalho").removeClass("Ativa");
      $("#mudaCorCabecalho").hide();
    } else {
      $("body").addClass("AdjustColorCabecalho");
      $("#AdjustColorCabecalho").addClass("Ativa");
      $("#mudaCorCabecalho").show();
    }
  });
  /*
$('input:radio[name="editaCor"]').change(function () {
  if ($(this).val() == "cabecalho") {
    $('input:radio[name="Cor"]').change(function () {
      if ($(this).val() == "red") {
        $("body").removeClass("HeaderAzul");
        $("body").removeClass("HeaderAmarelo");
        $("body").removeClass("HeaderRosa");
        $("body").addClass("HeaderVermelho");
      } else if ($(this).val() == "blue") {
        $("body").removeClass("HeaderVermelho");
        $("body").removeClass("HeaderAmarelo");
        $("body").removeClass("HeaderRosa");
        $("body").addClass("HeaderAzul");
      } else if ($(this).val() == "yellow") {
        $("body").removeClass("HeaderVermelho");
        $("body").removeClass("HeaderAzul");
        $("body").removeClass("HeaderRosa");
        $("body").addClass("HeaderAmarelo");
      } else if ($(this).val() == "pink") {
        $("body").removeClass("HeaderVermelho");
        $("body").removeClass("HeaderAzul");
        $("body").removeClass("HeaderAmarelo");
        $("body").addClass("HeaderRosa");
      }
    });
  }
});*/

  $(".cores").on("change", function () {
    var radioEditaCores = document.getElementsByName("editaCor");
    var radioCores = document.getElementsByName("Cor");

    if (radioEditaCores[0].checked) {
      //console.log('Cabeçalho checked');

      if (radioCores[0].checked) {
        console.log("Cabeçalho + Branco");
        $("body").removeClass("HeaderAzul");
        $("body").removeClass("HeaderAmarelo");
        $("body").removeClass("HeaderPreto");
        $("body").removeClass("HeaderRosa");
        $("body").removeClass("HeaderRoxo");
        $("body").removeClass("HeaderVermelho");
        $("body").removeClass("HeaderVerde");
        $("body").addClass("HeaderBranco");
      } else if (radioCores[1].checked) {
        console.log("Cabeçalho + Preto");
        $("body").removeClass("HeaderAzul");
        $("body").removeClass("HeaderAmarelo");
        $("body").removeClass("HeaderBranco");
        $("body").removeClass("HeaderRosa");
        $("body").removeClass("HeaderRoxo");
        $("body").removeClass("HeaderVermelho");
        $("body").removeClass("HeaderVerde");
        $("body").addClass("HeaderPreto");
      } else if (radioCores[2].checked) {
        console.log("Cabeçalho + Verde");
        $("body").removeClass("HeaderAzul");
        $("body").removeClass("HeaderAmarelo");
        $("body").removeClass("HeaderBranco");
        $("body").removeClass("HeaderRosa");
        $("body").removeClass("HeaderRoxo");
        $("body").removeClass("HeaderVermelho");
        $("body").removeClass("HeaderPreto");
        $("body").addClass("HeaderVerde");
      } else if (radioCores[3].checked) {
        console.log("Cabeçalho + Roxo");
        $("body").removeClass("HeaderAzul");
        $("body").removeClass("HeaderAmarelo");
        $("body").removeClass("HeaderBranco");
        $("body").removeClass("HeaderRosa");
        $("body").removeClass("HeaderVerde");
        $("body").removeClass("HeaderVermelho");
        $("body").removeClass("HeaderPreto");
        $("body").addClass("HeaderRoxo");
      } else if (radioCores[4].checked) {
        console.log("Cabeçalho + Vermelho");
        $("body").removeClass("HeaderAzul");
        $("body").removeClass("HeaderAmarelo");
        $("body").removeClass("HeaderBranco");
        $("body").removeClass("HeaderRosa");
        $("body").removeClass("HeaderVerde");
        $("body").removeClass("HeaderRoxo");
        $("body").removeClass("HeaderPreto");
        $("body").addClass("HeaderVermelho");
      } else if (radioCores[5].checked) {
        console.log("Cabeçalho + Amarelo");
        $("body").removeClass("HeaderAzul");
        $("body").removeClass("HeaderVermelho");
        $("body").removeClass("HeaderBranco");
        $("body").removeClass("HeaderRosa");
        $("body").removeClass("HeaderVerde");
        $("body").removeClass("HeaderRoxo");
        $("body").removeClass("HeaderPreto");
        $("body").addClass("HeaderAmarelo");
      } else if (radioCores[6].checked) {
        console.log("Cabeçalho + Azul");
        $("body").removeClass("HeaderAmarelo");
        $("body").removeClass("HeaderVermelho");
        $("body").removeClass("HeaderBranco");
        $("body").removeClass("HeaderRosa");
        $("body").removeClass("HeaderVerde");
        $("body").removeClass("HeaderRoxo");
        $("body").removeClass("HeaderPreto");
        $("body").addClass("HeaderAzul");
      } else if (radioCores[7].checked) {
        console.log("Cabeçalho + Rosa");
        $("body").removeClass("HeaderAmarelo");
        $("body").removeClass("HeaderVermelho");
        $("body").removeClass("HeaderBranco");
        $("body").removeClass("HeaderAzul");
        $("body").removeClass("HeaderVerde");
        $("body").removeClass("HeaderRoxo");
        $("body").removeClass("HeaderPreto");
        $("body").addClass("HeaderRosa");
      }
    }
  });
  if (destroy) {
    $("body").removeClass("HeaderBranco");
    $("body").removeClass("HeaderPreto");
    $("body").removeClass("HeaderVerde");
    $("body").removeClass("HeaderRoxo");
    $("body").removeClass("HeaderVermelho");
    $("body").removeClass("HeaderAmarelo");
    $("body").removeClass("HeaderAzul");
    $("body").removeClass("HeaderRosa");

    $("body").removeClass("ConteudoBranco");
    $("body").removeClass("ConteudoPreto");
    $("body").removeClass("ConteudoVerde");
    $("body").removeClass("ConteudoRoxo");
    $("body").removeClass("ConteudoVermelho");
    $("body").removeClass("ConteudoAmarelo");
    $("body").removeClass("ConteudoAzul");
    $("body").removeClass("ConteudoRosa");

    $("body").removeClass("FundoBranco");
    $("body").removeClass("FundoPreto");
    $("body").removeClass("FundoVerde");
    $("body").removeClass("FundoRoxo");
    $("body").removeClass("FundoVermelho");
    $("body").removeClass("FundoAmarelo");
    $("body").removeClass("FundoAzul");
    $("body").removeClass("FundoRosa");
  }

  ///

  // if (destroy) {
  //   document
  //     .querySelector('._access-menu [data-access-action="leiaFocus"]')
  //     .classList.remove("active");
  //   self.initialValues.leiaFocus = false;
  //   self.sessionState.leiaFocus = false;
  //   self.onChange(true);

  //   document.getElementById("divMascara").style.visibility = "hidden";
  //   document.getElementById("divMascara2").style.visibility = "hidden";
  //   window.removeEventListener("mousemove");
  //   return;
  // }

  // document.getElementById("divMascara").style.visibility = "visible";
  // document.getElementById("divMascara2").style.visibility = "visible";

  // document
  //   .querySelector('._access-menu [data-access-action="leiaFocus"]')
  //   .classList.toggle("active");
  // self.initialValues.leiaFocus = !self.initialValues.leiaFocus;
  // self.sessionState.leiaFocus = self.initialValues.leiaFocus;

  // if (!self.initialValues.leiaFocus) {
  //   document
  //     .querySelector('._access-menu [data-access-action="leiaFocus"]')
  //     .classList.remove("active");
  //   self.initialValues.leiaFocus = false;
  //   self.sessionState.leiaFocus = false;
  //   self.onChange(true);

  //   document.getElementById("divMascara").style.visibility = "hidden";
  //   document.getElementById("divMascara2").style.visibility = "hidden";
  //   window.removeEventListener("mousemove");
  //   return;
  // }
  // self.onChange(true);
}

export const injectColorAdjustmentsHeadersCss = `
/*
.AdjustColorCabecalho h1,
.AdjustColorCabecalho h2,
.AdjustColorCabecalho h3,
.AdjustColorCabecalho h4,
.AdjustColorCabecalho h5 {
  background-color: orange;
}
*/

.HeaderVermelho h1,
.HeaderVermelho h2,
.HeaderVermelho h3,
.HeaderVermelho h4,
.HeaderVermelho h5 {
  color: #e4111c;
}

.HeaderAzul h1,
.HeaderAzul h2,
.HeaderAzul h3,
.HeaderAzul h4,
.HeaderAzul h5 {
  color: #06a1dd;
}

.HeaderAmarelo h1,
.HeaderAmarelo h2,
.HeaderAmarelo h3,
.HeaderAmarelo h4,
.HeaderAmarelo h5 {
  color: #feef16;
}

.HeaderRosa h1,
.HeaderRosa h2,
.HeaderRosa h3,
.HeaderRosa h4,
.HeaderRosa h5 {
  color: #e40d7d;
}

.HeaderPreto h1,
.HeaderPreto h2,
.HeaderPreto h3,
.HeaderPreto h4,
.HeaderPreto h5 {
  color: #000000;
}

.HeaderVerde h1,
.HeaderVerde h2,
.HeaderVerde h3,
.HeaderVerde h4,
.HeaderVerde h5 {
  color: #17963e;
}

.HeaderRoxo h1,
.HeaderRoxo h2,
.HeaderRoxo h3,
.HeaderRoxo h4,
.HeaderRoxo h5 {
  color: #312582;
}

.HeaderBranco h1,
.HeaderBranco h2,
.HeaderBranco h3,
.HeaderBranco h4,
.HeaderBranco h5 {
  color: #ffffff;
}


`;
