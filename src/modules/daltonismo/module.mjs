let protanopia = (self, destroy) => {
    let val;
    if (!self.initialValues.protanopia) {
        val = "hue-rotate(199deg)";
    } else {
        val = "";
    }

    self.html.style.webkitFilter    = val;
    self.html.style.mozFilter       = val;
    self.html.style.msFilter        = val;
    self.html.style.filter          = val;
}

let deuteranopia = (self, destroy) => {
    let val;
    if (!self.initialValues.deuteranopia) {
        val = "hue-rotate(221deg)";
    } else {
        val = "";
    }

    self.html.style.webkitFilter    = val;
    self.html.style.mozFilter       = val;
    self.html.style.msFilter        = val;
    self.html.style.filter          = val;
}

let tritanopia = (self, destroy) => {
    let val;
    if (!self.initialValues.tritanopia) {
        val = "hue-rotate(115deg)";
    } else {
        val = "";
    }

    self.html.style.webkitFilter    = val;
    self.html.style.mozFilter       = val;
    self.html.style.msFilter        = val;
    self.html.style.filter          = val;
}

export {
    protanopia,
    deuteranopia,
    tritanopia
}