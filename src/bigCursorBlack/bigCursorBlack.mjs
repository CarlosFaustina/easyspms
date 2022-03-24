export default function bigCursorBlack(self, destroy) {
  if (self.sessionState.bigCursorWhite) {
    self.menuInterface.bigCursorWhite(true);
  }
  if (destroy) {
    self.html.classList.remove("_access_cursor_black");
    document
      .querySelector('._access-menu [data-access-action="bigCursorBlack"]')
      .classList.remove("active");
    self.initialValues.bigCursorBlack = false;
    self.sessionState.bigCursorBlack = false;
    self.onChange(true);
    return;
  }

  document
    .querySelector('._access-menu [data-access-action="bigCursorBlack"]')
    .classList.toggle("active");
  self.initialValues.bigCursorBlack = !self.initialValues.bigCursorBlack;
  self.sessionState.bigCursorBlack = self.initialValues.bigCursorBlack;
  self.onChange(true);
  self.html.classList.toggle("_access_cursor_black");
}
