///
let accessibilityTootipBox = document.getElementsByClassName(
  "accessibilityTootipBox"
);

function _diciohandleMouseEnter(event) {
  event.target.innerHTML = event.target.innerText.replace(
    /([a-zA-Zà-úÀ-Ú]+)/g,
    "<diciotext class='dicioTooltip'>$1</diciotext>"
  );

  let words = event.target.getElementsByTagName("diciotext");

  let fetchMeaningTimeOut = null;

  let onMouseMoveWord = (wordEvent) => {
    _onMouseMoveForTootip(wordEvent);
    _setCustomStyleTootip({
      top: `${wordEvent.y - wordEvent.target.offsetHeight * 2}px`,
    });
  };

  let onMouseEnterWord = (wordEvent) => {
    wordEvent.target.style.backgroundColor = "red";
    wordEvent.target.style.cursor = "help";
  };

  for (const word of words) {
    word.addEventListener("mouseenter", onMouseEnterWord);
    word.addEventListener("click", () => {
      let palavra = word.innerText;

      window.open(
        `https://www.dicio.com.br/${palavra
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase()}/`,
        null,
        "height=600,width=600'"
      );
    });

    word.addEventListener("mouseout", (wordEvent) => {
      _hideTootip();
      if (!!fetchMeaningTimeOut) {
        clearTimeout(fetchMeaningTimeOut);
      }
      wordEvent.target.style.backgroundColor = "";
      wordEvent.target.style.cursor = "default";
    });
  }
}

function _dicioHandleMouseLeave(event) {
  event.target.innerHTML = event.target.innerText;
}

function _setTootipText(text) {
  accessibilityTootipBox[0].innerHTML = text;
}

function _onMouseMoveForTootip(event) {
  _showTootip();

  if (event.x <= window.innerWidth / 2) {
    accessibilityTootipBox[0].style.left = `${event.x + 20}px`;
    accessibilityTootipBox[0].style.right = "auto";
  } else {
    accessibilityTootipBox[0].style.right = `${window.innerWidth - event.x + 20
      }px`;
    accessibilityTootipBox[0].style.left = "auto";
  }
}
function _showTootip() {
  accessibilityTootipBox[0].style.display = "block";
  accessibilityTootipBox[0].style.color = "white";
}

function _hideTootip() {
  accessibilityTootipBox[0].style.display = "none";
  accessibilityTootipBox[0].style.color = "transparent";
}

function _setCustomStyleTootip(styles) {
  for (const key in styles) {
    accessibilityTootipBox[0].style[key] = styles[key];
  }
}

///

export default function dicionario(self, destroy) {
  const allTexts = document.querySelectorAll(".hasText");
  const btnDicio = document.querySelector(
    '._access-menu [data-access-action="dicionario"]'
  );

  if (destroy) {
    btnDicio.classList.remove("active");
    btnDicio.innerHTML = "Ativar Dicionário";

    self.initialValues.dicionario = false;
    self.sessionState.dicionario = false;
    self.onChange(true);

    console.log(
      "============>>>>>>>>>>>>>>>>>>>>>>>>OFF!!!<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<======================="
    );

    for (const text of allTexts) {
      text.removeEventListener("mouseenter", _diciohandleMouseEnter);
      text.removeEventListener("mouseleave", _dicioHandleMouseLeave);
    }
    _hideTootip();

    return;
  } else {
    btnDicio.classList.toggle("active");

    self.initialValues.dicionario = !self.initialValues.dicionario;
    self.sessionState.dicionario = self.initialValues.dicionario;
    // self.onChange(true);
    if (self.initialValues.dicionario) {
      console.log(
        "============>>>>>>>>>>>>>>>>>>>>>>>>ON<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<======================="
      );

      for (const text of allTexts) {
        text.addEventListener("mouseenter", _diciohandleMouseEnter);
        text.addEventListener("mouseleave", _dicioHandleMouseLeave);
      }
      _showTootip();
    } else {
      console.log(
        "============>>>>>>>>>>>>>>>>>>>>>>>>OFF<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<======================="
      );
      btnDicio.innerHTML = "Ativar Dicionário";
      for (const text of allTexts) {
        text.removeEventListener("mouseenter", _diciohandleMouseEnter);
        text.removeEventListener("mouseleave", _dicioHandleMouseLeave);
      }
      _hideTootip();
    }
  }

  ///
}
