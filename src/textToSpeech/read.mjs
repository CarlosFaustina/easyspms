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

// /**
//  * Ler texto
//  * @param {MouseEvent} e
//  * @param {number} textIndex
//  */
// export default function read(e,textIndex) {

// }

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
  console.log(text);
  if (!!text) {
    speechSynthesis.cancel();

    speechInstance.text = text;
    speechInstance.lang = "pt-PT";

    speechSynthesis.speak(speechInstance);

    let textPlaying = document.querySelector(`.hasText[playing="true"]`);

    !!textPlaying && textPlaying.removeAttribute("playing");

    e.target.setAttribute("playing", "true");
  }
}
