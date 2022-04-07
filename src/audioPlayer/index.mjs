import { audioPlayerHtml } from "./html.mjs";

let _audioPlayerTimeout;

let disableBtnStyle = `
  color: lightgrey;
  pointerEvents: none;
`;

let enableBtnStyle = `
  color: inherit;
  pointer-events: auto;
  `;

const _myTimer = () => {
    speechSynthesis.pause();
    speechSynthesis.resume();
    _audioPlayerTimeout = setTimeout(_myTimer, 10000);
};

const _onPauseOrEnd = () => {
    clearTimeout(_audioPlayerTimeout);
    let btnStartStop = document.getElementById("audioPlayerStartStop");
    let btnIncreaseRate = document.getElementById("audioPlayerIncreaseRate");
    let btnDecreaseRate = document.getElementById("audioPlayerDecreaseRate");

    if (!!btnStartStop) {
        btnStartStop.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" id="playAudio" viewBox="0 0 16 16">
        <path
        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
    </svg>
    `;
    }

    btnIncreaseRate.style.cssText = enableBtnStyle;
    btnDecreaseRate.style.cssText = enableBtnStyle;
};

const _onStartOrPlay = () => {
    _audioPlayerTimeout = setTimeout(_myTimer, 10000);
    let btnStartStop = document.getElementById("audioPlayerStartStop");
    let btnIncreaseRate = document.getElementById("audioPlayerIncreaseRate");
    let btnDecreaseRate = document.getElementById("audioPlayerDecreaseRate");
    btnStartStop.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" id="pauseAudio" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5zm3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5z"/>
    </svg>
    `;

    btnIncreaseRate.style.cssText = disableBtnStyle;
    btnDecreaseRate.style.cssText = disableBtnStyle;
};

/**
 *
 * @param {boolean} isShow
 */
export const toogleAudioPlayer = (isShow) => {
    if (isShow) {
        document.body.insertAdjacentHTML("beforeend", audioPlayerHtml);

        let btnStartStop = document.getElementById("audioPlayerStartStop");
        let btnNext = document.getElementById("audioPlayerNext");
        let btnPrev = document.getElementById("audioPlayerPrev");
        let btnRepeat = document.getElementById("audioPlayerRepeat");

        /**
         * Play / Stop
         */
        btnStartStop.addEventListener("click", (event) => {
            event.preventDefault();
            let isPlay = event.target.parentElement.id === "playAudio";
            if (isPlay) {
                speechSynthesis.resume();
                _onStartOrPlay();
            } else {
                speechSynthesis.pause();
                _onPauseOrEnd();
            }
        });

        /**
         * Next Text
         */
        btnNext.addEventListener("click", (event) => {
            event.preventDefault();
            let allTexts = document.querySelectorAll(".hasText");

            for (const [indexText, text] of allTexts.entries()) {
                if (text.hasAttribute("playing") && !!allTexts[indexText + 1]) {
                    allTexts[indexText + 1].click();
                    console.log("proximo");
                    break;
                }
            }
        });

        /**
         * Prev Text
         */
        btnPrev.addEventListener("click", (event) => {
            event.preventDefault();
            let allTexts = document.querySelectorAll(".hasText");

            for (const [indexText, text] of allTexts.entries()) {
                if (text.hasAttribute("playing") && !!allTexts[indexText - 1]) {
                    allTexts[indexText - 1].click();
                    console.log("anterior");
                    break;
                }
            }
        });

        /**
         * Repeat Text
         */

        btnRepeat.addEventListener("click", (event) => {
            event.preventDefault();
            let textPlaying = document.querySelector(`.hasText[playing="true"]`);
            textPlaying.click();
        });
    } else {
        document.getElementById("accessibilityAudioPlayer").remove();
    }
};

/**
 *
 * @param {SpeechSynthesisUtterance} speechInstance
 */
export const enableSpeechEvents = (speechInstance) => {
    speechInstance.onstart = () => {
        clearTimeout(_audioPlayerTimeout);
        _onStartOrPlay();
    };

    speechInstance.onend = () => {
        // let textPlaying = document.querySelector(`.hasText[playing="true"]`);

        // textPlaying.removeAttribute("playing");
        _onPauseOrEnd();
    };

    speechInstance.onerror = (e) => {
        console.log(e);
    };
};
