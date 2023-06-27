import { dictionary } from "./dictionary.js";
import { convertData } from "./helpers.js";
import { engToMorse, morseToEng, handleTranslator } from "./translator.js";

const norseToEngDict = convertData(dictionary);

describe("Testing engToMorse() function", () => {
  const strWithSpace = "hi there";
  const strWithSpaceInMorse = ".... .. / - .... . .-. .";
  const numsInStr = "1234";
  const numsInStrInMorse = ".---- ..--- ...-- ....-";
  const strWithSpecialChars = "jungah@gmail.com";
  const strWithSpecialCharsInMorse =
    ".--- ..- -. --. .- .... .--.-. --. -- .- .. .-.. .-.-.- -.-. --- --";
  const complexStr = "how are you? i'm doing great!";
  const complexStrInMorse =
    ".... --- .-- / .- .-. . / -.-- --- ..- ..--.. / .. .----. -- / -.. --- .. -. --. / --. .-. . .- - -.-.--";

  const otherSpecialChars = "abc&#-*@!word";
  const otherSpecialCharsInMorse = "";

  it("returns a correct morse code depending on the input", () => {
    expect(engToMorse(strWithSpace, dictionary)).toBe(strWithSpaceInMorse);
  });
  it("translates numbers into morse code without passing a dictionary", () => {
    expect(engToMorse(numsInStr)).toBe(numsInStrInMorse);
  });
  it("translates letters with special characters into morse code", () => {
    expect(engToMorse(strWithSpecialChars)).toBe(strWithSpecialCharsInMorse);
    expect(engToMorse(complexStr)).toBe(complexStrInMorse);
  });
  it("removes invalid special characters and translates only valid letters", () => {
    expect(engToMorse(otherSpecialChars).toBe(otherSpecialCharsInMorse));
  });
});

describe("Testing morseToEng() function", () => {
  it("translates morse code into alphabets", () => {
    const morseWithSpace = ".... . .-.. .--. / -- .";
    const morseWithSpaceInEng = "help me";
    expect(morseToEng(morseWithSpace, norseToEngDict)).toBe(
      morseWithSpaceInEng
    );
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

xdescribe("Testing handleTranslator() function", () => {
  const inputEng = "Hello World";
  // const validatedInput = "hello world";
  const inputMorse = ".... . .-.. .-.. --- / .-- --- .-. .-.. -..";

  jest.mock("./translator", () => ({
    engToMorse: jest.fn(),
    morseToEng: jest.fn(),
  }));

  const engToMorse = jest.fn();

  it("calls engToMorse(), if the input is in English", () => {
    handleTranslator(inputEng);
    expect(engToMorse).toHaveBeenCalledWith(inputEng);
    // expect(morseToEng, norseToEngDict).not.toHaveBeenCalled();
  });
  it("calls morseToEng(), if the input is in morse code", () => {
    // handleTranslator(inputMorse);
    // expect(morseToEng, norseToEngDict).toHaveBeenCalled();
    // expect(engToMorse).not.toHaveBeenCalled();
  });

  // it("calls inputValidator(), once it has been called with the input value", () => {
  //   // const mockValidator = jest.fn();
  //   const inputLetters = "abc";
  //   runTranslator(inputLetters);
  //   expect(mockValidator(inputLetters)).toHaveBeenCalled();
  // });
  // it("calls the engToMorse() if the input is a string with alphabets", () => {
  //   const eTM = jest.fn();
  //   const mTE = jest.fn();
  //   const inputLetters = "abc";
  //   inputValidator(inputLetters);
  //   expect(eTM).toHaveBeenCalledWith(inputLetters);
  //   expect(mTE).not.toHaveBeenCalledWith(inputLetters);
  // });
  // it("calls the morseToEng() if the input is a string with morse code", () => {
  //   const eTM = jest.fn();
  //   const mTE = jest.fn();
  //   const inputMorseCode = ".- -... -.-";
  //   inputValidator(inputMorseCode);
  //   expect(mTE).toHaveBeenCalledWith(inputMorseCode);
  //   expect(eTM).not.toHaveBeenCalledWith(inputMorseCode);
  // });
});
