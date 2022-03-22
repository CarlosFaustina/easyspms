export default function grayHues(self, destroy) {
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
      .querySelector('._access-menu [data-access-action="grayHues"]')
      .classList.remove("active");
    self.initialValues.grayHues = false;
    self.sessionState.grayHues = self.initialValues.grayHues;
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
    .querySelector('._access-menu [data-access-action="grayHues"]')
    .classList.toggle("active");
  self.initialValues.grayHues = !self.initialValues.grayHues;
  self.sessionState.grayHues = self.initialValues.grayHues;
  self.onChange(true);
  let val;
  if (self.initialValues.grayHues) {
    val = "grayscale(1)";
    if (self.initialValues.invertColors) self.menuInterface.invertColors(true);
  } else {
    val = "";
  }
  self.html.style.webkitFilter = val;
  self.html.style.mozFilter = val;
  self.html.style.msFilter = val;
  self.html.style.filter = val;
}
