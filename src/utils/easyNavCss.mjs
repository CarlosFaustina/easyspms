export const easyNavCss = `
       /* ////////////// */

/* BEGIN EASY NAVIGATOR */
#nav_easy::-webkit-scrollbar {
  display: none;
}
#nav_easy {
  font-family: "Roboto", sans-serif;
  font-size: inherit;
  font-weight: 400;
  height: calc(100vh - 40px);
  width: 460px;
  max-width: 460px;
  left: -480px;
  /* left: 0; */
  top: 20px;
  box-shadow: 4px 0 20px -1px rgba(0, 0, 0, 0.2), 0 4px 4px -1px rgba(0, 0, 0, 0.1) !important;
  -ms-overflow-style: none;
  scrollbar-width: none;
  scroll-behavior: smooth;
  background-color: #f6f6f6;
  border-radius: 30px;
  z-index: 9;
  border: 2px rgba(15, 78, 100, 0.2) solid;
}
/*
BEGIN ICONE E BOTÃO EASY
*/
#icone_easy:hover {
  margin-left: 161px;
}
#botao_easy {
  position: fixed;
  width: 143px;
  height: 56px;
  padding: 0px;
  left: -81px;
  margin-left: 0px !important;
  top: 50% !important;
  margin-top: -30px !important;
  z-index: 8;
  text-rendering: geometricPrecision !important;
  filter: drop-shadow(0px 5px 20px rgb(0, 0, 0, 0.2));
}
/*
END ICONE E BOTÃO EASY
*/
/*
BEGIN TOPO FIXO
*/
#botao_fechar_easy:hover {
  box-sizing: border-box;
  border: none;
  width: 32px;
  height: 32px;
  background: url("data:image/svg+xml;utf8,<svg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'><title>Fechar ferramenta Easy</title><g fill='none' fill-rule='evenodd'><g fill='%230F4E64' fill-rule='nonzero'><path d='m16 0c8.848 0 16 7.152 16 16s-7.152 16-16 16-16-7.152-16-16 7.152-16 16-16m5.744 8-5.744 5.744-5.744-5.744-2.256 2.256 5.744 5.744-5.744 5.744 2.256 2.256 5.744-5.744 5.744 5.744 2.256-2.256-5.744-5.744 5.744-5.744-2.256-2.256z'/></g></g></svg>");
  background-repeat: no-repeat;
  background-size: contain;
  background-origin: border-box;
}
.bloco_topo__fixo {
  height: 52px;
  background-color: #f6f6f6;
}
.bloco_topo__fixo select {
  padding-left: 7px;
  color: #000000;
}
.bloco_topo__fixo select:focus {
  outline: none !important;
}
#idiomas {
  width: 100%;
  height: 32px;
  border: 1px #0f4e64 solid;
  border-radius: 20px;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background: transparent;
  background-image: url("data:image/svg+xml;utf8,<svg fill='%230F4E64' height='32' viewBox='0 0 32 32' width='32' xmlns='http://www.w3.org/2000/svg'><path d='M0,0 L26,0 C29.3137085,-6.08718376e-16 32,2.6862915 32,6 L32,26 C32,29.3137085 29.3137085,32 26,32 L0,32 L0,32 L0,0 Z M8,12.8 L16,20.8 L24,12.8 L8,12.8 Z'/></svg>");
  background-repeat: no-repeat;
  background-position-x: 100%;
  background-size: contain;
  background-origin: border-box;
  margin-top: 20px;
  margin-left: 20px;
}
#botao_fechar_easy {
  box-sizing: border-box;
  border: none;
  width: 32px;
  height: 32px;
  background: url("data:image/svg+xml;utf8,<svg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'><title>Fechar ferramenta Easy</title><g fill='none' fill-rule='evenodd'><g fill='%23000' fill-rule='nonzero'><path d='m16 0c8.848 0 16 7.152 16 16s-7.152 16-16 16-16-7.152-16-16 7.152-16 16-16m5.744 8-5.744 5.744-5.744-5.744-2.256 2.256 5.744 5.744-5.744 5.744 2.256 2.256 5.744-5.744 5.744 5.744 2.256-2.256-5.744-5.744 5.744-5.744-2.256-2.256z'/></g></g></svg>");
  background-repeat: no-repeat;
  background-size: contain;
  background-origin: border-box;
  margin-top: 20px;
  margin-right: 22px;
}
/*
END TOPO FIXO
*/
#scroll_wrapper {
  height: calc(100% - 88px);
  margin-top: 16px;
  margin-left: 20px;
  margin-right: 0;
}
.bloco_fundo__fixo {
  height: 20px;
  background-color: #f6f6f6;
  position: relative;
}
/* END EASY NAVIGATOR */
/*
BEGIN CORRIGE TIPO DE LETRA
*/
.easy_inside_btns_big span,
.easy_inside_btns_small span,
.bloco_topo__fixo select,
.titulo_nav,
.sub_titulo_nav {
  -webkit-font-smoothing: antialiased !important;
  text-rendering: optimizeLegibility !important;
  text-shadow: rgba(0, 0, 0, 0.01) 0 0 1px !important;
}
.titulo_nav {
  font-size: 18px;
  line-height: 22px;
  font-weight: 700;
}
.redefinir,
.sub_titulo_nav {
  font-size: 16px;
  height: 20px;
}
/*
END CORRIGE TIPO DE LETRA
*/
/*
BEGIN FIXES
*/
/*
END FIXES
*/
/*
BEGIN GRID BIG DESKTOP
*/
.bloco_intermedio__ajuste_conteudo {
  width: 416px;
}
.bloco_intermedio__ajuste_voz_navegacao,
.bloco_intermedio__ajuste_rato,
.bloco_intermedio__ajuste_cor,
.bloco_intermedio__ajuste_fontes,
.bloco_intermedio__ajuste_cor_personalizada,
.barra_fundo {
  width: 416px;
  margin-bottom: 20px;
}
.barra_fundo {
  margin-bottom: 0;
}

.grid_big_1,
.grid_big_2,
.grid_big_3 {
  position: relative;
  /* width: calc(100% / 3); */
  width: 133px;
  /* width: 421px; */
  height: 110px;
  overflow: hidden;
  /* border: 2px rgba(15, 78, 100, 0.2) solid; */
  z-index: 9;
}
.easy_inside_btns_big {
  position: absolute;
  height: 110px;
  width: 133px;
  background-color: #ffffff;
  border: 2px rgba(15, 78, 100, 0.2) solid;
  border-radius: 20px;
}
.easy_inside_btns_big:nth-child(2) {
  margin-left: 8px;
  margin-right: 8px;
  background-color: red;
}
.easy_inside_btns_big:hover {
  border: 2px rgba(15, 78, 100, 1) solid;
}
/* .grid_big_1:nth-child(1),
.grid_big_1:nth-child(2) {
  border-right: none;
}
.grid_big_2:nth-child(1) {
  border-right: none;
  border-top: none;
}
.grid_big_2:nth-child(4),
.grid_big_2:nth-child(5) {
  border-right: none;
  border-top: none;
}
.grid_big_2:nth-child(6) {
  border-top: none;
}
.grid_big_3:nth-child(-n + 9) {
  border-right: none;
  border-top: none;
} */
#controlo_rato,
#controlo_cor {
  background-color: #ffffff;
  border-radius: 20px;
}
/* .grid_big_3:nth-child(9) {
  border-right: 2px rgba(15, 78, 100, 0.2) solid;
  border-top: none;
} */
.vazio:nth-child(n) {
  background-color: transparent;
  border: none;
}
.vazio:nth-child(2) {
  border-left: 2px rgba(15, 78, 100, 0.2) solid;
}
.grid_big_1_mb {
  position: relative;
  width: calc(100% / 3);
  height: 88px;
  overflow: hidden;
  /* border: 2px rgba(15, 78, 100, 0.2) solid; */
  z-index: 9;
}
/* .grid_big_1_mb:nth-child(1) {
  border-right: none;
}
.grid_big_1_mb:nth-child(3) {
  border-right: none;
  border-top: none;
}
.grid_big_1_mb:nth-child(4) {
  border-top: none;
}
.grid_big_1_mb:nth-child(5) {
  border-right: none;
}
.grid_big_1_mb:nth-child(5),
.grid_big_1_mb:nth-child(6) {
  border-top: none;
}
.grid_big_1_mb:nth-child(7) {
  border-right: none;
  border-top: none;
}
.grid_big_1_mb:nth-child(8) {
  border-top: none;
} */
.easy_inside_btns_big svg {
  height: 32px;
  width: 28px;
}
.easy_inside_btns_small span,
.easy_inside_btns_big span {
  font-weight: 400;
  font-size: 16px;
  line-height: 1;
  height: 28px;
}
/*
END GRID BIG DESKTOP
*/
/*
BEGIN GRID RATO 
*/
.grid_small_ponteiro,
.grid_small_cor {
  position: relative;
  width: calc(100% / 3);
  height: 40px;
  overflow: hidden;
  z-index: 9;
}
/* .grid_small_ponteiro:nth-child(-n + 3),
.grid_small_cor:nth-child(-n + 3) {
  border-top: 2px rgba(15, 78, 100, 0.2) solid;
  border-bottom: 2px rgba(15, 78, 100, 0.2) solid;
  border-left: 2px rgba(15, 78, 100, 0.2) solid;
} */
/* .grid_small_ponteiro:nth-child(3),
.grid_small_cor:nth-child(3) {
  border-right: 2px rgba(15, 78, 100, 0.2) solid;
} */
.easy_inside_btns_small {
  height: 40px;
  border-radius: 20px;
}
.easy_inside_btns_small:hover {
  background-color: #0f4e64;
  color: #ffffff;
}

/*
END GRID RATO
*/
/*
BEGIN COR PERSONALIZADA
*/
.border-6 {
  border-width: 6px !important;
  border-color: #0f4e64 !important;
  border: 6px #0f4e64 solid;
  border-radius: 16px;
}
.color_box {
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 2px rgb(15, 78, 100, 0.2) solid;
}
.color_box:hover {
  border: 6px #0f4e64 solid;
}
.color_box:nth-child(1) {
  background-color: #ffffff;
  /* border: 1px #0f4e64 solid; */
}
.color_box:nth-child(2) {
  background-color: #000000;
}
.color_box:nth-child(3) {
  background-color: #17963e;
}
.color_box:nth-child(4) {
  background-color: #312582;
}
.color_box:nth-child(5) {
  background-color: #e4111c;
}
.color_box:nth-child(7) {
  background-color: #feef16;
}
.color_box:nth-child(8) {
  background-color: #06a1dd;
}
.color_box:nth-child(9) {
  background-color: #e40d7d;
}
/*
BEGIN RANGE
*/
.trazzo {
  margin-top: 0.9em;
  position: absolute;
  box-sizing: border-box;
  border: none;
  width: 32px;
  height: 32px;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 13'><text transform='translate(0 5)' style='font-size:10px;fill:%23000000;'>|</text></svg>");
  background-repeat: no-repeat;
  background-position-x: 100%;
  background-position: center;
  background-size: contain;
  background-origin: border-box;
  left: 188px;
  z-index: -1;
}
.sat_plus {
  width: 13px !important;
}
.sat_less {
  width: 10px !important;
}
.sat_plus,
.sat_less {
  font-size: 20px;
  font-weight: 700;
  margin-top: -1px;
}
[type="range"] {
  margin: 0;
  padding: 0;
  width: 381px;
  height: 2px;
  background: transparent;
  font: 1em/1 arial, sans-serif;
}
[type="range"],
[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
}
[type="range"]::-webkit-slider-runnable-track {
  box-sizing: border-box;
  border: none;
  width: 381px;
  height: 2px;
  background: #ccc;
}
[type="range"]::-moz-range-track {
  box-sizing: border-box;
  border: none;
  width: auto;
  height: 2px;
  background: #ccc;
}
/* SAFARI / CHROME / OPERA / MOZILLA / EDGE CONTROLLER / IOS */
[type="range"]::-webkit-slider-thumb {
  /* margin-top: -0.625em; */
  margin-top: -0.9em;
  box-sizing: border-box;
  border: none;
  width: 32px;
  height: 32px;
  background: url("data:image/svg+xml;utf8,<svg viewBox='0 0 38 38' xmlns='http://www.w3.org/2000/svg'><path d='M19,3A16,16,0,1,1,3,19,16,16,0,0,1,19,3Z' fill='%230f4e64' stroke='%23f6f6f6' stroke-width='6px'/></svg>");
  background-repeat: no-repeat;
  background-position-x: 100%;
  background-size: contain;
  background-origin: border-box;
  z-index: 0;
}
[type="range"]::-ms-track {
  box-sizing: border-box;
  border: none;
  width: 381px;
  height: 2px;
  background: #ccc;
}
/* MOZILLA CONTROLLER */
[type="range"]::-moz-range-thumb {
  box-sizing: border-box;
  border: none;
  width: 32px;
  height: 32px;
  background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='38' height='38' viewBox='0 0 38 38'><circle cx='16' cy='16' r='16' transform='translate(3 3)' fill='%230f4e64' stroke='%23f6f6f6' stroke-miterlimit='10' stroke-width='6'/></svg>");
  background-repeat: no-repeat;
  background-position-x: 100%;
  background-size: contain;
  background-origin: border-box;
  background-color: transparent !important;
}
/* OLD INTERNET EXPLORER CONTROLLER */
[type="range"]::-ms-thumb {
  margin-top: 0;
  box-sizing: border-box;
  border: none;
  width: 32px;
  height: 32px;
  background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='38' height='38' viewBox='0 0 38 38'><circle cx='16' cy='16' r='16' transform='translate(3 3)' fill='%230f4e64' stroke='%23f6f6f6' stroke-miterlimit='10' stroke-width='6'/></svg>");
  background-repeat: no-repeat;
  background-position-x: 100%;
  background-size: contain;
  background-origin: border-box;
  background-color: transparent !important;
}
[type="range"]::-ms-tooltip {
  display: none;
}
/*
END RANGE
*/
/*
END COR PERSONALIZADA
*/
/*
BEGIN AJUSTE CONTEUDO
*/
.espace {
  height: 47px;
  font-size: 16px !important;
}
.inside_border {
  border-bottom: 1px #bebebe solid;
}
.mais,
.mais:hover,
.menos,
.menos:hover {
  background-repeat: no-repeat;
  background-position: center;
  background-origin: border-box;
  background-size: 32px;
}
.mais {
  box-sizing: border-box;
  border: none;
  width: 32px;
  height: 32px;
  background: url("data:image/svg+xml;utf8,<svg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'><title>icon/plus/gray</title><g fill='none' fill-rule='evenodd'><g fill='%23BEBEBE' fill-rule='nonzero'><path d='m16 0c8.848 0 16 7.152 16 16s-7.152 16-16 16-16-7.152-16-16 7.152-16 16-16m9.7185 14.405h-8.1232v-8.1232h-3.1905v8.1232h-8.1232v3.1905h8.1232v8.1232h3.1905v-8.1232h8.1232v-3.1905z'/></g></g></svg>");
  background-repeat: no-repeat;
  background-size: contain;
  background-origin: border-box;
}
.mais:hover {
  box-sizing: border-box;
  border: none;
  width: 32px;
  height: 32px;
  background: url("data:image/svg+xml;utf8,<svg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'><title>mais</title><g fill='none' fill-rule='evenodd'><g fill='%230F4E64' fill-rule='nonzero'><path d='m16 0c8.848 0 16 7.152 16 16s-7.152 16-16 16-16-7.152-16-16 7.152-16 16-16m9.7185 14.405h-8.1232v-8.1232h-3.1905v8.1232h-8.1232v3.1905h8.1232v8.1232h3.1905v-8.1232h8.1232v-3.1905z'/></g></g></svg>");
  background-repeat: no-repeat;
  background-size: contain;
  background-origin: border-box;
}
.menos {
  box-sizing: border-box;
  border: none;
  width: 32px;
  height: 32px;
  background: url("data:image/svg+xml;utf8,<svg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'><title>icon/negative/gray</title><g fill='none' fill-rule='evenodd'><g fill='%23BEBEBE' fill-rule='nonzero'><path d='m16 0c8.848 0 16 7.152 16 16s-7.152 16-16 16-16-7.152-16-16 7.152-16 16-16m9.7185 14.405h-8.1232-3.1905-8.1232v3.1905h8.1232 3.1905 8.1232v-3.1905z'/></g></g></svg>");
  background-repeat: no-repeat;
  background-size: contain;
  background-origin: border-box;
}
.menos:hover {
  box-sizing: border-box;
  border: none;
  width: 32px;
  height: 32px;
  background: url("data:image/svg+xml;utf8,<svg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'><title>icon/negative/blue</title><g fill='none' fill-rule='evenodd'><g fill='%230F4E64' fill-rule='nonzero'><path d='m16 0c8.848 0 16 7.152 16 16s-7.152 16-16 16-16-7.152-16-16 7.152-16 16-16m9.7185 14.405h-8.1232-3.1905-8.1232v3.1905h8.1232 3.1905 8.1232v-3.1905z'/></g></g></svg>");
  background-repeat: no-repeat;
  background-size: contain;
  background-origin: border-box;
}
/*
END AJUSTE CONTEUDO
*/
/*
BEGIN DESATIVA
*/
.desativa_config {
  box-sizing: border-box;
  border: none;
  width: 24px;
  height: 24px;
  background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><title>gray</title><path d='M16,4A12,12,0,1,1,4,16,12,12,0,0,1,16,4m3.42,7.08-1.09,1.09a4.49,4.49,0,1,1-4.67,0l-1.08-1.08a6,6,0,1,0,6.84,0M16.75,9.25h-1.5v7.5h1.5' transform='translate(-4 -4)' fill='%23000'/></svg>");
  background-repeat: no-repeat;
  background-size: contain;
  background-origin: border-box;
}
.desativa_config:hover {
  box-sizing: border-box;
  border: none;
  width: 24px;
  height: 24px;
  background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><title>gray</title><path d='M16,4A12,12,0,1,1,4,16,12,12,0,0,1,16,4m3.42,7.08-1.09,1.09a4.49,4.49,0,1,1-4.67,0l-1.08-1.08a6,6,0,1,0,6.84,0M16.75,9.25h-1.5v7.5h1.5' transform='translate(-4 -4)' fill='%23141414'/></svg>");
  background-repeat: no-repeat;
  background-size: contain;
  background-origin: border-box;
}
.nav_fundo_copy {
  margin-top: 12px;
}
.nav_fundo_copy span {
  font-size: 12px;
  line-height: 1;
  font-weight: 400;
  font-weight: 700;
} /*

END DESATIVA
*/
/* BEGIN ANIMAÇÕES  */
.easy_inside_btns_big,
.easy_inside_btns_small {
  transition: all 0.5s ease-in-out;
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
}
/*.easy_inside_btns_big:hover svg,
.easy_inside_btns_small:hover svg {
  filter: brightness(0) invert(1);
  -webkit-filter: brightness(0) invert(1);
  -moz-filter: brightness(0) invert(1);
  -ms-filter: brightness(0) invert(1);
  -o-filter: brightness(0) invert(1);
}
 .easy_inside_btns_big:hover,
.easy_inside_btns_small:hover {
  background-color: #0f4e64 !important;
  color: #fff;
  transition: all 0.5s ease-in-out;
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
} */
#icone_easy {
  transition: all 0.2s ease-in-out;
  -webkit-transition: all 0.2s ease-in-out;
  -moz-transition: all 0.2s ease-in-out;
  -ms-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
}
#botao_easy {
  transition: all 0.2s ease-in-out;
  -webkit-transition: all 0.2s ease-in-out;
  -moz-transition: all 0.2s ease-in-out;
  -ms-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
}
.info {
  position: relative;
  box-sizing: border-box;
  border: none;
  width: 16px;
  height: 16px;
  background: url("data:image/svg+xml;utf8,<svg version='1.1' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'><title>info</title><g fill-rule='evenodd'><g transform='translate(1 1)' fill='%23BEBEBE' fill-rule='nonzero'><path d='m15-6.6613e-16c-8.2843 0-15 6.7157-15 15 0 3.9782 1.5804 7.7936 4.3934 10.607 2.813 2.813 6.6284 4.3934 10.607 4.3934s7.7936-1.5804 10.607-4.3934 4.3934-6.6284 4.3934-10.607-1.5804-7.7936-4.3934-10.607c-2.813-2.813-6.6284-4.3934-10.607-4.3934z'/></g><path d='m17.5 11.5h-3v-3h3m0 15h-3v-9h3' fill='%23fff'/></g></svg>");
  background-repeat: no-repeat;
  background-size: contain;
  background-origin: border-box;
  margin-left: 8px;
  margin-top: 8px;
  z-index: 1;
  cursor: help;
}
.check_hide {
  position: relative;
  box-sizing: border-box;
  border: none;
  width: 0px;
  height: 0px;
  background: none;
  background-repeat: no-repeat;
  background-size: contain;
  background-origin: border-box;
  margin-top: 0px;
  margin-right: 0px;
  z-index: 1;
}
.check_show {
  position: relative;
  box-sizing: border-box;
  border: none;
  width: 16px;
  height: 16px;
  background: url("data:image/svg+xml;utf8,<svg version='1.1' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'><title>icon/check/green</title><g fill='none' fill-rule='evenodd'><g fill-rule='nonzero'><path d='m16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16' fill='%23008542'/><polygon points='12.8 24 4.8 16 7.056 13.744 12.8 19.472 24.944 7.328 27.2 9.6' fill='%23fff'/></g></g></svg>");
  background-repeat: no-repeat;
  background-size: contain;
  background-origin: border-box;
  margin-top: 8px;
  margin-right: 8px;
  z-index: 1;
}
#check_fora {
  display: none;
  position: relative;
  box-sizing: border-box;
  border: none;
  width: 16px;
  height: 16px;
  background: url("data:image/svg+xml;utf8,<svg version='1.1' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'><title>icon/check/green</title><g fill='none' fill-rule='evenodd'><g fill-rule='nonzero'><path d='m16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16' fill='%23008542'/><polygon points='12.8 24 4.8 16 7.056 13.744 12.8 19.472 24.944 7.328 27.2 9.6' fill='%23fff'/></g></g></svg>");
  background-repeat: no-repeat;
  background-size: contain;
  background-origin: border-box;
  margin-top: 24px;
  margin-right: -122px;
  z-index: 1;
}
/* END ANIMAÇÕES  */
/* BEGIN DETAILS */
.redefinir,
.redefinir_svg {
  height: 24px;
}
#idiomas,
#botao_fechar_easy,
#botao_easy,
.easy_inside_btns_big:hover,
.easy_inside_btns_small:hover,
.barra_fundo img,
.nav_intermedio-ajuste_de_fontes img,
.mais,
.menos,
.color_box,
.desativa_config,
.redefinir_svg,
.sat_plus,
.sat_less,
.trazzo,
[type="range"] {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;
}
.forbidden {
  -webkit-user-select: not-allowed;
  -moz-user-select: not-allowed;
  -ms-user-select: not-allowed;
  user-select: not-allowed;
  cursor: not-allowed;
  filter: grayscale(100%) !important;
  -webkit-filter: grayscale(100%) !important;
  -moz-filter: grayscale(100%) !important;
  -ms-filter: grayscale(100%) !important;
  -o-filter: grayscale(100%) !important;
}
.easy_inside_btns_big svg,
.easy_inside_btns_small svg,
#botao_fechar_easy svg,
#idiomas select,
.nav_fundo-copy img,
.menos img,
.mais img,
.menos:hover img,
.mais:hover img {
  text-rendering: geometricPrecision !important;
}
/* END DETAILS */
/*
AJUSTE TOOLTIPS
*/
.tooltip {
  min-width: 16px;
  min-height: 16px;
  z-index: 99;
}
.tooltip > .tooltip-inner {
  background-color: rgba(255, 255, 255, 1);
  background: rgba(255, 255, 255, 1);
  opacity: 1;
  color: #000000;
  width: 276px;
  height: auto;
  text-align: center;
  padding: 10px;
  border: 2px rgba(15, 78, 100, 1) solid;
}
/*
AJUSTE TOOLTIPS
*/
/*
END DENTRO DO EASY
*/
/*
BEGIN SCROLL 
*/
/* 
------------------------------------------------------------------------------------------------------------------------
1. BASIC STYLE  
------------------------------------------------------------------------------------------------------------------------
*/
.mCustomScrollbar {
  -ms-touch-action: pinch-zoom;
  touch-action: pinch-zoom; /* direct pointer events to js */
}
.mCustomScrollbar.mCS_no_scrollbar,
.mCustomScrollbar.mCS_touch_action {
  -ms-touch-action: auto;
  touch-action: auto;
}
.mCustomScrollBox {
  /* contains plugin's markup */
  position: relative;
  overflow: hidden;
  height: 100%;
  max-width: 100%;
  outline: none;
  direction: ltr;
}
.mCSB_container {
  /* contains the original content */
  overflow: hidden;
  width: auto;
  height: auto;
}
/* 
------------------------------------------------------------------------------------------------------------------------
2. VERTICAL SCROLLBAR 
y-axis
------------------------------------------------------------------------------------------------------------------------
*/
.mCSB_inside > .mCSB_container {
  /* margin-right: 30px; */
  margin-right: 0;
}
.mCSB_container.mCS_no_scrollbar_y.mCS_y_hidden {
  margin-right: 0;
} /* non-visible scrollbar */
.mCS-dir-rtl > .mCSB_inside > .mCSB_container {
  /* RTL direction/left-side scrollbar */
  margin-right: 0;
  margin-left: 30px;
}
.mCS-dir-rtl > .mCSB_inside > .mCSB_container.mCS_no_scrollbar_y.mCS_y_hidden {
  margin-left: 0;
} /* RTL direction/left-side scrollbar */
.mCSB_scrollTools {
  /* contains scrollbar markup (draggable element, dragger rail, buttons etc.) */
  position: absolute;
  /* width: 16px; */
  width: 4px;
  height: auto;
  left: auto;
  top: 0;
  right: 0;
  bottom: 0;
}
.mCSB_outside + .mCSB_scrollTools {
  right: -26px;
} /* scrollbar position: outside */
.mCS-dir-rtl > .mCSB_inside > .mCSB_scrollTools,
.mCS-dir-rtl > .mCSB_outside + .mCSB_scrollTools {
  /* RTL direction/left-side scrollbar */
  right: auto;
  left: 0;
}
.mCS-dir-rtl > .mCSB_outside + .mCSB_scrollTools {
  left: -26px;
} /* RTL direction/left-side scrollbar (scrollbar position: outside) */
.mCSB_scrollTools .mCSB_draggerContainer {
  /* contains the draggable element and dragger rail markup */
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: auto;
}
.mCSB_scrollTools a + .mCSB_draggerContainer {
  margin: 20px 0;
}
.mCSB_scrollTools .mCSB_draggerRail {
  width: 2px;
  height: 100%;
  margin: 0 auto;
  -webkit-border-radius: 16px;
  -moz-border-radius: 16px;
  border-radius: 16px;
}
.mCSB_scrollTools .mCSB_dragger {
  /* the draggable element */
  cursor: pointer;
  width: 100%;
  height: 30px; /* minimum dragger height */
  z-index: 1;
}
.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar {
  /* the dragger element */
  position: relative;
  width: 4px;
  height: 100%;
  margin: 0 auto;
  -webkit-border-radius: 16px;
  -moz-border-radius: 16px;
  border-radius: 16px;
  text-align: center;
}
.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_dragger.mCSB_dragger_onDrag_expanded .mCSB_dragger_bar,
.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_draggerContainer:hover .mCSB_dragger .mCSB_dragger_bar {
  width: 12px; /* auto-expanded scrollbar */
}
.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_dragger.mCSB_dragger_onDrag_expanded + .mCSB_draggerRail,
.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_draggerContainer:hover .mCSB_draggerRail {
  width: 8px; /* auto-expanded scrollbar */
}
.mCSB_scrollTools .mCSB_buttonUp,
.mCSB_scrollTools .mCSB_buttonDown {
  display: block;
  position: absolute;
  height: 20px;
  width: 100%;
  overflow: hidden;
  margin: 0 auto;
  cursor: pointer;
}
.mCSB_scrollTools .mCSB_buttonDown {
  bottom: 0;
}
/* 
------------------------------------------------------------------------------------------------------------------------
3. HORIZONTAL SCROLLBAR 
x-axis
------------------------------------------------------------------------------------------------------------------------
*/
.mCSB_horizontal.mCSB_inside > .mCSB_container {
  margin-right: 0;
  margin-bottom: 30px;
}
.mCSB_horizontal.mCSB_outside > .mCSB_container {
  min-height: 100%;
}
.mCSB_horizontal > .mCSB_container.mCS_no_scrollbar_x.mCS_x_hidden {
  margin-bottom: 0;
} /* non-visible scrollbar */
.mCSB_scrollTools.mCSB_scrollTools_horizontal {
  width: auto;
  height: 16px;
  top: auto;
  right: 0;
  bottom: 0;
  left: 0;
}
.mCustomScrollBox + .mCSB_scrollTools.mCSB_scrollTools_horizontal,
.mCustomScrollBox + .mCSB_scrollTools + .mCSB_scrollTools.mCSB_scrollTools_horizontal {
  bottom: -26px;
} /* scrollbar position: outside */
.mCSB_scrollTools.mCSB_scrollTools_horizontal a + .mCSB_draggerContainer {
  margin: 0 20px;
}
.mCSB_scrollTools.mCSB_scrollTools_horizontal .mCSB_draggerRail {
  width: 100%;
  height: 2px;
  margin: 7px 0;
}
.mCSB_scrollTools.mCSB_scrollTools_horizontal .mCSB_dragger {
  width: 30px; /* minimum dragger width */
  height: 100%;
  left: 0;
}
.mCSB_scrollTools.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar {
  width: 100%;
  height: 4px;
  margin: 6px auto;
}
.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_dragger.mCSB_dragger_onDrag_expanded .mCSB_dragger_bar,
.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_draggerContainer:hover .mCSB_dragger .mCSB_dragger_bar {
  height: 12px; /* auto-expanded scrollbar */
  margin: 2px auto;
}
.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_dragger.mCSB_dragger_onDrag_expanded + .mCSB_draggerRail,
.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_draggerContainer:hover .mCSB_draggerRail {
  height: 8px; /* auto-expanded scrollbar */
  margin: 4px 0;
}
.mCSB_scrollTools.mCSB_scrollTools_horizontal .mCSB_buttonLeft,
.mCSB_scrollTools.mCSB_scrollTools_horizontal .mCSB_buttonRight {
  display: block;
  position: absolute;
  width: 20px;
  height: 100%;
  overflow: hidden;
  margin: 0 auto;
  cursor: pointer;
}
.mCSB_scrollTools.mCSB_scrollTools_horizontal .mCSB_buttonLeft {
  left: 0;
}
.mCSB_scrollTools.mCSB_scrollTools_horizontal .mCSB_buttonRight {
  right: 0;
}
/* 
------------------------------------------------------------------------------------------------------------------------
4. VERTICAL AND HORIZONTAL SCROLLBARS 
yx-axis 
------------------------------------------------------------------------------------------------------------------------
*/
.mCSB_container_wrapper {
  position: absolute;
  height: auto;
  width: auto;
  overflow: hidden;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin-right: 30px;
  margin-bottom: 30px;
}
.mCSB_container_wrapper > .mCSB_container {
  padding-right: 30px;
  padding-bottom: 30px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.mCSB_vertical_horizontal > .mCSB_scrollTools.mCSB_scrollTools_vertical {
  bottom: 20px;
}
.mCSB_vertical_horizontal > .mCSB_scrollTools.mCSB_scrollTools_horizontal {
  right: 20px;
}
/* non-visible horizontal scrollbar */
.mCSB_container_wrapper.mCS_no_scrollbar_x.mCS_x_hidden + .mCSB_scrollTools.mCSB_scrollTools_vertical {
  bottom: 0;
}
/* non-visible vertical scrollbar/RTL direction/left-side scrollbar */
.mCSB_container_wrapper.mCS_no_scrollbar_y.mCS_y_hidden + .mCSB_scrollTools ~ .mCSB_scrollTools.mCSB_scrollTools_horizontal,
.mCS-dir-rtl > .mCustomScrollBox.mCSB_vertical_horizontal.mCSB_inside > .mCSB_scrollTools.mCSB_scrollTools_horizontal {
  right: 0;
}
/* RTL direction/left-side scrollbar */
.mCS-dir-rtl > .mCustomScrollBox.mCSB_vertical_horizontal.mCSB_inside > .mCSB_scrollTools.mCSB_scrollTools_horizontal {
  left: 20px;
}
/* non-visible scrollbar/RTL direction/left-side scrollbar */
.mCS-dir-rtl > .mCustomScrollBox.mCSB_vertical_horizontal.mCSB_inside > .mCSB_container_wrapper.mCS_no_scrollbar_y.mCS_y_hidden + .mCSB_scrollTools ~ .mCSB_scrollTools.mCSB_scrollTools_horizontal {
  left: 0;
}
.mCS-dir-rtl > .mCSB_inside > .mCSB_container_wrapper {
  /* RTL direction/left-side scrollbar */
  margin-right: 0;
  margin-left: 30px;
}
.mCSB_container_wrapper.mCS_no_scrollbar_y.mCS_y_hidden > .mCSB_container {
  padding-right: 0;
}
.mCSB_container_wrapper.mCS_no_scrollbar_x.mCS_x_hidden > .mCSB_container {
  padding-bottom: 0;
}
.mCustomScrollBox.mCSB_vertical_horizontal.mCSB_inside > .mCSB_container_wrapper.mCS_no_scrollbar_y.mCS_y_hidden {
  margin-right: 0; /* non-visible scrollbar */
  margin-left: 0;
}
/* non-visible horizontal scrollbar */
.mCustomScrollBox.mCSB_vertical_horizontal.mCSB_inside > .mCSB_container_wrapper.mCS_no_scrollbar_x.mCS_x_hidden {
  margin-bottom: 0;
}
/* 
------------------------------------------------------------------------------------------------------------------------
5. TRANSITIONS  
------------------------------------------------------------------------------------------------------------------------
*/
.mCSB_scrollTools,
.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar,
.mCSB_scrollTools .mCSB_buttonUp,
.mCSB_scrollTools .mCSB_buttonDown,
.mCSB_scrollTools .mCSB_buttonLeft,
.mCSB_scrollTools .mCSB_buttonRight {
  -webkit-transition: opacity 0.2s ease-in-out, background-color 0.2s ease-in-out;
  -moz-transition: opacity 0.2s ease-in-out, background-color 0.2s ease-in-out;
  -o-transition: opacity 0.2s ease-in-out, background-color 0.2s ease-in-out;
  transition: opacity 0.2s ease-in-out, background-color 0.2s ease-in-out;
}
.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_dragger_bar, /* auto-expanded scrollbar */ .mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_draggerRail, .mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_dragger_bar, .mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_draggerRail {
  -webkit-transition: width 0.2s ease-out 0.2s, height 0.2s ease-out 0.2s, margin-left 0.2s ease-out 0.2s, margin-right 0.2s ease-out 0.2s, margin-top 0.2s ease-out 0.2s, margin-bottom 0.2s ease-out 0.2s, opacity 0.2s ease-in-out, background-color 0.2s ease-in-out;
  -moz-transition: width 0.2s ease-out 0.2s, height 0.2s ease-out 0.2s, margin-left 0.2s ease-out 0.2s, margin-right 0.2s ease-out 0.2s, margin-top 0.2s ease-out 0.2s, margin-bottom 0.2s ease-out 0.2s, opacity 0.2s ease-in-out, background-color 0.2s ease-in-out;
  -o-transition: width 0.2s ease-out 0.2s, height 0.2s ease-out 0.2s, margin-left 0.2s ease-out 0.2s, margin-right 0.2s ease-out 0.2s, margin-top 0.2s ease-out 0.2s, margin-bottom 0.2s ease-out 0.2s, opacity 0.2s ease-in-out, background-color 0.2s ease-in-out;
  transition: width 0.2s ease-out 0.2s, height 0.2s ease-out 0.2s, margin-left 0.2s ease-out 0.2s, margin-right 0.2s ease-out 0.2s, margin-top 0.2s ease-out 0.2s, margin-bottom 0.2s ease-out 0.2s, opacity 0.2s ease-in-out, background-color 0.2s ease-in-out;
}
/* 
------------------------------------------------------------------------------------------------------------------------
6. SCROLLBAR COLORS, OPACITY AND BACKGROUNDS  
------------------------------------------------------------------------------------------------------------------------
*/
/* 
	----------------------------------------
	6.1 THEMES 
	----------------------------------------
	*/
/* default theme ("light") */
.mCSB_scrollTools {
  opacity: 0.75;
  filter: "alpha(opacity=75)";
  -ms-filter: "alpha(opacity=75)";
}
.mCS-autoHide > .mCustomScrollBox > .mCSB_scrollTools,
.mCS-autoHide > .mCustomScrollBox ~ .mCSB_scrollTools {
  opacity: 0;
  filter: "alpha(opacity=0)";
  -ms-filter: "alpha(opacity=0)";
}
.mCustomScrollbar > .mCustomScrollBox > .mCSB_scrollTools.mCSB_scrollTools_onDrag,
.mCustomScrollbar > .mCustomScrollBox ~ .mCSB_scrollTools.mCSB_scrollTools_onDrag,
.mCustomScrollBox:hover > .mCSB_scrollTools,
.mCustomScrollBox:hover ~ .mCSB_scrollTools,
.mCS-autoHide:hover > .mCustomScrollBox > .mCSB_scrollTools,
.mCS-autoHide:hover > .mCustomScrollBox ~ .mCSB_scrollTools {
  opacity: 1;
  filter: "alpha(opacity=100)";
  -ms-filter: "alpha(opacity=100)";
}
.mCSB_scrollTools .mCSB_draggerRail {
  background-color: #000;
  background-color: rgba(0, 0, 0, 0.4);
  filter: "alpha(opacity=40)";
  -ms-filter: "alpha(opacity=40)";
}
.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar {
  background-color: #fff;
  background-color: rgba(255, 255, 255, 0.75);
  filter: "alpha(opacity=75)";
  -ms-filter: "alpha(opacity=75)";
}
.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar {
  background-color: #fff;
  background-color: rgba(255, 255, 255, 0.85);
  filter: "alpha(opacity=85)";
  -ms-filter: "alpha(opacity=85)";
}
.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar,
.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar {
  background-color: #fff;
  background-color: rgba(255, 255, 255, 0.9);
  filter: "alpha(opacity=90)";
  -ms-filter: "alpha(opacity=90)";
}
.mCSB_scrollTools .mCSB_buttonUp,
.mCSB_scrollTools .mCSB_buttonDown,
.mCSB_scrollTools .mCSB_buttonLeft,
.mCSB_scrollTools .mCSB_buttonRight {
  background-image: url(mCSB_buttons.png); /* css sprites */
  background-repeat: no-repeat;
  opacity: 0.4;
  filter: "alpha(opacity=40)";
  -ms-filter: "alpha(opacity=40)";
}
.mCSB_scrollTools .mCSB_buttonUp {
  background-position: 0 0;
  /* 
		sprites locations 
		light: 0 0, -16px 0, -32px 0, -48px 0, 0 -72px, -16px -72px, -32px -72px
		dark: -80px 0, -96px 0, -112px 0, -128px 0, -80px -72px, -96px -72px, -112px -72px
		*/
}
.mCSB_scrollTools .mCSB_buttonDown {
  background-position: 0 -20px;
  /* 
		sprites locations
		light: 0 -20px, -16px -20px, -32px -20px, -48px -20px, 0 -92px, -16px -92px, -32px -92px
		dark: -80px -20px, -96px -20px, -112px -20px, -128px -20px, -80px -92px, -96px -92px, -112 -92px
		*/
}
.mCSB_scrollTools .mCSB_buttonLeft {
  background-position: 0 -40px;
  /* 
		sprites locations 
		light: 0 -40px, -20px -40px, -40px -40px, -60px -40px, 0 -112px, -20px -112px, -40px -112px
		dark: -80px -40px, -100px -40px, -120px -40px, -140px -40px, -80px -112px, -100px -112px, -120px -112px
		*/
}
.mCSB_scrollTools .mCSB_buttonRight {
  background-position: 0 -56px;
  /* 
		sprites locations 
		light: 0 -56px, -20px -56px, -40px -56px, -60px -56px, 0 -128px, -20px -128px, -40px -128px
		dark: -80px -56px, -100px -56px, -120px -56px, -140px -56px, -80px -128px, -100px -128px, -120px -128px
		*/
}
.mCSB_scrollTools .mCSB_buttonUp:hover,
.mCSB_scrollTools .mCSB_buttonDown:hover,
.mCSB_scrollTools .mCSB_buttonLeft:hover,
.mCSB_scrollTools .mCSB_buttonRight:hover {
  opacity: 0.75;
  filter: "alpha(opacity=75)";
  -ms-filter: "alpha(opacity=75)";
}
.mCSB_scrollTools .mCSB_buttonUp:active,
.mCSB_scrollTools .mCSB_buttonDown:active,
.mCSB_scrollTools .mCSB_buttonLeft:active,
.mCSB_scrollTools .mCSB_buttonRight:active {
  opacity: 0.9;
  filter: "alpha(opacity=90)";
  -ms-filter: "alpha(opacity=90)";
}
/* theme: "dark" */
.mCS-dark.mCSB_scrollTools .mCSB_draggerRail {
  background-color: #000;
  background-color: rgba(0, 0, 0, 0.15);
}
.mCS-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar {
  background-color: #000;
  background-color: rgba(0, 0, 0, 0.75);
}
.mCS-dark.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar {
  background-color: rgba(0, 0, 0, 0.85);
}
.mCS-dark.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar,
.mCS-dark.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar {
  background-color: rgba(0, 0, 0, 0.9);
}
.mCS-dark.mCSB_scrollTools .mCSB_buttonUp {
  background-position: -80px 0;
}
.mCS-dark.mCSB_scrollTools .mCSB_buttonDown {
  background-position: -80px -20px;
}
.mCS-dark.mCSB_scrollTools .mCSB_buttonLeft {
  background-position: -80px -40px;
}
.mCS-dark.mCSB_scrollTools .mCSB_buttonRight {
  background-position: -80px -56px;
}
/* ---------------------------------------- */
/* theme: "light-2", "dark-2" */
.mCS-light-2.mCSB_scrollTools .mCSB_draggerRail,
.mCS-dark-2.mCSB_scrollTools .mCSB_draggerRail {
  width: 4px;
  background-color: #fff;
  background-color: rgba(255, 255, 255, 0.1);
  -webkit-border-radius: 1px;
  -moz-border-radius: 1px;
  border-radius: 1px;
}
.mCS-light-2.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar,
.mCS-dark-2.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar {
  width: 4px;
  background-color: #fff;
  background-color: rgba(255, 255, 255, 0.75);
  -webkit-border-radius: 1px;
  -moz-border-radius: 1px;
  border-radius: 1px;
}
.mCS-light-2.mCSB_scrollTools_horizontal .mCSB_draggerRail,
.mCS-dark-2.mCSB_scrollTools_horizontal .mCSB_draggerRail,
.mCS-light-2.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar,
.mCS-dark-2.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar {
  width: 100%;
  height: 4px;
  margin: 6px auto;
}
.mCS-light-2.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar {
  background-color: #fff;
  background-color: rgba(255, 255, 255, 0.85);
}
.mCS-light-2.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar,
.mCS-light-2.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar {
  background-color: #fff;
  background-color: rgba(255, 255, 255, 0.9);
}
.mCS-light-2.mCSB_scrollTools .mCSB_buttonUp {
  background-position: -32px 0;
}
.mCS-light-2.mCSB_scrollTools .mCSB_buttonDown {
  background-position: -32px -20px;
}
.mCS-light-2.mCSB_scrollTools .mCSB_buttonLeft {
  background-position: -40px -40px;
}
.mCS-light-2.mCSB_scrollTools .mCSB_buttonRight {
  background-position: -40px -56px;
}
/* theme: "dark-2" */
.mCS-dark-2.mCSB_scrollTools .mCSB_draggerRail {
  background-color: #000;
  background-color: rgba(0, 0, 0, 0.1);
  -webkit-border-radius: 1px;
  -moz-border-radius: 1px;
  border-radius: 1px;
}
.mCS-dark-2.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar {
  background-color: #000;
  background-color: rgba(0, 0, 0, 0.75);
  -webkit-border-radius: 1px;
  -moz-border-radius: 1px;
  border-radius: 1px;
}
.mCS-dark-2.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar {
  background-color: #000;
  background-color: rgba(0, 0, 0, 0.85);
}
.mCS-dark-2.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar,
.mCS-dark-2.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar {
  background-color: #000;
  background-color: rgba(0, 0, 0, 0.9);
}
.mCS-dark-2.mCSB_scrollTools .mCSB_buttonUp {
  background-position: -112px 0;
}
.mCS-dark-2.mCSB_scrollTools .mCSB_buttonDown {
  background-position: -112px -20px;
}
.mCS-dark-2.mCSB_scrollTools .mCSB_buttonLeft {
  background-position: -120px -40px;
}
.mCS-dark-2.mCSB_scrollTools .mCSB_buttonRight {
  background-position: -120px -56px;
}
/* ---------------------------------------- */
/* theme: "light-thick", "dark-thick" */
.mCS-light-thick.mCSB_scrollTools .mCSB_draggerRail,
.mCS-dark-thick.mCSB_scrollTools .mCSB_draggerRail {
  width: 4px;
  background-color: #fff;
  background-color: rgba(255, 255, 255, 0.1);
  -webkit-border-radius: 2px;
  -moz-border-radius: 2px;
  border-radius: 2px;
}
.mCS-light-thick.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar,
.mCS-dark-thick.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar {
  width: 6px;
  background-color: #fff;
  background-color: rgba(255, 255, 255, 0.75);
  -webkit-border-radius: 2px;
  -moz-border-radius: 2px;
  border-radius: 2px;
}
.mCS-light-thick.mCSB_scrollTools_horizontal .mCSB_draggerRail,
.mCS-dark-thick.mCSB_scrollTools_horizontal .mCSB_draggerRail {
  width: 100%;
  height: 4px;
  margin: 6px 0;
}
.mCS-light-thick.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar,
.mCS-dark-thick.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar {
  width: 100%;
  height: 6px;
  margin: 5px auto;
}
.mCS-light-thick.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar {
  background-color: #fff;
  background-color: rgba(255, 255, 255, 0.85);
}
.mCS-light-thick.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar,
.mCS-light-thick.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar {
  background-color: #fff;
  background-color: rgba(255, 255, 255, 0.9);
}
.mCS-light-thick.mCSB_scrollTools .mCSB_buttonUp {
  background-position: -16px 0;
}
.mCS-light-thick.mCSB_scrollTools .mCSB_buttonDown {
  background-position: -16px -20px;
}
.mCS-light-thick.mCSB_scrollTools .mCSB_buttonLeft {
  background-position: -20px -40px;
}
.mCS-light-thick.mCSB_scrollTools .mCSB_buttonRight {
  background-position: -20px -56px;
}
/* theme: "dark-thick" */
.mCS-dark-thick.mCSB_scrollTools .mCSB_draggerRail {
  background-color: #000;
  background-color: rgba(0, 0, 0, 0.1);
  -webkit-border-radius: 2px;
  -moz-border-radius: 2px;
  border-radius: 2px;
}
.mCS-dark-thick.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar {
  background-color: #000;
  background-color: rgba(0, 0, 0, 0.75);
  -webkit-border-radius: 2px;
  -moz-border-radius: 2px;
  border-radius: 2px;
}
.mCS-dark-thick.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar {
  background-color: #000;
  background-color: rgba(0, 0, 0, 0.85);
}
.mCS-dark-thick.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar,
.mCS-dark-thick.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar {
  background-color: #000;
  background-color: rgba(0, 0, 0, 0.9);
}
.mCS-dark-thick.mCSB_scrollTools .mCSB_buttonUp {
  background-position: -96px 0;
}
.mCS-dark-thick.mCSB_scrollTools .mCSB_buttonDown {
  background-position: -96px -20px;
}
.mCS-dark-thick.mCSB_scrollTools .mCSB_buttonLeft {
  background-position: -100px -40px;
}
.mCS-dark-thick.mCSB_scrollTools .mCSB_buttonRight {
  background-position: -100px -56px;
}
/* ---------------------------------------- */
/* theme: "light-thin", "dark-thin" */
.mCS-light-thin.mCSB_scrollTools .mCSB_draggerRail {
  background-color: #fff;
  background-color: rgba(255, 255, 255, 0.1);
}
.mCS-light-thin.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar,
.mCS-dark-thin.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar {
  width: 2px;
}
.mCS-light-thin.mCSB_scrollTools_horizontal .mCSB_draggerRail,
.mCS-dark-thin.mCSB_scrollTools_horizontal .mCSB_draggerRail {
  width: 100%;
}
.mCS-light-thin.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar,
.mCS-dark-thin.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar {
  width: 100%;
  height: 2px;
  margin: 7px auto;
}
/* theme "dark-thin" */
.mCS-dark-thin.mCSB_scrollTools .mCSB_draggerRail {
  background-color: #000;
  background-color: rgba(0, 0, 0, 0.15);
}
.mCS-dark-thin.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar {
  background-color: #000;
  background-color: rgba(0, 0, 0, 0.75);
}
.mCS-dark-thin.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar {
  background-color: #000;
  background-color: rgba(0, 0, 0, 0.85);
}
.mCS-dark-thin.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar,
.mCS-dark-thin.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar {
  background-color: #000;
  background-color: rgba(0, 0, 0, 0.9);
}
.mCS-dark-thin.mCSB_scrollTools .mCSB_buttonUp {
  background-position: -80px 0;
}
.mCS-dark-thin.mCSB_scrollTools .mCSB_buttonDown {
  background-position: -80px -20px;
}
.mCS-dark-thin.mCSB_scrollTools .mCSB_buttonLeft {
  background-position: -80px -40px;
}
.mCS-dark-thin.mCSB_scrollTools .mCSB_buttonRight {
  background-position: -80px -56px;
}
/* ---------------------------------------- */
/* theme "rounded", "rounded-dark", "rounded-dots", "rounded-dots-dark" */
.mCS-rounded.mCSB_scrollTools .mCSB_draggerRail {
  background-color: #fff;
  background-color: rgba(255, 255, 255, 0.15);
}
.mCS-rounded.mCSB_scrollTools .mCSB_dragger,
.mCS-rounded-dark.mCSB_scrollTools .mCSB_dragger,
.mCS-rounded-dots.mCSB_scrollTools .mCSB_dragger,
.mCS-rounded-dots-dark.mCSB_scrollTools .mCSB_dragger {
  height: 14px;
}
.mCS-rounded.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar,
.mCS-rounded-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar,
.mCS-rounded-dots.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar,
.mCS-rounded-dots-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar {
  width: 14px;
  margin: 0 1px;
}
.mCS-rounded.mCSB_scrollTools_horizontal .mCSB_dragger,
.mCS-rounded-dark.mCSB_scrollTools_horizontal .mCSB_dragger,
.mCS-rounded-dots.mCSB_scrollTools_horizontal .mCSB_dragger,
.mCS-rounded-dots-dark.mCSB_scrollTools_horizontal .mCSB_dragger {
  width: 14px;
}
.mCS-rounded.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar,
.mCS-rounded-dark.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar,
.mCS-rounded-dots.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar,
.mCS-rounded-dots-dark.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar {
  height: 14px;
  margin: 1px 0;
}
.mCS-rounded.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_dragger.mCSB_dragger_onDrag_expanded .mCSB_dragger_bar,
.mCS-rounded.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_draggerContainer:hover .mCSB_dragger .mCSB_dragger_bar,
.mCS-rounded-dark.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_dragger.mCSB_dragger_onDrag_expanded .mCSB_dragger_bar,
.mCS-rounded-dark.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_draggerContainer:hover .mCSB_dragger .mCSB_dragger_bar {
  width: 16px; /* auto-expanded scrollbar */
  height: 16px;
  margin: -1px 0;
}
.mCS-rounded.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_dragger.mCSB_dragger_onDrag_expanded + .mCSB_draggerRail,
.mCS-rounded.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_draggerContainer:hover .mCSB_draggerRail,
.mCS-rounded-dark.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_dragger.mCSB_dragger_onDrag_expanded + .mCSB_draggerRail,
.mCS-rounded-dark.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_draggerContainer:hover .mCSB_draggerRail {
  width: 4px; /* auto-expanded scrollbar */
}
.mCS-rounded.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_dragger.mCSB_dragger_onDrag_expanded .mCSB_dragger_bar,
.mCS-rounded.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_draggerContainer:hover .mCSB_dragger .mCSB_dragger_bar,
.mCS-rounded-dark.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_dragger.mCSB_dragger_onDrag_expanded .mCSB_dragger_bar,
.mCS-rounded-dark.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_draggerContainer:hover .mCSB_dragger .mCSB_dragger_bar {
  height: 16px; /* auto-expanded scrollbar */
  width: 16px;
  margin: 0 -1px;
}
.mCS-rounded.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_dragger.mCSB_dragger_onDrag_expanded + .mCSB_draggerRail,
.mCS-rounded.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_draggerContainer:hover .mCSB_draggerRail,
.mCS-rounded-dark.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_dragger.mCSB_dragger_onDrag_expanded + .mCSB_draggerRail,
.mCS-rounded-dark.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_draggerContainer:hover .mCSB_draggerRail {
  height: 4px; /* auto-expanded scrollbar */
  margin: 6px 0;
}
.mCS-rounded.mCSB_scrollTools .mCSB_buttonUp {
  background-position: 0 -72px;
}
.mCS-rounded.mCSB_scrollTools .mCSB_buttonDown {
  background-position: 0 -92px;
}
.mCS-rounded.mCSB_scrollTools .mCSB_buttonLeft {
  background-position: 0 -112px;
}
.mCS-rounded.mCSB_scrollTools .mCSB_buttonRight {
  background-position: 0 -128px;
}
/* theme "rounded-dark", "rounded-dots-dark" */
.mCS-rounded-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar,
.mCS-rounded-dots-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar {
  background-color: #000;
  background-color: rgba(0, 0, 0, 0.75);
}
.mCS-rounded-dark.mCSB_scrollTools .mCSB_draggerRail {
  background-color: #000;
  background-color: rgba(0, 0, 0, 0.15);
}
.mCS-rounded-dark.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar,
.mCS-rounded-dots-dark.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar {
  background-color: #000;
  background-color: rgba(0, 0, 0, 0.85);
}
.mCS-rounded-dark.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar,
.mCS-rounded-dark.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar,
.mCS-rounded-dots-dark.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar,
.mCS-rounded-dots-dark.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar {
  background-color: #000;
  background-color: rgba(0, 0, 0, 0.9);
}
.mCS-rounded-dark.mCSB_scrollTools .mCSB_buttonUp {
  background-position: -80px -72px;
}
.mCS-rounded-dark.mCSB_scrollTools .mCSB_buttonDown {
  background-position: -80px -92px;
}
.mCS-rounded-dark.mCSB_scrollTools .mCSB_buttonLeft {
  background-position: -80px -112px;
}
.mCS-rounded-dark.mCSB_scrollTools .mCSB_buttonRight {
  background-position: -80px -128px;
}
/* theme "rounded-dots", "rounded-dots-dark" */
.mCS-rounded-dots.mCSB_scrollTools_vertical .mCSB_draggerRail,
.mCS-rounded-dots-dark.mCSB_scrollTools_vertical .mCSB_draggerRail {
  width: 4px;
}
.mCS-rounded-dots.mCSB_scrollTools .mCSB_draggerRail,
.mCS-rounded-dots-dark.mCSB_scrollTools .mCSB_draggerRail,
.mCS-rounded-dots.mCSB_scrollTools_horizontal .mCSB_draggerRail,
.mCS-rounded-dots-dark.mCSB_scrollTools_horizontal .mCSB_draggerRail {
  background-color: transparent;
  background-position: center;
}
.mCS-rounded-dots.mCSB_scrollTools .mCSB_draggerRail,
.mCS-rounded-dots-dark.mCSB_scrollTools .mCSB_draggerRail {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAANElEQVQYV2NkIAAYiVbw//9/Y6DiM1ANJoyMjGdBbLgJQAX/kU0DKgDLkaQAvxW4HEvQFwCRcxIJK1XznAAAAABJRU5ErkJggg==");
  background-repeat: repeat-y;
  opacity: 0.3;
  filter: "alpha(opacity=30)";
  -ms-filter: "alpha(opacity=30)";
}
.mCS-rounded-dots.mCSB_scrollTools_horizontal .mCSB_draggerRail,
.mCS-rounded-dots-dark.mCSB_scrollTools_horizontal .mCSB_draggerRail {
  height: 4px;
  margin: 6px 0;
  background-repeat: repeat-x;
}
.mCS-rounded-dots.mCSB_scrollTools .mCSB_buttonUp {
  background-position: -16px -72px;
}
.mCS-rounded-dots.mCSB_scrollTools .mCSB_buttonDown {
  background-position: -16px -92px;
}
.mCS-rounded-dots.mCSB_scrollTools .mCSB_buttonLeft {
  background-position: -20px -112px;
}
.mCS-rounded-dots.mCSB_scrollTools .mCSB_buttonRight {
  background-position: -20px -128px;
}
/* theme "rounded-dots-dark" */
.mCS-rounded-dots-dark.mCSB_scrollTools .mCSB_draggerRail {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAALElEQVQYV2NkIAAYSVFgDFR8BqrBBEifBbGRTfiPZhpYjiQFBK3A6l6CvgAAE9kGCd1mvgEAAAAASUVORK5CYII=");
}
.mCS-rounded-dots-dark.mCSB_scrollTools .mCSB_buttonUp {
  background-position: -96px -72px;
}
.mCS-rounded-dots-dark.mCSB_scrollTools .mCSB_buttonDown {
  background-position: -96px -92px;
}
.mCS-rounded-dots-dark.mCSB_scrollTools .mCSB_buttonLeft {
  background-position: -100px -112px;
}
.mCS-rounded-dots-dark.mCSB_scrollTools .mCSB_buttonRight {
  background-position: -100px -128px;
}
/* ---------------------------------------- */
/* theme "3d", "3d-dark", "3d-thick", "3d-thick-dark" */
.mCS-3d.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar,
.mCS-3d-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar,
.mCS-3d-thick.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar,
.mCS-3d-thick-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar {
  background-repeat: repeat-y;
  background-image: -moz-linear-gradient(left, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%);
  background-image: -webkit-gradient(linear, left top, right top, color-stop(0%, rgba(255, 255, 255, 0.5)), color-stop(100%, rgba(255, 255, 255, 0)));
  background-image: -webkit-linear-gradient(left, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%);
  background-image: -o-linear-gradient(left, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%);
  background-image: -ms-linear-gradient(left, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%);
  background-image: linear-gradient(to right, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%);
}
.mCS-3d.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar,
.mCS-3d-dark.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar,
.mCS-3d-thick.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar,
.mCS-3d-thick-dark.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar {
  background-repeat: repeat-x;
  background-image: -moz-linear-gradient(top, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%);
  background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0%, rgba(255, 255, 255, 0.5)), color-stop(100%, rgba(255, 255, 255, 0)));
  background-image: -webkit-linear-gradient(top, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%);
  background-image: -o-linear-gradient(top, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%);
  background-image: -ms-linear-gradient(top, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%);
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%);
}
/* theme "3d", "3d-dark" */
.mCS-3d.mCSB_scrollTools_vertical .mCSB_dragger,
.mCS-3d-dark.mCSB_scrollTools_vertical .mCSB_dragger {
  height: 70px;
}
.mCS-3d.mCSB_scrollTools_horizontal .mCSB_dragger,
.mCS-3d-dark.mCSB_scrollTools_horizontal .mCSB_dragger {
  width: 70px;
}
.mCS-3d.mCSB_scrollTools,
.mCS-3d-dark.mCSB_scrollTools {
  opacity: 1;
  filter: "alpha(opacity=30)";
  -ms-filter: "alpha(opacity=30)";
}
.mCS-3d.mCSB_scrollTools .mCSB_draggerRail,
.mCS-3d.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar,
.mCS-3d-dark.mCSB_scrollTools .mCSB_draggerRail,
.mCS-3d-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar {
  -webkit-border-radius: 16px;
  -moz-border-radius: 16px;
  border-radius: 16px;
}
.mCS-3d.mCSB_scrollTools .mCSB_draggerRail,
.mCS-3d-dark.mCSB_scrollTools .mCSB_draggerRail {
  width: 8px;
  background-color: #000;
  background-color: rgba(0, 0, 0, 0.2);
  box-shadow: inset 1px 0 1px rgba(0, 0, 0, 0.5), inset -1px 0 1px rgba(255, 255, 255, 0.2);
}
.mCS-3d.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar,
.mCS-3d.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar,
.mCS-3d.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar,
.mCS-3d.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar,
.mCS-3d-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar,
.mCS-3d-dark.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar,
.mCS-3d-dark.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar,
.mCS-3d-dark.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar {
  background-color: #555;
}
.mCS-3d.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar,
.mCS-3d-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar {
  width: 8px;
}
.mCS-3d.mCSB_scrollTools_horizontal .mCSB_draggerRail,
.mCS-3d-dark.mCSB_scrollTools_horizontal .mCSB_draggerRail {
  width: 100%;
  height: 8px;
  margin: 4px 0;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.5), inset 0 -1px 1px rgba(255, 255, 255, 0.2);
}
.mCS-3d.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar,
.mCS-3d-dark.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar {
  width: 100%;
  height: 8px;
  margin: 4px auto;
}
.mCS-3d.mCSB_scrollTools .mCSB_buttonUp {
  background-position: -32px -72px;
}
.mCS-3d.mCSB_scrollTools .mCSB_buttonDown {
  background-position: -32px -92px;
}
.mCS-3d.mCSB_scrollTools .mCSB_buttonLeft {
  background-position: -40px -112px;
}
.mCS-3d.mCSB_scrollTools .mCSB_buttonRight {
  background-position: -40px -128px;
}
/* theme "3d-dark" */
.mCS-3d-dark.mCSB_scrollTools .mCSB_draggerRail {
  background-color: #000;
  background-color: rgba(0, 0, 0, 0.1);
  box-shadow: inset 1px 0 1px rgba(0, 0, 0, 0.1);
}
.mCS-3d-dark.mCSB_scrollTools_horizontal .mCSB_draggerRail {
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.1);
}
.mCS-3d-dark.mCSB_scrollTools .mCSB_buttonUp {
  background-position: -112px -72px;
}
.mCS-3d-dark.mCSB_scrollTools .mCSB_buttonDown {
  background-position: -112px -92px;
}
.mCS-3d-dark.mCSB_scrollTools .mCSB_buttonLeft {
  background-position: -120px -112px;
}
.mCS-3d-dark.mCSB_scrollTools .mCSB_buttonRight {
  background-position: -120px -128px;
}
/* ---------------------------------------- */
/* theme: "3d-thick", "3d-thick-dark" */
.mCS-3d-thick.mCSB_scrollTools,
.mCS-3d-thick-dark.mCSB_scrollTools {
  opacity: 1;
  filter: "alpha(opacity=30)";
  -ms-filter: "alpha(opacity=30)";
}
.mCS-3d-thick.mCSB_scrollTools,
.mCS-3d-thick-dark.mCSB_scrollTools,
.mCS-3d-thick.mCSB_scrollTools .mCSB_draggerContainer,
.mCS-3d-thick-dark.mCSB_scrollTools .mCSB_draggerContainer {
  -webkit-border-radius: 7px;
  -moz-border-radius: 7px;
  border-radius: 7px;
}
.mCS-3d-thick.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar,
.mCS-3d-thick-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar {
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
}
.mCSB_inside + .mCS-3d-thick.mCSB_scrollTools_vertical,
.mCSB_inside + .mCS-3d-thick-dark.mCSB_scrollTools_vertical {
  right: 1px;
}
.mCS-3d-thick.mCSB_scrollTools_vertical,
.mCS-3d-thick-dark.mCSB_scrollTools_vertical {
  box-shadow: inset 1px 0 1px rgba(0, 0, 0, 0.1), inset 0 0 14px rgba(0, 0, 0, 0.5);
}
.mCS-3d-thick.mCSB_scrollTools_horizontal,
.mCS-3d-thick-dark.mCSB_scrollTools_horizontal {
  bottom: 1px;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.1), inset 0 0 14px rgba(0, 0, 0, 0.5);
}
.mCS-3d-thick.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar,
.mCS-3d-thick-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar {
  box-shadow: inset 1px 0 0 rgba(255, 255, 255, 0.4);
  width: 12px;
  margin: 2px;
  position: absolute;
  height: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.mCS-3d-thick.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar,
.mCS-3d-thick-dark.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar {
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.4);
}
.mCS-3d-thick.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar,
.mCS-3d-thick.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar,
.mCS-3d-thick.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar,
.mCS-3d-thick.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar {
  background-color: #555;
}
.mCS-3d-thick.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar,
.mCS-3d-thick-dark.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar {
  height: 12px;
  width: auto;
}
.mCS-3d-thick.mCSB_scrollTools .mCSB_draggerContainer {
  background-color: #000;
  background-color: rgba(0, 0, 0, 0.05);
  box-shadow: inset 1px 1px 16px rgba(0, 0, 0, 0.1);
}
.mCS-3d-thick.mCSB_scrollTools .mCSB_draggerRail {
  background-color: transparent;
}
.mCS-3d-thick.mCSB_scrollTools .mCSB_buttonUp {
  background-position: -32px -72px;
}
.mCS-3d-thick.mCSB_scrollTools .mCSB_buttonDown {
  background-position: -32px -92px;
}
.mCS-3d-thick.mCSB_scrollTools .mCSB_buttonLeft {
  background-position: -40px -112px;
}
.mCS-3d-thick.mCSB_scrollTools .mCSB_buttonRight {
  background-position: -40px -128px;
}
/* theme: "3d-thick-dark" */
.mCS-3d-thick-dark.mCSB_scrollTools {
  box-shadow: inset 0 0 14px rgba(0, 0, 0, 0.2);
}
.mCS-3d-thick-dark.mCSB_scrollTools_horizontal {
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.1), inset 0 0 14px rgba(0, 0, 0, 0.2);
}
.mCS-3d-thick-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar {
  box-shadow: inset 1px 0 0 rgba(255, 255, 255, 0.4), inset -1px 0 0 rgba(0, 0, 0, 0.2);
}
.mCS-3d-thick-dark.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar {
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.4), inset 0 -1px 0 rgba(0, 0, 0, 0.2);
}
.mCS-3d-thick-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar,
.mCS-3d-thick-dark.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar,
.mCS-3d-thick-dark.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar,
.mCS-3d-thick-dark.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar {
  background-color: #777;
}
.mCS-3d-thick-dark.mCSB_scrollTools .mCSB_draggerContainer {
  background-color: #fff;
  background-color: rgba(0, 0, 0, 0.05);
  box-shadow: inset 1px 1px 16px rgba(0, 0, 0, 0.1);
}
.mCS-3d-thick-dark.mCSB_scrollTools .mCSB_draggerRail {
  background-color: transparent;
}
.mCS-3d-thick-dark.mCSB_scrollTools .mCSB_buttonUp {
  background-position: -112px -72px;
}
.mCS-3d-thick-dark.mCSB_scrollTools .mCSB_buttonDown {
  background-position: -112px -92px;
}
.mCS-3d-thick-dark.mCSB_scrollTools .mCSB_buttonLeft {
  background-position: -120px -112px;
}
.mCS-3d-thick-dark.mCSB_scrollTools .mCSB_buttonRight {
  background-position: -120px -128px;
}
/* ---------------------------------------- */
/* theme: "minimal", "minimal-dark" */
.mCSB_outside + .mCS-minimal.mCSB_scrollTools_vertical,
.mCSB_outside + .mCS-minimal-dark.mCSB_scrollTools_vertical {
  right: 0;
  margin: 12px 0;
}
.mCustomScrollBox.mCS-minimal + .mCSB_scrollTools.mCSB_scrollTools_horizontal,
.mCustomScrollBox.mCS-minimal + .mCSB_scrollTools + .mCSB_scrollTools.mCSB_scrollTools_horizontal,
.mCustomScrollBox.mCS-minimal-dark + .mCSB_scrollTools.mCSB_scrollTools_horizontal,
.mCustomScrollBox.mCS-minimal-dark + .mCSB_scrollTools + .mCSB_scrollTools.mCSB_scrollTools_horizontal {
  bottom: 0;
  margin: 0 12px;
}
/* RTL direction/left-side scrollbar */
.mCS-dir-rtl > .mCSB_outside + .mCS-minimal.mCSB_scrollTools_vertical,
.mCS-dir-rtl > .mCSB_outside + .mCS-minimal-dark.mCSB_scrollTools_vertical {
  left: 0;
  right: auto;
}
.mCS-minimal.mCSB_scrollTools .mCSB_draggerRail,
.mCS-minimal-dark.mCSB_scrollTools .mCSB_draggerRail {
  background-color: transparent;
}
.mCS-minimal.mCSB_scrollTools_vertical .mCSB_dragger,
.mCS-minimal-dark.mCSB_scrollTools_vertical .mCSB_dragger {
  height: 50px;
}
.mCS-minimal.mCSB_scrollTools_horizontal .mCSB_dragger,
.mCS-minimal-dark.mCSB_scrollTools_horizontal .mCSB_dragger {
  width: 50px;
}
.mCS-minimal.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar {
  background-color: #fff;
  background-color: rgba(255, 255, 255, 0.2);
  filter: "alpha(opacity=20)";
  -ms-filter: "alpha(opacity=20)";
}
.mCS-minimal.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar,
.mCS-minimal.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar {
  background-color: #fff;
  background-color: rgba(255, 255, 255, 0.5);
  filter: "alpha(opacity=50)";
  -ms-filter: "alpha(opacity=50)";
}
/* theme: "minimal-dark" */
.mCS-minimal-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar {
  background-color: #000;
  background-color: rgba(0, 0, 0, 0.2);
  filter: "alpha(opacity=20)";
  -ms-filter: "alpha(opacity=20)";
}
.mCS-minimal-dark.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar,
.mCS-minimal-dark.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar {
  background-color: #000;
  background-color: rgba(0, 0, 0, 0.5);
  filter: "alpha(opacity=50)";
  -ms-filter: "alpha(opacity=50)";
}
/* ---------------------------------------- */
/* theme "light-3", "dark-3" */
.mCS-light-3.mCSB_scrollTools .mCSB_draggerRail,
.mCS-dark-3.mCSB_scrollTools .mCSB_draggerRail {
  width: 6px;
  background-color: #000;
  background-color: rgba(0, 0, 0, 0.2);
}
.mCS-light-3.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar,
.mCS-dark-3.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar {
  width: 6px;
}
.mCS-light-3.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar,
.mCS-dark-3.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar,
.mCS-light-3.mCSB_scrollTools_horizontal .mCSB_draggerRail,
.mCS-dark-3.mCSB_scrollTools_horizontal .mCSB_draggerRail {
  width: 100%;
  height: 6px;
  margin: 5px 0;
}
.mCS-light-3.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_dragger.mCSB_dragger_onDrag_expanded + .mCSB_draggerRail,
.mCS-light-3.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_draggerContainer:hover .mCSB_draggerRail,
.mCS-dark-3.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_dragger.mCSB_dragger_onDrag_expanded + .mCSB_draggerRail,
.mCS-dark-3.mCSB_scrollTools_vertical.mCSB_scrollTools_onDrag_expand .mCSB_draggerContainer:hover .mCSB_draggerRail {
  width: 12px;
}
.mCS-light-3.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_dragger.mCSB_dragger_onDrag_expanded + .mCSB_draggerRail,
.mCS-light-3.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_draggerContainer:hover .mCSB_draggerRail,
.mCS-dark-3.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_dragger.mCSB_dragger_onDrag_expanded + .mCSB_draggerRail,
.mCS-dark-3.mCSB_scrollTools_horizontal.mCSB_scrollTools_onDrag_expand .mCSB_draggerContainer:hover .mCSB_draggerRail {
  height: 12px;
  margin: 2px 0;
}
.mCS-light-3.mCSB_scrollTools .mCSB_buttonUp {
  background-position: -32px -72px;
}
.mCS-light-3.mCSB_scrollTools .mCSB_buttonDown {
  background-position: -32px -92px;
}
.mCS-light-3.mCSB_scrollTools .mCSB_buttonLeft {
  background-position: -40px -112px;
}
.mCS-light-3.mCSB_scrollTools .mCSB_buttonRight {
  background-position: -40px -128px;
}
/* theme "dark-3" */
.mCS-dark-3.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar {
  background-color: #000;
  background-color: rgba(0, 0, 0, 0.75);
}
.mCS-dark-3.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar {
  background-color: #000;
  background-color: rgba(0, 0, 0, 0.85);
}
.mCS-dark-3.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar,
.mCS-dark-3.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar {
  background-color: #000;
  background-color: rgba(0, 0, 0, 0.9);
}
.mCS-dark-3.mCSB_scrollTools .mCSB_draggerRail {
  background-color: #000;
  background-color: rgba(0, 0, 0, 0.1);
}
.mCS-dark-3.mCSB_scrollTools .mCSB_buttonUp {
  background-position: -112px -72px;
}
.mCS-dark-3.mCSB_scrollTools .mCSB_buttonDown {
  background-position: -112px -92px;
}
.mCS-dark-3.mCSB_scrollTools .mCSB_buttonLeft {
  background-position: -120px -112px;
}
.mCS-dark-3.mCSB_scrollTools .mCSB_buttonRight {
  background-position: -120px -128px;
}
/* ---------------------------------------- */
/* theme "inset", "inset-dark", "inset-2", "inset-2-dark", "inset-3", "inset-3-dark" */
.mCS-inset.mCSB_scrollTools .mCSB_draggerRail,
.mCS-inset-dark.mCSB_scrollTools .mCSB_draggerRail,
.mCS-inset-2.mCSB_scrollTools .mCSB_draggerRail,
.mCS-inset-2-dark.mCSB_scrollTools .mCSB_draggerRail,
.mCS-inset-3.mCSB_scrollTools .mCSB_draggerRail,
.mCS-inset-3-dark.mCSB_scrollTools .mCSB_draggerRail {
  width: 12px;
  background-color: #000;
  background-color: rgba(0, 0, 0, 0.2);
}
.mCS-inset.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar,
.mCS-inset-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar,
.mCS-inset-2.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar,
.mCS-inset-2-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar,
.mCS-inset-3.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar,
.mCS-inset-3-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar {
  width: 6px;
  margin: 3px 5px;
  position: absolute;
  height: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.mCS-inset.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar,
.mCS-inset-dark.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar,
.mCS-inset-2.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar,
.mCS-inset-2-dark.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar,
.mCS-inset-3.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar,
.mCS-inset-3-dark.mCSB_scrollTools_horizontal .mCSB_dragger .mCSB_dragger_bar {
  height: 6px;
  margin: 5px 3px;
  position: absolute;
  width: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.mCS-inset.mCSB_scrollTools_horizontal .mCSB_draggerRail,
.mCS-inset-dark.mCSB_scrollTools_horizontal .mCSB_draggerRail,
.mCS-inset-2.mCSB_scrollTools_horizontal .mCSB_draggerRail,
.mCS-inset-2-dark.mCSB_scrollTools_horizontal .mCSB_draggerRail,
.mCS-inset-3.mCSB_scrollTools_horizontal .mCSB_draggerRail,
.mCS-inset-3-dark.mCSB_scrollTools_horizontal .mCSB_draggerRail {
  width: 100%;
  height: 12px;
  margin: 2px 0;
}
.mCS-inset.mCSB_scrollTools .mCSB_buttonUp,
.mCS-inset-2.mCSB_scrollTools .mCSB_buttonUp,
.mCS-inset-3.mCSB_scrollTools .mCSB_buttonUp {
  background-position: -32px -72px;
}
.mCS-inset.mCSB_scrollTools .mCSB_buttonDown,
.mCS-inset-2.mCSB_scrollTools .mCSB_buttonDown,
.mCS-inset-3.mCSB_scrollTools .mCSB_buttonDown {
  background-position: -32px -92px;
}
.mCS-inset.mCSB_scrollTools .mCSB_buttonLeft,
.mCS-inset-2.mCSB_scrollTools .mCSB_buttonLeft,
.mCS-inset-3.mCSB_scrollTools .mCSB_buttonLeft {
  background-position: -40px -112px;
}
.mCS-inset.mCSB_scrollTools .mCSB_buttonRight,
.mCS-inset-2.mCSB_scrollTools .mCSB_buttonRight,
.mCS-inset-3.mCSB_scrollTools .mCSB_buttonRight {
  background-position: -40px -128px;
}
/* theme "inset-dark", "inset-2-dark", "inset-3-dark" */
.mCS-inset-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar,
.mCS-inset-2-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar,
.mCS-inset-3-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar {
  background-color: #000;
  background-color: rgba(0, 0, 0, 0.75);
}
.mCS-inset-dark.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar,
.mCS-inset-2-dark.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar,
.mCS-inset-3-dark.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar {
  background-color: #000;
  background-color: rgba(0, 0, 0, 0.85);
}
.mCS-inset-dark.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar,
.mCS-inset-dark.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar,
.mCS-inset-2-dark.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar,
.mCS-inset-2-dark.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar,
.mCS-inset-3-dark.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar,
.mCS-inset-3-dark.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar {
  background-color: #000;
  background-color: rgba(0, 0, 0, 0.9);
}
.mCS-inset-dark.mCSB_scrollTools .mCSB_draggerRail,
.mCS-inset-2-dark.mCSB_scrollTools .mCSB_draggerRail,
.mCS-inset-3-dark.mCSB_scrollTools .mCSB_draggerRail {
  background-color: #000;
  background-color: rgba(0, 0, 0, 0.1);
}
.mCS-inset-dark.mCSB_scrollTools .mCSB_buttonUp,
.mCS-inset-2-dark.mCSB_scrollTools .mCSB_buttonUp,
.mCS-inset-3-dark.mCSB_scrollTools .mCSB_buttonUp {
  background-position: -112px -72px;
}
.mCS-inset-dark.mCSB_scrollTools .mCSB_buttonDown,
.mCS-inset-2-dark.mCSB_scrollTools .mCSB_buttonDown,
.mCS-inset-3-dark.mCSB_scrollTools .mCSB_buttonDown {
  background-position: -112px -92px;
}
.mCS-inset-dark.mCSB_scrollTools .mCSB_buttonLeft,
.mCS-inset-2-dark.mCSB_scrollTools .mCSB_buttonLeft,
.mCS-inset-3-dark.mCSB_scrollTools .mCSB_buttonLeft {
  background-position: -120px -112px;
}
.mCS-inset-dark.mCSB_scrollTools .mCSB_buttonRight,
.mCS-inset-2-dark.mCSB_scrollTools .mCSB_buttonRight,
.mCS-inset-3-dark.mCSB_scrollTools .mCSB_buttonRight {
  background-position: -120px -128px;
}
/* theme "inset-2", "inset-2-dark" */
.mCS-inset-2.mCSB_scrollTools .mCSB_draggerRail,
.mCS-inset-2-dark.mCSB_scrollTools .mCSB_draggerRail {
  background-color: transparent;
  border-width: 1px;
  border-style: solid;
  border-color: #fff;
  border-color: rgba(255, 255, 255, 0.2);
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.mCS-inset-2-dark.mCSB_scrollTools .mCSB_draggerRail {
  border-color: #000;
  border-color: rgba(0, 0, 0, 0.2);
}
/* theme "inset-3", "inset-3-dark" */
.mCS-inset-3.mCSB_scrollTools .mCSB_draggerRail {
  background-color: #fff;
  background-color: rgba(255, 255, 255, 0.6);
}
.mCS-inset-3-dark.mCSB_scrollTools .mCSB_draggerRail {
  background-color: #000;
  background-color: rgba(0, 0, 0, 0.6);
}
.mCS-inset-3.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar {
  background-color: #000;
  background-color: rgba(0, 0, 0, 0.75);
}
.mCS-inset-3.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar {
  background-color: #000;
  background-color: rgba(0, 0, 0, 0.85);
}
.mCS-inset-3.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar,
.mCS-inset-3.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar {
  background-color: #000;
  background-color: rgba(0, 0, 0, 0.9);
}
.mCS-inset-3-dark.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar {
  background-color: #fff;
  background-color: rgba(255, 255, 255, 0.75);
}
.mCS-inset-3-dark.mCSB_scrollTools .mCSB_dragger:hover .mCSB_dragger_bar {
  background-color: #fff;
  background-color: rgba(255, 255, 255, 0.85);
}
.mCS-inset-3-dark.mCSB_scrollTools .mCSB_dragger:active .mCSB_dragger_bar,
.mCS-inset-3-dark.mCSB_scrollTools .mCSB_dragger.mCSB_dragger_onDrag .mCSB_dragger_bar {
  background-color: #fff;
  background-color: rgba(255, 255, 255, 0.9);
}
/* ---------------------------------------- */
/*
END SCROLL 
*/


`;