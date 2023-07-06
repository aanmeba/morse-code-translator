import { morseToEng, engToMorse } from './translator';
import { isMorseCode } from './helpers';

export const translateText = (text) =>
  isMorseCode(text) ? morseToEng(text) : engToMorse(text);
