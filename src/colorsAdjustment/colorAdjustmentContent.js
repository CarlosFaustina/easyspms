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
