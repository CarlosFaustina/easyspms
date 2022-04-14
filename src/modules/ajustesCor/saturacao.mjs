// permitirá a diminuição da intensidade das cores para o conteúdo menos enfatizado.
let baixaSaturacao = (self, destroy) => {
    let val;
    if (!self.initialValues.baixaSaturacao) {
        val = "saturate(50%)";
    } else {
        val = "";
    }

    self.html.style.webkitFilter    = val;
    self.html.style.mozFilter       = val;
    self.html.style.msFilter        = val;
    self.html.style.filter          = val;
}

// aumento da intensidade das cores para o conteúdo enfatizado.
let altaSaturacao = (self, destroy) => {
    let val;
    if (!self.initialValues.altaSaturacao) {
        val = "saturate(150%)";
    } else {
        val = "";
    }

    self.html.style.webkitFilter    = val;
    self.html.style.mozFilter       = val;
    self.html.style.msFilter        = val;
    self.html.style.filter          = val;
}

export {
    baixaSaturacao,
    altaSaturacao
}
