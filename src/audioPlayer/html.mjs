export const audioPlayerHtml = `
<div class="accessibilityPlayerAudioContainer" id="accessibilityAudioPlayer">
    <!-- HEADER PLAYER -->
    <div class="accessibilityPlayerAudioHeader">
        <strong>Leitor de Texto</strong>
        <!--  <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-x"
                viewBox="0 0 16 16">
                <path
                    d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
        </a> -->
    </div>
    <!-- FIM HEADER PLAYER -->
    <!-- CORPO PLAYER -->
    <div class="accessibilityPlayerAudioBody">
        <select style="width: 100%; height: 25px; vertical-align: top; font-size: 14px;">
            <option selected>Português (Portugal)</option>
            <option value="1">Inglês (Americano)</option>
        </select>
        <div style="display: flex; flex-direction: row; align-items: center; align-self: center; margin-top: 10px;">
            <a href="#" style="color: inherit;" id="audioPlayerIncreaseRate">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor"
                    class="bi bi-dash-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                </svg>
            </a>
            <span style="font-size: 30px; margin: 0px 10px 0px 10px;">1x</span>
            <a href="#" style="color: inherit;" id="audioPlayerDecreaseRate">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor"
                    class="bi bi-plus-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path
                        d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg>
            </a>
        </div>
        <small style="align-self: center;">Velocidade de reprodução</small>
    </div>
    <!-- FIM CORPO PLAYER -->
    <!-- RODAPÉ PLAYER -->
    <div class="accessibilityPlayerAudioFooter">
        <div style="display: flex; flex-direction: row; align-items: center;">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                class="bi bi-volume-up-fill" viewBox="0 0 16 16">
                <path
                    d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z" />
                <path
                    d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z" />
                <path
                    d="M8.707 11.182A4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182L8 5.525A3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z" />
            </svg>
            <input type="range" style="width:auto;" min="0" max="1" value="0.5" step="0.1" />
        </div>
        <div style="display: flex; flex-direction: row; align-items: center;">
            <a style="margin-right: 6px; color: inherit;" href="#" id="audioPlayerPrev">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                    class="bi bi-skip-start-fill" viewBox="0 0 16 16">
                    <path
                        d="M4 4a.5.5 0 0 1 1 0v3.248l6.267-3.636c.54-.313 1.232.066 1.232.696v7.384c0 .63-.692 1.01-1.232.697L5 8.753V12a.5.5 0 0 1-1 0V4z" />
                </svg>

            </a>
            <a style="margin-right: 6px; color: inherit;" href="#" id="audioPlayerStartStop">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                    class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                    <path
                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                </svg>
            </a>
            <a style="margin-right: 12px; color: inherit;" href="#" id="audioPlayerNext">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                    class="bi bi-skip-end-fill" viewBox="0 0 16 16">
                    <path
                        d="M12.5 4a.5.5 0 0 0-1 0v3.248L5.233 3.612C4.693 3.3 4 3.678 4 4.308v7.384c0 .63.692 1.01 1.233.697L11.5 8.753V12a.5.5 0 0 0 1 0V4z" />
                </svg>
            </a>
        </div>
        <a href="#" style="color: inherit;" id="audioPlayerRepeat">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z" />
                <path
                    d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
            </svg>
        </a>
    </div>
    <!-- FIM RODARÉ PLAYER -->
</div>
`;
