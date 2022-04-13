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

let saturacao = (self, destroy) => {
    var rows = document.querySelectorAll('.row-collors');
  
      rows.forEach(row => {
        
        if ($(row).css('filter') == 'none') {
          $(row).css('filter', 'saturate(90%)');
        }
  
        var cssFilter = $(row).css('filter');
        var saturate  = parseFloat(cssFilter.match(/[\d\.]+/));
  
        if (value == 'less') {
          saturate = saturate - 0.1;
        } else {
          saturate = saturate + 0.1;
        }
  
        $(row).css('filter', 'saturate(' + saturate + ')');
      });
}

export {
    contrasteEscuro,
    contrasteClaro,
    altoContraste,
    saturacao
}