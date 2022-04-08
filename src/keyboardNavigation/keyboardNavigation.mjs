export function keyboardNavigation(self, destroy) {
  if ($("body").hasClass("KeyboardNavigation")) {
    $("body").removeClass("KeyboardNavigation");
    $("#keyboardNavCheck").removeClass("Ativa");
    $("#keyboardNavCheck").hide();
    $("#keyboardNavMenu").hide();
  } else {
    $("body").addClass("KeyboardNavigation");
    $("#keyboardNavCheck").addClass("Ativa");
    $("#keyboardNavCheck").show();
    $("#keyboardNavMenu").show();
    document.body.onkeyup = function (e) {
      if (e.keyCode == 32) {
        window.location.hash = "keyboardNavMenu";
      }
    };
  }

  document.body.onkeyup(function (e) {
    if (e.keyCode == 32) {
      console.log("O TAB FOI pressionado ");
    }
  });

  document.getElementById("MenuNavAmig").onclick = function () {
    //console.log("João");
    self.toggleMenu();
    window.location.hash = "col-auto";
  };
}

export let keyboardNavCss = `
.KeyboardNavigation {
}

.keyboardNavMenu {
  margin-top: 0px;
  margin-left: 40%;
  position: fixed;
  background-color: black;
  display: none;
}
`;
