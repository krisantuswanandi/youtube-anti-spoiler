import { STYLE_NAME } from "./constant";

const activeIcon =
  '<svg class="ytp-anti-spoiler-on"  width="100%" height="100%" viewBox="0 0 24 24"><path fill="currentColor" d="M12 16q1.875 0 3.188-1.313T16.5 11.5q0-1.875-1.313-3.188T12 7q-1.875 0-3.188 1.313T7.5 11.5q0 1.875 1.313 3.188T12 16Zm0-1.8q-1.125 0-1.913-.788T9.3 11.5q0-1.125.788-1.913T12 8.8q1.125 0 1.913.788T14.7 11.5q0 1.125-.787 1.913T12 14.2Zm0 4.8q-3.35 0-6.113-1.8t-4.362-4.75q-.125-.225-.187-.462t-.063-.488q0-.25.063-.488t.187-.462q1.6-2.95 4.362-4.75T12 4q3.35 0 6.113 1.8t4.362 4.75q.125.225.188.463t.062.487q0 .25-.063.488t-.187.462q-1.6 2.95-4.362 4.75T12 19Z"/></svg>';
const inactiveIcon =
  '<svg class="ytp-anti-spoiler-off"  width="100%" height="100%" viewBox="0 0 24 24"><path fill="currentColor" d="m19.8 22.6l-4.2-4.15q-.875.275-1.775.413T12 19q-3.35 0-6.125-1.8t-4.35-4.75q-.125-.225-.187-.462t-.063-.488q0-.25.063-.488t.187-.462q.55-.975 1.175-1.9T4.15 7L1.4 4.2l1.4-1.4l18.4 18.4l-1.4 1.4ZM12 16q.275 0 .525-.025t.5-.1l-5.4-5.4q-.075.25-.1.5T7.5 11.5q0 1.875 1.313 3.188T12 16Zm7.3.45l-3.175-3.15q.175-.425.275-.875t.1-.925q0-1.875-1.313-3.188T12 7q-.475 0-.925.1t-.875.3L7.65 4.85q1.05-.425 2.138-.637T12 4q3.35 0 6.138 1.813t4.362 4.762q.125.2.188.438t.062.487q0 .25-.05.488t-.175.437q-.6 1.175-1.388 2.2T19.3 16.45Zm-4.625-4.6l-3-3q.65-.125 1.263.1t1.037.7q.425.45.613 1.025t.087 1.175Z"/></svg>';

export function addButton() {
  const button = document.createElement("button");
  button.innerHTML = activeIcon + inactiveIcon;
  button.classList.add("ytp-button", "ytp-anti-spoiler-button");

  document
    .querySelector(".ytp-subtitles-button")
    ?.insertAdjacentElement("afterend", button);

  const style = document.createElement("style");
  style.innerHTML = `
.ytp-anti-spoiler-button.ytp-button {
  transform: scale(0.55)
}

.ytp-anti-spoiler-button.ytp-button .ytp-anti-spoiler-off {
  display: none;
}

body.${STYLE_NAME} .ytp-anti-spoiler-button.ytp-button .ytp-anti-spoiler-on {
  display: none;
}

body.${STYLE_NAME} .ytp-anti-spoiler-button.ytp-button .ytp-anti-spoiler-off {
  display: block;
}

.ytp-inline-preview-controls .ytp-anti-spoiler-button.ytp-button {
  display: none;
}
`;

  document.head.appendChild(style);

  return button;
}
