import { morseToEng, engToMorse } from './translator.js';
import { isMorseCode } from './helpers.js';

export const translateText = (text) => {
  return isMorseCode(text) ? morseToEng(text, morseToEnDict) : engToMorse(text);
};
