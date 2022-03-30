"use strict";
import "./sass/main.scss";

// Intancia do JQuery
import $ from 'jquery';
window.jQuery = $;
window.$ = $;

import Accessibility from "./main.js";

window.Accessibility = Accessibility;

window.addEventListener(
    "load",
    function () {
      new Accessibility();
    },
    false
);