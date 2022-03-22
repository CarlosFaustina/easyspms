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

$('input:radio[name="editaCor"]').on("change", function () {
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
