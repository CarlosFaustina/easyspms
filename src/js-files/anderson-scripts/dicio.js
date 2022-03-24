let dicio = {
  elements: {
    btnDicio: document.getElementById("btnDicio"),
    allTexts: document.querySelectorAll(".hasText"),
  },
  /**
   * Adiciona separa frase em palavras, e adiciona o a tag "diciotext", após isso escuta eventos de "mouseenter" e "mouseleve" nas palavras
   * @param {MouseEvent} event
   */
  _diciohandleMouseEnter(event) {
    event.target.innerHTML = event.target.innerText.replace(
      /([a-zA-Zà-úÀ-Ú]+)/g,
      "<diciotext class='dicioTooltip'>$1</diciotext>"
    );

    let words = event.target.getElementsByTagName("diciotext");

    let fetchMeaningTimeOut = null;

    let onMouseMoveWord = (wordEvent) => {
      accessibilityTootipBox.onMouseMoveForTootip(wordEvent);
      accessibilityTootipBox.setCustomStyleTootip({
        top: `${wordEvent.y - wordEvent.target.offsetHeight * 2}px`,
      });
    };

    let onMouseEnterWord = (wordEvent) => {
      wordEvent.target.style.backgroundColor = "red";
      accessibilityTootipBox.setTootipText("Procurando siginificado...");

      fetchMeaningTimeOut = setTimeout(() => {
        dicio._fetchMeaning(wordEvent.target.innerText);
      }, 1000);
    };

    for (const word of words) {
      word.addEventListener("mouseenter", onMouseEnterWord);

      word.addEventListener("mousemove", onMouseMoveWord);

      word.addEventListener("mouseout", (wordEvent) => {
        accessibilityTootipBox.hideTootip();
        if (!!fetchMeaningTimeOut) {
          clearTimeout(fetchMeaningTimeOut);
        }
        wordEvent.target.style.backgroundColor = "";
      });
    }
  },
  /**
   * Procura sigificado da palavra
   * @param {HTMLElement} wordText
   */
  _fetchMeaning(wordText) {
    fetch(
      `https://significado.herokuapp.com/v2/${wordText
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()}`
    ).then((response) => {
      response
        .json()
        .then((jsonResponse) => {
          if (!!jsonResponse.length) {
            let meanings = jsonResponse[0].meanings.slice(0, 3).join("<br>");

            accessibilityTootipBox.setTootipText(meanings);
            let currentTopValue = parseInt(
              accessibilityTootipBox.element.style.top
            );

            accessibilityTootipBox.setCustomStyleTootip({
              top: `${
                currentTopValue -
                (accessibilityTootipBox.element.offsetHeight - 50)
              }px`,
            });
          } else {
            accessibilityTootipBox.setTootipText(
              "Siginificado não foi localizado."
            );
          }
        })
        .catch(() => {
          accessibilityTootipBox.setTootipText(
            "Siginificado não foi localizado."
          );
        });
    });
  },
  /**
   * Retorna frase ao seu ponto inicial.
   * @param {MouseEvent} event
   */
  _dicioHandleMouseLeave(event) {
    event.target.innerHTML = event.target.innerText;
  },
  /**
   * Habilita evento "mouseenter" ao ativar o dicionário.
   */
  _dicioEnableOnHoverText() {
    for (const text of dicio.elements.allTexts) {
      text.addEventListener("mouseenter", this._diciohandleMouseEnter);
      text.addEventListener("mouseleave", this._dicioHandleMouseLeave);
    }
  },

  /**
   * Desabilita evento "mouseenter" ao desativar o dicionário.
   */
  _dicioDisableOnHoverText() {
    for (const text of dicio.elements.allTexts) {
      text.removeEventListener("mouseenter", this._diciohandleMouseEnter);
      text.removeEventListener("mouseleave", this._dicioHandleMouseLeave);
    }
    accessibilityTootipBox.hideTootip();
  },
  /**
   * Função para ativar ou desativar o dicionário.
   * @param {MouseEvent} e
   */
  _toogleDicio(e) {
    e.preventDefault();

    if (btnDicio.classList.contains("btn-outline-primary")) {
      dicio._dicioEnableOnHoverText();
      dicio.elements.btnDicio.classList.remove("btn-outline-primary");
      dicio.elements.btnDicio.classList.add("btn-primary");
      dicio.elements.btnDicio.innerText = "Desativar Dicionário";
    } else {
      dicio._dicioDisableOnHoverText();
      dicio.elements.btnDicio.classList.remove("btn-primary");
      dicio.elements.btnDicio.classList.add("btn-outline-primary");
      dicio.elements.btnDicio.innerText = "Ativar Dicionário";
    }

    dicio.elements.btnDicio.blur();
  },

  init() {
    dicio.elements.btnDicio.addEventListener("click", this._toogleDicio);
  },
};
