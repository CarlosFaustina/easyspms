export default function bigCursorWhite(self, destroy) {
  if (self.sessionState.bigCursorBlack) {
    self.menuInterface.bigCursorBlack(true);
  }

  if (destroy) {
    self.html.classList.remove("_access_cursor_white");
    document
      .querySelector('._access-menu [data-access-action="bigCursorWhite"]')
      .classList.remove("active");
    self.initialValues.bigCursorWhite = false;
    self.sessionState.bigCursorWhite = false;
    self.onChange(true);
    return;
  }

  document
    .querySelector('._access-menu [data-access-action="bigCursorWhite"]')
    .classList.toggle("active");
  self.initialValues.bigCursorWhite = !self.initialValues.bigCursorWhite;
  self.sessionState.bigCursorWhite = self.initialValues.bigCursorWhite;
  self.onChange(true);
  self.html.classList.toggle("_access_cursor_white");
}
