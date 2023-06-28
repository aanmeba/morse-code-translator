import { convertData, isMorseCode, validateInput } from "./helpers";

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

describe("Testing validateInput() function", () => {
  it("turns an input string into lower case", () => {
    expect(validateInput("HELLO")).toBe("hello");
    expect(validateInput("woRlD")).toBe("world");
  });

  it("trims whitespaces", () => {
    expect(validateInput("  orange ")).toBe("orange");
  });

  it("removes invalid characters", () => {
    expect(validateInput("abc&#-*@!word")).toBe("abc-@!word");
    expect(validateInput("$`heLLO@worLd,./=")).toBe("hello@world,./");
  });
});

describe("Testing isMorseCode() function", () => {
  it("returns true if the input starts with either . or -", () => {
    expect(isMorseCode("-..-")).toBe(true);
    expect(isMorseCode(".abc-")).toBe(true);
  });
  it("returns false if the input starts with invalid characters", () => {
    expect(isMorseCode("*-..-")).toBe(false);
    expect(isMorseCode("135abc-")).toBe(false);
  });
});
