export default function accessibilityTootipBox() {
  const element = document.getElementById("accessibilityTootipBox"),
  function 

 function hideTootip() {
    this.element.style.display = "none";
    this.element.style.color = "transparent";
  }

  /**
   *
   * @param {CSSStyleDeclaration} styles
   */
 function setCustomStyleTootip(styles) {
    for (const key in styles) {
      this.element.style[key] = styles[key];
    }
  }

 function setTootipText(text) {
    this.element.innerHTML = text;
  }

 function onMouseMoveForTootip(event) {
    this.showTootip();

    if (event.x <= window.innerWidth / 2) {
      this.element.style.left = `${event.x + 20}px`;
      this.element.style.right = "auto";
    } else {
     element.style.right = `${
        window.innerWidth - event.x + 20
      }px`;
      this.element.style.left = "auto";
    }
  }
  
}