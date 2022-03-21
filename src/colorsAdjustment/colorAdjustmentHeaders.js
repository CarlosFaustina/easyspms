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
