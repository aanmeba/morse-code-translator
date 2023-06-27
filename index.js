import { dictionary } from "./js/dictionary.js";
import { convertData, isMorseCode } from "./js/helpers.js";
import { engToMorse, morseToEng } from "./js/translator.js";

const input = document.querySelector("#input");
const output = document.querySelector("#output");

input.addEventListener("input", () => {
  let inputValue = input.value.trim().toLowerCase();
  const morseToEnDict = convertData(dictionary);

  const regex = /[a-zA-Z0-9.,?!\'/@()-]+/g;

  if (inputValue.match(regex)) {
    inputValue = inputValue.match(regex).join("");
  }

  console.log(inputValue.match(regex), inputValue, "--- input value");

  const result = isMorseCode(inputValue)
    ? morseToEng(inputValue, morseToEnDict)
    : engToMorse(inputValue);

  output.innerText = result;
});
