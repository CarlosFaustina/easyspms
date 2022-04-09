import { enableSpeechEvents } from "../audioPlayer/index.mjs";
// export default function read(e) {
//   try {
//     e = window.event || e || arguments[0];
//     if (e && e.preventDefault) {
//       e.preventDefault();
//       e.stopPropagation();
//     }
//   } catch (error) {
//     console.log(error);
//   }

//   let text = window.event.target.innerText;
//   console.log(text);
//   if (!window.SpeechSynthesisUtterance || !window.speechSynthesis) return;
//   let msg = new window.SpeechSynthesisUtterance(text);
//   msg.lang = "pt-PT";
//   let voices = window.speechSynthesis.getVoices();

//   let isLngSupported = false;
//   for (let i = 0; i < voices.length; i++) {
//     if (voices[i].lang === msg.lang) {
//       msg.voice = voices[i];
//       isLngSupported = true;
//       break;
//     }
//   }
//   if (!isLngSupported) {
//     console.warn("text to speech language not supported!");

//   }
//   window.speechSynthesis.speak(msg);
// }

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
    
    speechInstance.text = text;
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
