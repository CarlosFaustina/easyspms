// Amplia o Ponteiro do rato e altera sua cor para branco.
let ponteiroBranco = (self, destroy) => {
    if (destroy) {
        self.parseStatus('ponteiroBranco', true);
        $('html').removeClass('_access_cursor_white');

        return;
    }
    
    ponteiroPreto(self, true);
    $('html').toggleClass('_access_cursor_white');
}

// Amplia o Ponteiro do rato e altera sua cor para preto.
let ponteiroPreto = (self, destroy) => {
    if (destroy) {
        self.parseStatus('ponteiroPreto', true);
        $('html').removeClass('_access_cursor_black');

        return;
    }
    
    ponteiroBranco(self, true);
    $('html').toggleClass('_access_cursor_black');
}

// Retorna à padronização original
let ponteiroNormal = (self, destroy) => {
    ponteiroBranco(self, true);
    ponteiroPreto(self, true);
}

export {
    ponteiroBranco,
    ponteiroPreto,
    ponteiroNormal
}