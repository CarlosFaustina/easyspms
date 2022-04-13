import resetIfDefined from "../utils/resetIfDefined/resetIfDefined.mjs";

export default function deutanopia(self, destroy) {
    if (typeof self.initialValues.html.filter === "undefined") {
        self.initialValues.html.filter = getComputedStyle(self.html).filter;
    }
    
    if (typeof self.initialValues.html.webkitFilter === "undefined") {
        self.initialValues.html.webkitFilter = getComputedStyle(self.html).webkitFilter;
    }
    
    if (typeof self.initialValues.html.mozFilter === "undefined") {
        self.initialValues.html.mozFilter = getComputedStyle(self.html).mozFilter;
    }
    
    if (typeof self.initialValues.html.msFilter === "undefined") {
        self.initialValues.html.msFilter = getComputedStyle(self.html).msFilter;
    }
    
    if (destroy) {
        $('._access-menu [data-access-action="deutanopia"]').removeClass("active");
        self.initialValues.deutanopia = false;
        self.sessionState.deutanopia = self.initialValues.deutanopia;
        self.onChange(true);
        resetIfDefined(self.initialValues.html.filter, self.html.style, "filter");
        resetIfDefined(
            self.initialValues.html.webkitFilter,
            self.html.style,
            "webkitFilter"
        );
        resetIfDefined(
            self.initialValues.html.mozFilter,
            self.html.style,
            "mozFilter"
        );
        resetIfDefined(
            self.initialValues.html.msFilter,
            self.html.style,
            "msFilter"
        );
    
        return;
    }

    $('._access-menu [data-access-action="deutanopia"]').toggleClass("active");
    self.initialValues.deutanopia = !self.initialValues.deutanopia;
    self.sessionState.deutanopia = self.initialValues.deutanopia;
    self.onChange(true);
    
    let val;
    if (self.initialValues.deutanopia) {
        val = "hue-rotate(221deg)";
    } else {
        val = "";
    }

    self.html.style.webkitFilter = val;
    self.html.style.mozFilter = val;
    self.html.style.msFilter = val;
    self.html.style.filter = val;
    //to make it workinhg in Firefox, have to apply styles to all elements in body, exsept easy menu. because grayscale brakes position:sticky (and some other). Firefox bug. https://code-examples.net/en/q/2325eb1
}
