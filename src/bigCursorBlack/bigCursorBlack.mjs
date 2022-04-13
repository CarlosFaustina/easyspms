export default function bigCursorBlack(self, destroy) {
    if (self.sessionState.bigCursorWhite) {
        self.menuInterface.bigCursorWhite(true);
    }
  
    if (destroy) {
        $('html').removeClass("_access_cursor_black");
        $('._access-menu [data-access-action="bigCursorBlack"]').removeClass("active");
        self.initialValues.bigCursorBlack = false;
        self.sessionState.bigCursorBlack = false;
        self.onChange(true);
    
        return;
    }

    $('._access-menu [data-access-action="bigCursorBlack"]').toggleClass("active");
    self.initialValues.bigCursorBlack = !self.initialValues.bigCursorBlack;
    self.sessionState.bigCursorBlack = self.initialValues.bigCursorBlack;
    self.onChange(true);
    $('html').toggleClass("_access_cursor_black");
}
