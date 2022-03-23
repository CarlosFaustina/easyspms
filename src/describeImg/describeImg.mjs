export function toogleImageSpeaker(self, destroy) {
  let speaker = new SpeechSynthesisUtterance();
  let accessibilityTootipBox = document.getElementsByClassName(
    "accessibilityTootipBox"
  );
  console.log(accessibilityTootipBox[0]);

  let allImages = document.getElementsByTagName("img");
  //
  function _showTootip() {
    accessibilityTootipBox[0].style.display = "block";
    accessibilityTootipBox[0].style.color = "white";
  }

  function _hideTootip() {
    accessibilityTootipBox[0].style.display = "none";
    accessibilityTootipBox[0].style.color = "transparent";
  }
  //
  function _setCustomStyleTootip(styles) {
    for (const key in styles) {
      accessibilityTootipBox[0].style[key] = styles[key];
    }
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
      accessibilityTootipBox[0].style.right = `${
        window.innerWidth - event.x + 20
      }px`;
      accessibilityTootipBox[0].style.left = "auto";
    }
  }
  //
  function _imageOnClick(event) {
    let image = event.target;
    speaker.lang = "pt-PT";
    speaker.text = "Imagem sem descrição";

    if (!!image.alt) {
      speaker.text = image.alt;
    }
    speechSynthesis.speak(speaker);
  }

  function _imageMouseMove(imageEvent) {
    _onMouseMoveForTootip(imageEvent);
    _setCustomStyleTootip({
      top: `${imageEvent.y}px`,
    });
  }

  function _imageMouseEnter(imageEvent) {
    _setTootipText(imageEvent.target.alt || "Imagem sem descrição");
  }

  function _imageMouseOut() {
    _hideTootip();
  }

  if (destroy) {
    self.html.classList.remove("accessibility_tootip_box");
    document
      .querySelector('._access-menu [data-access-action="imageSpeaker"]')
      .classList.remove("active");
    for (const image of allImages) {
      image.removeEventListener("click", _imageOnClick);
      image.removeEventListener("mousemove", _imageMouseMove);
      image.removeEventListener("mouseenter", _imageMouseEnter);
      image.removeEventListener("mouseout", _imageMouseOut);
    }
    _hideTootip();
    speechSynthesis.cancel();
    self.initialValues.imageSpeaker = false;
    self.sessionState.imageSpeaker = false;
    self.onChange(true);
  }
  document
    .querySelector('._access-menu [data-access-action="imageSpeaker"]')
    .classList.toggle("active");
  for (const image of allImages) {
    image.addEventListener("click", _imageOnClick);
    image.addEventListener("mouseenter", _imageMouseEnter);
    image.addEventListener("mousemove", _imageMouseMove);
    image.addEventListener("mouseout", _imageMouseOut);
  }
  self.initialValues.imageSpeaker = !self.initialValues.imageSpeaker;
  self.sessionState.imageSpeaker = self.initialValues.imageSpeaker;
  self.onChange(true);
  self.html.classList.toggle("accessibility_tootip_box");
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
