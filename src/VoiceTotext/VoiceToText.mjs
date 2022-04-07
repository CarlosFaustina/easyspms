"use strict";
import common from '../utils/common.js';

export default function voiceTotext(self, destroy){
if(destroy){
  document
     .querySelector('._access-menu [data-access-action="voiceTotext"]')
     .classList.remove("active");
   self.initialValues.voiceTotext = false;
   self.sessionState.voiceTotext = false;
   self.onChange(true);
   return;
}
document
    .querySelector('._access-menu [data-access-action="voiceTotext"]')
    .classList.toggle("active");
    self.initialValues.voiceTotext = !self.initialValues.voiceTotext;
    self.sessionState.voiceTotext = self.initialValues.voiceTotext;
    self.onChange(true);
 console.log(self.initialValues.voiceTotext);
  
if(!self.initialValues.voiceTotext){

 var  doc = document.getElementsByClassName("voicetoText");

 for(let i=0; i<doc.length;i++){
    doc[i].remove();
 }

return;  
}else{

 CreateHtml();
 $(function(){
  $('.voicetoText').hide();
 });

 setTimeout( ()=>{
   core()},3000);
 setTimeout(()=>{
  languagues();
 },3000) 
}
function core (){  
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



speechRecognition.continuous = true;
speechRecognition.interimResults = true;
//speechRecognition.lang = document.querySelector("#select_dialect").value;


speechRecognition.onstart = () => {
  if(!self.initialValues.voiceTotext){

  }else{
    document.querySelector("#status").style.display = "block";
  }

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
  console.log(event.results[i][0].transcript);
  if(event.results[i][0].transcript =="ponto"){
    final_transcript +="." 
  }else if(event.results[i][0].transcript=="vírgula"){
    event.results[i][0].transcript+="," 
  }else{
    final_transcript += event.results[i][0].transcript;
    //console.log(event.results[i][0].transcript);
  }
 
  
} else {
  interim_transcript += event.results[i][0].transcript;
}
}
document.querySelector("#final").innerHTML = final_transcript;
document.querySelector("#interim").innerHTML = interim_transcript;
};
if(!self.initialValues.voiceTotext){

}else{
document.getElementById("start").onclick = (event) => {
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
}
} else {
  show_info_erro("no_browser_support");
}
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
  msg.innerText = "Permissao para usar o microfone esta bloqueda. para mudar vai no chrome://settings/contentExceptions#media-stream";
}else if(tipo =="no_browser_support"){
  document.querySelector(".alert").style.display="block";
  msg.innerHTML ="Este Browser nao suporta esta funcionalidade. pvf instale o <a href='//www.google.com/chrome'>Chrome</a>";
}

}




