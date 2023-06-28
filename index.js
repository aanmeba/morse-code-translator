import { dictionary } from "./js/dictionary.js";
import { convertData, isMorseCode, validateInput } from "./js/helpers.js";
import { engToMorse, morseToEng } from "./js/translator.js";

const input = document.querySelector("#input");
const output = document.querySelector("#output");

input.addEventListener("input", () => {
  const morseToEnDict = convertData(dictionary);
  const inputValue = validateInput(input.value);

  const result = isMorseCode(inputValue)
    ? morseToEng(inputValue, morseToEnDict)
    : engToMorse(inputValue);

  output.innerText = result;
});
