export default function bigCursorReset(self, destroy) {
    if (self.sessionState.bigCursorWhite || self.sessionState.bigCursorBlack) {
        self.menuInterface.bigCursorWhite(true);
        self.menuInterface.bigCursorBlack(true);
    }
    return;
}