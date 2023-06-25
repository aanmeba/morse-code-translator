import { dictionary } from "./dictionary.js";
import {
  // readJSON,
  convertData,
  inputValidator,
  engToMorse,
  morseToEng,
  runTranslator,
} from "./translator.js";

// describe("Testing readJSON() function", () => {
//   // read the json file correctly
//   it("works with async/await", async() => {
//     expect.assertion(2)
//     const data = await.
//   });
// });

describe("Testing convertData() function", () => {
  const obj = { A: ".-", B: "-..." };
  const convertedObj = {
    ".-": "A",
    "-...": "B",
  };
  it("swaps key-value pair of the given object", () => {
    expect(convertData({ a: "alph", b: "beta" })).toEqual({
      alph: "a",
      beta: "b",
    });
    // expect(convertData(obj)).toEqual(convertedObj);
  });
});

describe("Testing inputValidator() function", () => {
  // check if the input is valid
  const errorMsg = "Your input should be either English or Morse code";
  it("throws an error if the input is not a string", () => {
    expect(() => {
      inputValidator(true);
    }).toThrow(errorMsg);
    expect(() => {
      inputValidator(123);
    }).toThrow(errorMsg);
    expect(() => {
      inputValidator(["abc"]);
    }).toThrow(errorMsg);
    expect(() => {
      inputValidator({ abc: "abc" });
    }).toThrow(errorMsg);
  });
});

describe("Testing engToMorse() function", () => {
  // return a correct value
  const inputStr = "hi there";
  it("returns a correct morse code depending on the input", () => {
    expect(engToMorse(dictionary, inputStr)).toBe(".... ..    - .... . .-. .");
  });
  // it("has a single space between alphabets", () => {
  //   expect(engToMorse(dictionary, inputStr)).toBe();
  // });
  // it("has ' / ' between words", () => {
  //   expect(engToMorse(dictionary, inputStr)).toBe();
  // });
});
describe("Testing morseToEng() function", () => {
  // return a correct value
  it("returns a string in English depending on the input", () => {
    expect(morseToEng);
  });
});

describe("Testing runTranslator() function", () => {
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
