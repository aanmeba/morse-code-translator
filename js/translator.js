// export const readJSON = async () => {
//   const response = await fetch("../data/morse_code.json");
//   const data = await response.json();

import { dictionary } from "./dictionary.js";
console.log(dictionary, "-- dictionary");

export const dictToLowerCase = (data) => {
  let convertedData = {};

  // uppercase to lowercase
  if (Object.keys(data).join("").match(/[A-Z]/g).length > 0) {
    for (const [key, value] of Object.entries(data)) {
      convertedData = { ...convertedData, [key.toLowerCase()]: value };
    }
  }

  return convertedData;
};

export const convertData = (data) => {
  let convertedData = {};

  // value: key
  for (const [key, value] of Object.entries(data)) {
    convertedData = { ...convertedData, [value]: key };
  }
  return convertedData;
};

export const engToMorse = (dict, value) => {
  return value
    .split("")
    .map((char) => (dict[char] ? dict[char] : " / "))
    .join(" ");
};

const newDict = dictToLowerCase(dictionary);
const morse2 = engToMorse(newDict, "hi there");
console.log(engToMorse(newDict, "hi there"));

export const morseToEng = (dict, value) => {
  return value
    .split(" / ")
    .join("")
    .split(" ")
    .map((char) => (dict[char] ? dict[char] : " "))
    .join("");
};

const morseDic = convertData(dictionary);
console.log(morseToEng(morseDic, morse2));

export const inputValidator = (value) => {
  if (typeof value !== "string") {
    throw new Error("Your input should be either English or Morse code");
  }

  return value.trim();
};

export const runTranslator = (value) => {
  // check the input -> inputValidator();
  // control flow -> morseToEng ? or engToMorse ?

  const validatedValue = inputValidator(value);

  const regex = /[a-zA-Z]/g;
  if (validatedValue.match(regex)) {
    engToMorse(validatedValue.trim());
  } else {
    morseToEng(validatedValue);
  }
};
