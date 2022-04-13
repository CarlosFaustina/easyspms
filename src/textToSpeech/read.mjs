import { enableSpeechEvents } from "../audioPlayer/index.mjs";

const speechInstance = new SpeechSynthesisUtterance();
enableSpeechEvents(speechInstance);

/**
 * Ler texto
 * @param {MouseEvent} e
 */
export default function read(e) {
  e.preventDefault();

  if (!window.SpeechSynthesisUtterance || !window.speechSynthesis) {
    console.error("SpeechSynthesisUtterance not supported");
    return;
  }

  let text = window.event.target.innerText;

  if (!!text) {
    speechSynthesis.cancel();
    let voices = speechSynthesis.getVoices();

    let inputVolume = document.getElementById("audioPlayerVolume");
    let voiceRateElem = document.getElementById("audioPlayerRate");
    let languageInput = document.getElementById("audioPlayerLanguage");
    let isActiveSpell = document
      .getElementById("audioPlayerSpell")
      .getAttribute("active");

    speechInstance.text = !!isActiveSpell ? text.split("").join(" ") : text;
    speechInstance.lang = languageInput.value;
    speechInstance.volume = parseFloat(inputVolume.value);
    speechInstance.rate = parseFloat(voiceRateElem.innerText);

    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === speechInstance.lang) {
        utterThis.voice = voices[i];
      }
    }

    speechSynthesis.speak(speechInstance);

    let textPlaying = document.querySelector(`.hasText[playing="true"]`);

    !!textPlaying && textPlaying.removeAttribute("playing");

    e.target.setAttribute("playing", "true");
  }
}
