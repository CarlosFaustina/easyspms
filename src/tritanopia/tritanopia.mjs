import resetIfDefined from "../utils/resetIfDefined/resetIfDefined.mjs";

export default function tritanopia(self, destroy) {
  console.log('"tritanopia"');
  if (typeof self.initialValues.html.filter === "undefined")
    self.initialValues.html.filter = getComputedStyle(self.html).filter;
  if (typeof self.initialValues.html.webkitFilter === "undefined")
    self.initialValues.html.webkitFilter = getComputedStyle(
      self.html
    ).webkitFilter;
  if (typeof self.initialValues.html.mozFilter === "undefined")
    self.initialValues.html.mozFilter = getComputedStyle(self.html).mozFilter;
  if (typeof self.initialValues.html.msFilter === "undefined")
    self.initialValues.html.msFilter = getComputedStyle(self.html).msFilter;

  if (destroy) {
    document
      .querySelector('._access-menu [data-access-action="tritanopia"]')
      .classList.remove("active");
    self.initialValues.tritanopia = false;
    self.sessionState.tritanopia = self.initialValues.tritanopia;
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

  document
    .querySelector('._access-menu [data-access-action="tritanopia"]')
    .classList.toggle("active");
  self.initialValues.tritanopia = !self.initialValues.tritanopia;
  self.sessionState.tritanopia = self.initialValues.tritanopia;
  self.onChange(true);
  let val;
  if (self.initialValues.tritanopia) {
    val = "hue-rotate(115deg)";
  } else {
    val = "";
  }
  self.html.style.webkitFilter = val;
  self.html.style.mozFilter = val;
  self.html.style.msFilter = val;
  self.html.style.filter = val;
  //to make it workinhg in Firefox, have to apply styles to all elements in body, exsept easy menu. because grayscale brakes position:sticky (and some other). Firefox bug. https://code-examples.net/en/q/2325eb1
}
