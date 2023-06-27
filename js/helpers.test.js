import { convertData, dictionaryToLowerCase, inputValidator } from "./helpers";

describe("Testing convertData() function", () => {
  const obj = { a: ".-", b: "-..." };
  const convertedObj = {
    ".-": "a",
    "-...": "b",
  };

  it("swaps key-value pair of the given object", () => {
    expect(convertData({ a: "alph", b: "beta" })).toEqual({
      alph: "a",
      beta: "b",
    });
  });
});

describe("Testing inputValidator() function", () => {
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

  it("trims whitespaces", () => {
    expect(inputValidator(" hi there  ")).toBe("hi there");
  });

  it("returns alphbets in lower case", () => {
    expect(inputValidator("HELLO WORLD")).toBe("hello world");
  });
});
