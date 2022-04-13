// Alterna o fundo do site para preto com fontes brilhantes.
let contrasteEscuro = (self, destroy) => {
    $('body').toggleClass('easyContrasteEscuro');
}

// Altera o fundo do site para branco com fontes escuras.
let contrasteClaro = (self, destroy) => {
    $('body').toggleClass('easyContrasteClaro');
}

let altoContraste = (self, destroy) => {
    console.log('alto contraste');
}

// permitirá a diminuição da intensidade das cores para o conteúdo menos enfatizado.
let baixaSaturacao = (self, destroy) => {
    if ($('body').css('filter') == 'none') {
        $('body').css('filter', 'saturate(50%)');
    } else {
        $('body').css('filter', '');
    }
}

// aumento da intensidade das cores para o conteúdo enfatizado.
let altaSaturacao = (self, destroy) => {
    if ($('body').css('filter') == 'none') {
        $('body').css('filter', 'saturate(150%)');
    } else {
        $('body').css('filter', '');
    }
}

export {
    contrasteEscuro,
    contrasteClaro,
    altoContraste,
    baixaSaturacao,
    altaSaturacao
}