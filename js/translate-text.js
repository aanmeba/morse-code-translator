import { morseToEng, engToMorse } from "./translator.js";
import { isMorseCode } from "./helpers.js";
import { morseToEnDict } from "./dictionary.js";

export const translateText = (text) => {
  return isMorseCode(text) ? morseToEng(text, morseToEnDict) : engToMorse(text);
};
