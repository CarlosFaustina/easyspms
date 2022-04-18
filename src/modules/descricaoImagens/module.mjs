export default function leitorImagens(self, destroy) {
    let speaker                 = new SpeechSynthesisUtterance();
    let accessibilityTootipBox  = document.getElementsByClassName("accessibilityTootipBox");
    let allImages               = document.getElementsByTagName("img");
  
    if (destroy) {
        self.html.classList.remove("accessibility_tootip_box");
      
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
        return;
    }
    
    for (const image of allImages) {
        image.addEventListener("click", _imageOnClick);
        image.addEventListener("mouseenter", _imageMouseEnter);
        image.addEventListener("mousemove", _imageMouseMove);
        image.addEventListener("mouseout", _imageMouseOut);
    }

    function _showTootip() {
        accessibilityTootipBox[0].style.display = "block";
        accessibilityTootipBox[0].style.color   = "white";
    }
    
    function _hideTootip() {
        accessibilityTootipBox[0].style.display = "none";
        accessibilityTootipBox[0].style.color   = "transparent";
    }
      
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
}
