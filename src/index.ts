/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

import { injectStyle } from "./style";
import { checkStorage } from "./storage";
import { setAntiSpoilerElements } from "./toggle";
import { SHORTCUT_KEY } from "./constant";

let isAntiSpoiler = false;

function toggleAntiSpoiler() {
  isAntiSpoiler = !isAntiSpoiler;

  setAntiSpoilerElements(isAntiSpoiler);
}

function init() {
  injectStyle();
  isAntiSpoiler = checkStorage();
  setAntiSpoilerElements(isAntiSpoiler);
}

window.addEventListener("keydown", (event) => {
  if ((event.target as HTMLElement).id === "search") {
    return;
  }

  if (event.key.toLowerCase() === SHORTCUT_KEY) {
    toggleAntiSpoiler();
  }
});

init();
