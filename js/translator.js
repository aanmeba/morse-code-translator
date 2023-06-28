import { dictionary } from "./dictionary.js";

export const engToMorse = (value, dict = dictionary) => {
  return value
    .split("")
    .map((char) => (dict[char] ? dict[char] : char === " " ? "/" : ""))
    .join(" ")
    .replace(/  +/g, " ");
};

export const morseToEng = (value, dict = dictionary) => {
  return value
    .split("/")
    .join("")
    .split(" ")
    .map((char) => (dict[char] ? dict[char] : " "))
    .join("");
};
