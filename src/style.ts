import {
  STYLE_NAME,
  YT_PROGRESS_BAR,
  YT_CURRENT_TIME,
  YT_TIME_SEPARATOR,
} from "./constant";

function styleElement(selector: string) {
  return `body.${STYLE_NAME} .${selector} { display: none; }`;
}

export function injectStyle() {
  const style = document.createElement("style");
  style.innerHTML = [YT_PROGRESS_BAR, YT_CURRENT_TIME, YT_TIME_SEPARATOR]
    .map(styleElement)
    .join("");

  document.head.appendChild(style);
}
