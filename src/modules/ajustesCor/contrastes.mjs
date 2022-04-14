// Alterna o fundo do site para preto com fontes brilhantes.
let contrasteEscuro = (self, destroy) => {
    if (destroy) {
        $('body').removeClass('easyContrasteEscuro');    
    }
    console.log('contraste escuro');
    $('body').toggleClass('easyContrasteEscuro');
}

// Altera o fundo do site para branco com fontes escuras.
let contrasteClaro = (self, destroy) => {
    if (destroy) {
        $('body').removeClass('easyContrasteClaro');
    }

    $('body').toggleClass('easyContrasteClaro');
}

// Permitirá a alteração da gradação do site para outra escala de contrastes.
let altoContraste = (self, destroy) => {
    if (destroy) {
        $('body').removeClass('easyAltoContraste');
    }
    $('body').toggleClass('easyAltoContraste');
}

export {
    contrasteEscuro,
    contrasteClaro,
    altoContraste
}