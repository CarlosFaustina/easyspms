let modoMonocromatico = (self, destroy) => {
    let filters = [
        'filter',
        'webkitFilter',
        'mozFilter',
        'msFilter'
    ];
    
    if (destroy) {
        $.each(filters, function (index, value) {
            if (typeof self.initialValues.html[value] !== "undefined") {
                self.html.style[value] = self.initialValues.html[value];
            }
        });

        return;
    }

    if (Object.values(self.initialValues.html).length == 0) {
        $.each(filters, function(index, value){
            self.initialValues.html[value] = getComputedStyle(self.html)[value];
        });
    } else {
        $.each(filters, function(index, value) {
            if (typeof self.initialValues[value] === "undefined") {
                self.initialValues.html[value] = getComputedStyle(self.html)[value];
            }
        });
    }
    
    let val;
    if (!self.initialValues.modoMonocromatico) {
        val = "grayscale(1)";
    } else {
        val = "";
    }

    self.html.style.webkitFilter    = val;
    self.html.style.mozFilter       = val;
    self.html.style.msFilter        = val;
    self.html.style.filter          = val;
}

export default modoMonocromatico;