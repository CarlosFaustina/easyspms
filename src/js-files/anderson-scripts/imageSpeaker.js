let imageSpeaker = {
  elements: {
    btnImageSpeaker: document.getElementById("btnImageSpeaker"),
    allImages: document.getElementsByTagName("img"),
  },
  /**
   * Reproduz "alt" ao clicar na imagem
   * @param {MouseEvent} event
   */
  _imageOnClick(event) {
    let image = event.target;
    speaker.lang = "pt-BR";
    speaker.text = "Imagem sem descrição";

    if (!!image.alt) {
      speaker.text = image.alt;
    }
    speechSynthesis.speak(speaker);
  },

  _imageMouseMove(imageEvent) {
    accessibilityTootipBox.onMouseMoveForTootip(imageEvent);
    accessibilityTootipBox.setCustomStyleTootip({
      top: `${imageEvent.y}px`,
    });
  },

  _imageMouseEnter(imageEvent) {
    accessibilityTootipBox.setTootipText(
      imageEvent.target.alt || "Imagem sem descrição"
    );
  },

  _imageMouseOut() {
    accessibilityTootipBox.hideTootip();
  },
  /**
   * Ativa evento para reproduzir
   */
  _enableImageSpeaker() {
    for (const image of imageSpeaker.elements.allImages) {
      image.addEventListener("click", imageSpeaker._imageOnClick);
      image.addEventListener("mouseenter", imageSpeaker._imageMouseEnter);
      image.addEventListener("mousemove", imageSpeaker._imageMouseMove);
      image.addEventListener("mouseout", imageSpeaker._imageMouseOut);
    }
  },

  /**
   * Desativa evento do reprodutor
   */
  _disableImageSpeaker() {
    for (const image of imageSpeaker.elements.allImages) {
      image.removeEventListener("click", imageSpeaker._imageOnClick);
      image.removeEventListener("mousemove", imageSpeaker._imageMouseMove);
      image.removeEventListener("mouseenter", imageSpeaker._imageMouseEnter);
      image.removeEventListener("mouseout", imageSpeaker._imageMouseOut);
    }
    accessibilityTootipBox.hideTootip();
    speechSynthesis.cancel();
  },
  /**
   * Alterna entre Ativado/Desativado o reprodutor da imagem
   * @param {MouseEvent} e
   */
  _toogleImageSpeaker(e) {
    e.preventDefault();

    if (
      imageSpeaker.elements.btnImageSpeaker.classList.contains(
        "btn-outline-primary"
      )
    ) {
      imageSpeaker._enableImageSpeaker();
      imageSpeaker.elements.btnImageSpeaker.classList.remove(
        "btn-outline-primary"
      );
      imageSpeaker.elements.btnImageSpeaker.classList.add("btn-primary");
      imageSpeaker.elements.btnImageSpeaker.innerText =
        "Desativar reprodutor de imagem";
    } else {
      imageSpeaker._disableImageSpeaker();
      imageSpeaker.elements.btnImageSpeaker.classList.remove("btn-primary");
      imageSpeaker.elements.btnImageSpeaker.classList.add(
        "btn-outline-primary"
      );
      imageSpeaker.elements.btnImageSpeaker.innerText =
        "Ativar reprodutor de imagem";
    }

    imageSpeaker.elements.btnImageSpeaker.blur();
  },
  init() {
    imageSpeaker.elements.btnImageSpeaker.addEventListener(
      "click",
      imageSpeaker._toogleImageSpeaker
    );
  },
};
