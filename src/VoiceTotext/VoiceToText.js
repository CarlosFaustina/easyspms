"use strict";
import common from '../utils/common.js';

 let btn_css = `button{width: 50%;
    height: 80%;}
    `;

let divClass= 'VoicetoText';

let css_div = `{
border: 1px solid #000;
}`;

common.injectStyle(btn_css);
common.injectStyle(css_div,{ className:divClass});
var start_timestamp;
if ("webkitSpeechRecognition" in window) {
let speechRecognition = new webkitSpeechRecognition();
let final_transcript = "";
let dialect="";
document.querySelector(".alert").style.display="none";


speechRecognition.continuous = true;
speechRecognition.interimResults = true;
//speechRecognition.lang = document.querySelector("#select_dialect").value;


speechRecognition.onstart = () => {
document.querySelector("#status").style.display = "block";
};
speechRecognition.onerror = (event) => {

  if(event.error =="no-speech"){
    show_info_erro('no_speech');
  }
  if(event.error=="audio-capture"){
    show_info_erro('no_microphone');
  }
  if(event.error=="not-allowed"){
    if (event.timeStamp - start_timestamp < 100) {
      show_info_erro("info_blocked");
    } else {
      show_info_erro("info_denied");
    }
  }
document.querySelector("#status").style.display = "none";
console.log("Speech Recognition Error");
};
speechRecognition.onend = () => {
document.querySelector("#status").style.display = "none";
console.log("Speech Recognition Ended");
};

speechRecognition.onresult = (event) => {
let interim_transcript = "";

for (let i = event.resultIndex; i < event.results.length; ++i) {
if (event.results[i].isFinal) {
  final_transcript += event.results[i][0].transcript;
} else {
  interim_transcript += event.results[i][0].transcript;
}
}
document.querySelector("#final").innerHTML = final_transcript;
document.querySelector("#interim").innerHTML = interim_transcript;
};

document.querySelector("#start").onclick = (event) => {
dialect = document.getElementById('select_dialect');
speechRecognition.lang= dialect.value;
speechRecognition.start();
start_timestamp = event.timeStamp;
};
document.querySelector("#stop").onclick = () => {
speechRecognition.stop();
};
document.querySelector('#limpar').onclick= ()=>{
final.innerHTML ="";
final_transcript="";
speechRecognition.stop();
}
} else {
  show_info_erro("no_browser_support");
}

function show_info_erro(tipo){
 let msg= document.querySelector('.show_info');
 document.querySelector(".alert").style.display="none";
 msg.innerHTML="";
 if(tipo =="no_speech"){
  msg.innerHTML ="Nao foi detectada nenhuma voz, Pfv verifique a  configuaçao do seu <a href='//support.google.com/chrome/bin/answer.py?hl=en&amp;answer=1407892'>microfone</a> " ;
  document.querySelector(".alert").style.display="block";
 }else if(tipo =="no_microphone"){
  
 msg.innerHTML = "O Microfone nao foi encontrado, verifica se o" +
 "<a href=//support.google.com/chrome/bin/answer.py?hl=en&amp;answer=1407892> microfone</a> esta configurado.";
 document.querySelector(".alert").style.display="block";
}else if(tipo=="info_blocked"){
  document.querySelector(".alert").style.display="block";
msg.innerHTML ="permiçao para usar o microfone foi bloqueda";
}else if( tipo == "info_denied"){
  mas.innerText = "Permissao para usar o microfone esta bloqueda. para mudar vai no chrome://settings/contentExceptions#media-stream";
}

}


