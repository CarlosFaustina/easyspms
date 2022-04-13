export default function bigCursorWhite(self, destroy) {
    if (self.sessionState.bigCursorBlack) {
        self.menuInterface.bigCursorBlack(true);
    }

    if (destroy) {
        $('html').removeClass("_access_cursor_white");
        $('._access-menu [data-access-action="bigCursorWhite"]').removeClass("active");
        
        self.initialValues.bigCursorWhite = false;
        self.sessionState.bigCursorWhite = false;
        self.onChange(true);
    
        return;
    }

    $('._access-menu [data-access-action="bigCursorWhite"]').toggleClass("active");
  
    self.initialValues.bigCursorWhite   = !self.initialValues.bigCursorWhite;
    self.sessionState.bigCursorWhite    = self.initialValues.bigCursorWhite;
    self.onChange(true);
    $('html').toggleClass('_access_cursor_white');
}
