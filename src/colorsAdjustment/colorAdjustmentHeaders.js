$("#btn_mudaCorCabecalho").click(function (e) {
  //window.alert("Aqui estou eu");

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
