export default function contrasteSaturacao(self, destroy) {
  // Selecionando os botões no Easy
  var linksContraste = document.querySelectorAll('nav a[data-contraste]');
  var linksSaturacao = document.querySelectorAll('nav a[data-saturacao]');
  
  // Contraste
  linksContraste.forEach(linksContraste => 
    linksContraste.addEventListener('click', function() {
      var dataContraste = this.dataset.contraste;
      contraste(dataContraste);
    })
  );

  function contraste(dataContraste) {
    var setId;

    switch (dataContraste) {
      case '1':
        setId = 'contrasteClaro';
        break;

      case '2':
        setId = 'contrasteEscuro';
        break;

      case '3':
        setId = 'altoContraste';
        break;

      default:
        setId = '';
    }
    
    document.querySelector('body').setAttribute('id', setId);
    document.cookie = 'contraste=' + setId + '';
  }

  // Saturação
  linksSaturacao.forEach(linksSaturacao =>
    linksSaturacao.addEventListener('click', function() {
      var dataSaturacao = this.dataset.saturacao;
      saturacao(dataSaturacao);
    })
  );

  function saturacao(value)
    {
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
}
