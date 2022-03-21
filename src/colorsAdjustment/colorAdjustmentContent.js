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
