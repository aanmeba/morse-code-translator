import { dictionary } from "./dictionary.js";
import { convertData, inputValidator } from "./helpers.js";

export const engToMorse = (value, dict = dictionary) => {
  console.log("engToMorse", value);
  return value
    .split("")
    .map((char) => (dict[char] ? dict[char] : "/"))
    .join(" ");
};

export const morseToEng = (value, dict = dictionary) => {
  console.log("morseToEng", value);
  // space -> not adding / 🔥

  return value
    .split("/")
    .join("")
    .split(" ")
    .map((char) => (dict[char] ? dict[char] : " "))
    .join("");
};
