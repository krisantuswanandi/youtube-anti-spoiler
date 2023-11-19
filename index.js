// ==UserScript==
// @name Youtube Anti Spoiler
// @namespace https://santus.dev/
// @version 0.0.1
// @description Anti Spoiler for Youtube
// @author Krisantus Wanandi
// @match https://www.youtube.com/**
// @icon https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant GM_getValue
// @grant GM_setValue
// @grant GM_registerMenuCommand
// @grant GM_unregisterMenuCommand
// @run-at document-body
// ==/UserScript==

(function () {

"use strict";

// src/constant.ts
var STORAGE_KEY = "yt-anti-spoiler";
var STYLE_NAME = "ytp-anti-spoiler";
var YT_PROGRESS_BAR = "ytp-progress-bar-container";
var YT_CURRENT_TIME = "ytp-time-current";
var YT_TIME_SEPARATOR = "ytp-time-separator";
var SHORTCUT_KEY = "x";

// src/style.ts
var styleElement = function(selector) {
  return `body.${STYLE_NAME} .${selector} { display: none; }`;
};
function injectStyle() {
  const style = document.createElement("style");
  style.innerHTML = [YT_PROGRESS_BAR, YT_CURRENT_TIME, YT_TIME_SEPARATOR].map(styleElement).join("");
  document.head.appendChild(style);
}

// src/storage.ts
function checkStorage() {
  const savedAntiSpoiler = window.localStorage.getItem(STORAGE_KEY);
  if (savedAntiSpoiler === "true") {
    return true;
  }
  return false;
}

// src/toggle.ts
function setAntiSpoilerElements(status) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(status));
  if (status) {
    document.body.classList.add(STYLE_NAME);
  } else {
    document.body.classList.remove(STYLE_NAME);
  }
}

// src/index.ts
var toggleAntiSpoiler = function() {
  isAntiSpoiler = !isAntiSpoiler;
  setAntiSpoilerElements(isAntiSpoiler);
};
var init = function() {
  injectStyle();
  isAntiSpoiler = checkStorage();
  setAntiSpoilerElements(isAntiSpoiler);
};
var isAntiSpoiler = false;
window.addEventListener("keydown", (event) => {
  if (event.target.id === "search") {
    return;
  }
  if (event.key.toLowerCase() === SHORTCUT_KEY) {
    toggleAntiSpoiler();
  }
});
init();

})();
