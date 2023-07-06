import { dictionary } from './js/dictionary.js';
import { convertData, isMorseCode, validateInput } from './js/helpers.js';
import { translateText } from './js/translate-text.js';
import * as translationModule from './js/translator.js';

const input = document.querySelector('#input');
const output = document.querySelector('#output');

input.addEventListener('input', () => {
  const inputValue = validateInput(input.value);
  const result = translateText(inputValue);

  output.innerText = result;
});
