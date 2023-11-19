import { STORAGE_KEY } from "./constant";

export function checkStorage() {
  const savedAntiSpoiler = window.localStorage.getItem(STORAGE_KEY);

  if (savedAntiSpoiler === "true") {
    return true;
  }

  return false;
}
