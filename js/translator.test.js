import { dictionary } from "./dictionary.js";
import { convertData } from "./helpers.js";
import { engToMorse, morseToEng } from "./translator.js";

const norseToEngDict = convertData(dictionary);

describe("Testing engToMorse() function", () => {
  it("returns a correct morse code depending on the input", () => {
    const strWithSpaceInMorse = ".... .. / - .... . .-. .";

    expect(engToMorse("hi there", dictionary)).toBe(strWithSpaceInMorse);
  });
  it("translates numbers into morse code without passing a dictionary", () => {
    const numsInStrInMorse = ".---- ..--- ...-- ....-";

    expect(engToMorse("1234")).toBe(numsInStrInMorse);
  });
  it("translates letters with special characters into morse code", () => {
    const strWithSpecialCharsInMorse =
      ".--- ..- -. --. .- .... .--.-. --. -- .- .. .-.. .-.-.- -.-. --- --";
    const complexStrInMorse =
      ".... --- .-- / .- .-. . / -.-- --- ..- ..--.. / .. .----. -- / -.. --- .. -. --. / --. .-. . .- - -.-.--";

    expect(engToMorse("jungah@gmail.com")).toBe(strWithSpecialCharsInMorse);
    expect(engToMorse("how are you? i'm doing great!")).toBe(complexStrInMorse);
  });
  it("removes invalid special characters and translates only valid letters", () => {
    const otherSpecialCharsInMorse =
      ".- -... -.-. -....- .--.-. -.-.-- .-- --- .-. -..";

    expect(engToMorse("abc&#-*@!word")).toBe(otherSpecialCharsInMorse);
  });
});

describe("Testing morseToEng() function", () => {
  it("translates morse code into alphabets", () => {
    const morseWithSpace = ".... . .-.. .--. / -- .";

    expect(morseToEng(morseWithSpace, norseToEngDict)).toBe("help me");
  });

  it("translates morse code into numbers", () => {
    const phoneNumber =
      "----- ....- ----. ----- / .---- ..--- ...-- / .---- ..--- ...-- ....-";
    expect(morseToEng(phoneNumber, norseToEngDict)).toBe("0490 123 1234");
  });
  it("translates morse code into special charactors", () => {
    const specialChars =
      ".-.-.- --..-- ..--.. -.-.-- -....- .----. -..-. .--.-. -.--. -.--.-";
    const letters =
      ".... .. -.-.-- / .. .----. -- / .--.-. ... -.-- -.. -. . -.--";
    expect(morseToEng(specialChars, norseToEngDict)).toBe(".,?!-'/@()");
    expect(morseToEng(letters, norseToEngDict)).toBe("hi! i'm @sydney");
  });
});
