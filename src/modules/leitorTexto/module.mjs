import read from "./read.mjs";
import addHasText from './addHasText.mjs';
import { toogleAudioPlayer } from "../audioPlayer/index.mjs";

export default function leitorTexto(self, destroy) {
    addHasText(false);
    const allTexts = document.querySelectorAll(".hasText");
    
    self.initialValues.textToSpeech = !self.initialValues.textToSpeech;
    if(self.initialValues.textToSpeech) {
        for (const text of allTexts) {
            text.addEventListener("click", read);
        }
        toogleAudioPlayer(true);
    } else {
        addHasText(true);
        toogleAudioPlayer(false);
    }
    
}