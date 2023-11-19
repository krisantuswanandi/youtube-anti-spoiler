import { STORAGE_KEY, STYLE_NAME } from "./constant";

export function setAntiSpoilerElements(status: boolean) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(status));

  if (status) {
    document.body.classList.add(STYLE_NAME);
  } else {
    document.body.classList.remove(STYLE_NAME);
  }
}
