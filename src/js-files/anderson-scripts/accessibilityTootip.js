let accessibilityTootipBox = {
  element: document.getElementById("accessibilityTootipBox"),
  showTootip() {
    this.element.style.display = "block";
    this.element.style.color = "white";
  },

  hideTootip() {
    this.element.style.display = "none";
    this.element.style.color = "transparent";
  },

  /**
   *
   * @param {CSSStyleDeclaration} styles
   */
  setCustomStyleTootip(styles) {
    for (const key in styles) {
      this.element.style[key] = styles[key];
    }
  },

  setTootipText(text) {
    this.element.innerHTML = text;
  },

  onMouseMoveForTootip(event) {
    this.showTootip();

    if (event.x <= window.innerWidth / 2) {
      this.element.style.left = `${event.x + 20}px`;
      this.element.style.right = "auto";
    } else {
      accessibilityTootipBox.element.style.right = `${
        window.innerWidth - event.x + 20
      }px`;
      this.element.style.left = "auto";
    }
  },
};
