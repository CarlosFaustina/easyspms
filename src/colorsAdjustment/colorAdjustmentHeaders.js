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
});
