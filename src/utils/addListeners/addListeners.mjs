import invoke from "./invoke.mjs";

export default function addListeners(self) {
  let funcionalidades = document.querySelectorAll("#easyapp");
  //let funcionalidades = $('#easyapp');
  console.log(funcionalidades);
  //console.log(teste.text());
  for (let i = 0; i < funcionalidades.length; i++) {
    funcionalidades[i].addEventListener(
      "click",
      (e) => {
        let event = e || window.event;
        console.log(event.target.getAttribute("data-access-action"));
        invoke(self, event.target.getAttribute("data-access-action"));
      },
      false
    );
    functionalidades[i].addEventListener(
      "keypress",
      (e) => {
        let event = e || window.event;
        invoke(self, event.target.getAttribute("data-access-action"));
      },
      false
    );
  }
}
