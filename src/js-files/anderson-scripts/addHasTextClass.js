/**
 *******************************
 * ADICIONA A CLASSE "hasText" em todos os textos da tela
 *******************************
 */

//Adiciona classe "hasText" em todos os elementos da pagina que contem texto
let nodes = document.evaluate(
  ".//*[normalize-space(text())]",
  document,
  null,
  XPathResult.ANY_TYPE,
  null
);

let textElements = [];

let nextNode = nodes.iterateNext();

while (!!nextNode) {
  textElements.push(nextNode);
  nextNode = nodes.iterateNext();
}

for (let element of textElements) {
  element.classList.add("hasText");
}

textElements.forEach((textElement) => {
  let childWithSameClass = textElement.querySelectorAll(".hasText");

  if (!!childWithSameClass.length) {
    textElement.childNodes.forEach((childElem, index) => {
      if (
        childElem.nodeType === 3 &&
        !!childElem.data.replace(/\r?\n|\r/, "").trim()
      ) {
        let span = document.createElement("span");

        span.classList.add("hasText");

        span.innerHTML = childElem.data;

        textElement.insertBefore(span, textElement.childNodes[index]);

        childElem.remove();
      }
    });

    textElement.classList.remove("hasText");
  }
});

/**
 *******************************
 * FIM ADICIONA "hasText"
 *******************************
 */
