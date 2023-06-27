export const convertData = (data) => {
  let convertedData = {};

  // value: key
  for (const [key, value] of Object.entries(data)) {
    convertedData = { ...convertedData, [value]: key };
  }
  return convertedData;
};

export const dictionaryToLowerCase = (data) => {
  let convertedData = {};

  // uppercase to lowercase
  if (Object.keys(data).join("").match(/[A-Z]/g).length > 0) {
    for (const [key, value] of Object.entries(data)) {
      convertedData = { ...convertedData, [key.toLowerCase()]: value };
    }
  }

  return convertedData;
};

export const inputValidator = (value) => {
  // const regex = /[a-zA-Z0-9.,?!-'/@()]/g;
  // const matchedString = value.match(regex);
  // return matchedString
  //   ? matchedString.join("").trim().toLowerCase()
  //   : value.trim();

  return value.trim().toLowerCase();
};

export const isMorseCode = (value) =>
  value.startsWith(".") || value.startsWith("-");
