export default function addHasText() {
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
}

export const describeImgCss = `
  .accessibilityTootipBox {
  display: block;
  position: fixed;
  background: rgba(0, 0, 0, 0.9);
  color: transparent;
  font-size: 1rem;
  white-space: pre-wrap;
  padding: 10px;
  line-height: 1 !important;
  width: auto;
  max-width: 50%;
  border-radius: 3px;
  max-height: auto;
  z-index: 45454564;
  overflow: auto;
}
`;