function CreateHtml (){
  $(function () {

    // montagem da camada idioma
    $('<div class="voicetoText"></div>').prependTo('body');
    $('<H2 class="titulo">formulario de texto Para Voz</H2>').appendTo('.voicetoText');
    $('<div class="mt-4" id="div_language"></div>').insertAfter('h2.titulo');
    $('<h2 class="mb-3 idioma">Idioma</h2>').appendTo('#div_language');
    $('<div class="row select-languague"> </div>').insertAfter('h2.idioma');
    $('<div class="col-sm-4 col-select-lang"></div>').appendTo('div.select-languague');
    $('<select class="form-select bg-secondary" id="select_language"></select>').appendTo('div.col-select-lang');
    $('<div class="row select-dialect"></div>').insertAfter('div.select-languague');
    $('<div class="col-sm-4 col-select-dialect"></div>').appendTo('div.select-dialect');
    $('<select class="form-select bg-secondary mt-2" id="select_dialect"></select>').appendTo('div .col-select-dialect');
    // Camada alerta
    $('<div class="row alert-info"></div>').insertAfter('div #div_language');
    $('<div class="col-sm-6 col-alert-info"></div>').appendTo('div .alert-info');
    $('<div class="alert alert-warning alert-dismissible" role="alert">').appendTo('div .col-alert-info');
    $('<span type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></span>').appendTo('div .alert');
    $('<span class="show_info"></span>').appendTo('div .alert');
    // camada transcriçao
    $('<h2 class="mt-4 titulo-transcri">Transcrição</h2>').insertAfter('div .alert-info');
    $('<div class="row row-transcri"></div>').insertAfter('div .titulo-transcri');
    $(' <div class="col-sm-6 col-transcri"> </div>').appendTo('div .row-transcri');
    $('<div class="p-3 sp-transcri" style="border: 1px solid gray; height: 300px; border-radius: 8px;"></div>').appendTo('div .col-transcri');
    $(' <p id="final" ></p><p id="interim"></p>').appendTo('div .sp-transcri');
    $('<div class="row row-btn">').insertAfter('div .row-transcri');
     // camada dos Btns
    $('<div class="col-sm-2 col-start"> </div>').appendTo('div .row-btn');
    $('<button type="button" class="btn btn-success btn-sm" id="start">Iniciar</button>').appendTo('div .col-start');
    $('<div class="col-sm-2 col-stop"> </div>').insertAfter('div .col-start');
    $('<button type="button" class="btn btn-danger" id="stop">Parar</button>').appendTo('div .col-stop');
    $('<div class="col-sm-2 col-limpar"> </div>').insertAfter('div .col-stop');
    $('<button type="button"  class="btn btn-primary" id="limpar">Limpar</button>').appendTo('div .col-limpar');
    $('<p id="status" class="lead mt-3 text-light" style="display: none">A vouvir ...</p>').insertAfter('div .row-btn');
  });
}
function languagues(){
  if(!self.initialValues.voiceTotext){

  }else{

    var langs = [
      ["Afrikaans", ["af-ZA"]],
      ["Bahasa Indonesia", ["id-ID"]],
      ["Bahasa Melayu", ["ms-MY"]],
      ["Català", ["ca-ES"]],
      ["Čeština", ["cs-CZ"]],
      ["Deutsch", ["de-DE"]],
      [
        "English",
        ["en-AU", "Australia"],
        ["en-CA", "Canada"],
        ["en-IN", "India"],
        ["en-NZ", "New Zealand"],
        ["en-ZA", "South Africa"],
        ["en-GB", "United Kingdom"],
        ["en-US", "United States"]
      ],
      [
        "Español",
        ["es-AR", "Argentina"],
        ["es-BO", "Bolivia"],
        ["es-CL", "Chile"],
        ["es-CO", "Colombia"],
        ["es-CR", "Costa Rica"],
        ["es-EC", "Ecuador"],
        ["es-SV", "El Salvador"],
        ["es-ES", "España"],
        ["es-US", "Estados Unidos"],
        ["es-GT", "Guatemala"],
        ["es-HN", "Honduras"],
        ["es-MX", "México"],
        ["es-NI", "Nicaragua"],
        ["es-PA", "Panamá"],
        ["es-PY", "Paraguay"],
        ["es-PE", "Perú"],
        ["es-PR", "Puerto Rico"],
        ["es-DO", "República Dominicana"],
        ["es-UY", "Uruguay"],
        ["es-VE", "Venezuela"]
      ],
      ["Euskara", ["eu-ES"]],
      ["Français", ["fr-FR"]],
      ["Galego", ["gl-ES"]],
      ["Hrvatski", ["hr_HR"]],
      ["IsiZulu", ["zu-ZA"]],
      ["Íslenska", ["is-IS"]],
      ["Italiano", ["it-IT", "Italia"], ["it-CH", "Svizzera"]],
      ["Magyar", ["hu-HU"]],
      ["Nederlands", ["nl-NL"]],
      ["Norsk bokmål", ["nb-NO"]],
      ["Polski", ["pl-PL"]],
      ["Português", ["pt-BR", "Brasil"], ["pt-PT", "Portugal"]],
      ["Română", ["ro-RO"]],
      ["Slovenčina", ["sk-SK"]],
      ["Suomi", ["fi-FI"]],
      ["Svenska", ["sv-SE"]],
      ["Türkçe", ["tr-TR"]],
      ["български", ["bg-BG"]],
      ["Pусский", ["ru-RU"]],
      ["Српски", ["sr-RS"]],
      ["한국어", ["ko-KR"]],
      [
        "中文",
        ["cmn-Hans-CN", "普通话 (中国大陆)"],
        ["cmn-Hans-HK", "普通话 (香港)"],
        ["cmn-Hant-TW", "中文 (台灣)"],
        ["yue-Hant-HK", "粵語 (香港)"]
      ],
      ["日本語", ["ja-JP"]],
      ["Lingua latīna", ["la"]]
    ];
  
    var select_language = document.querySelector("#select_language");
    var  select_dialect = document.querySelector('#select_dialect');
    
    
    for (var i = 0; i < langs.length; i++) {
      select_language.options[i] = new Option(langs[i][0], i);
    }
    select_language.selectedIndex = 6;
    updateCountry();
    select_dialect.selectedIndex = 6;
    //showInfo("info_start");
    function updateCountry() {
      for (var i = select_dialect.options.length - 1; i >= 0; i--) {
        select_dialect.remove(i);
      }
      var list = langs[select_language.selectedIndex];
      for (var i = 1; i < list.length; i++) {
        select_dialect.options.add(new Option(list[i][1], list[i][0]));
      }
      select_dialect.style.visibility = list[1].length == 1 ? "hidden" : "visible";
    }
    document.querySelector("#select_language").addEventListener('change',updateCountry);
  }
    
  
  }

 

}

