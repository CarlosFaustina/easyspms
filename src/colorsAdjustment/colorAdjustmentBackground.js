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
