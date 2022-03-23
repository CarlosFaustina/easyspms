let textSpeaker = {
  elements: {
    btnTextSpeaker: document.getElementById("btnTextSpeaker"),
    allTexts: document.querySelectorAll(".hasText"),
  },

  /**
   * Ao clicar no texto, executa a leitura
   * @param {MouseEvent} event
   */
  _onClickTextSpeaker(event) {
    speaker.lang = "pt-BR";
    speaker.text = "Não foi possível ser o texto";

    // let parentEl = event.target.parentElement;

    // let childWithHasText = parentEl.getElementsByClassName("hasText");

    // if (!!childWithHasText.length) {
    //   speaker.text = parentEl.innerText;
    // } else {
      let text = event.target.innerText;
      if (!!text) {
        speaker.text = text;
      }
    // }
    
    speechSynthesis.speak(speaker);
  },
  /**
   * Ativa evento "click" para leitura do texto
   */
  _enableTextSpeaker() {
      
    textSpeaker.elements.allTexts.forEach((textElement) => {
      textElement.addEventListener("click", textSpeaker._onClickTextSpeaker);
    });
  },

  /**
   * Desativa evento "click" para leitura do texto
   */
  _disableTextSpeaker() {
    textSpeaker.elements.allTexts.forEach((textElement) => {
      textElement.removeEventListener("click", textSpeaker._onClickTextSpeaker);
    });
    speechSynthesis.cancel();
  },

  _toogleTextSpeaker(e) {
    e.preventDefault();

    let btn = textSpeaker.elements.btnTextSpeaker;

    if (btn.classList.contains("btn-outline-primary")) {
      textSpeaker._enableTextSpeaker();
      btn.classList.remove("btn-outline-primary");
      btn.classList.add("btn-primary");
      btn.innerText = "Desativar reprodutor de texto";
    } else {
      textSpeaker._disableTextSpeaker();
      btn.classList.remove("btn-primary");
      btn.classList.add("btn-outline-primary");
      btn.innerText = "Ativar reprodutor de texto";
    }

    btn.blur();
  },
  init() {
    textSpeaker.elements.btnTextSpeaker.addEventListener(
      "click",
      textSpeaker._toogleTextSpeaker
    );
  },
};
