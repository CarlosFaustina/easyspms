import invoke from "./invoke.mjs";

export default function addListeners(self) {
  
  let funcionalidades = $('._access_menu');
  
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
    funcionalidades[i].addEventListener(
      "keypress",
      (e) => {
        let event = e || window.event;
        invoke(self, event.target.getAttribute("data-access-action"));
      },
      false
    );
  }
}
