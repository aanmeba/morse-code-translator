export const convertData = (data) => {
  let convertedData = {};

  for (const [key, value] of Object.entries(data)) {
    convertedData = { ...convertedData, [value]: key };
  }
  return convertedData;
};

export const isMorseCode = (value) =>
  value.startsWith(".") || value.startsWith("-");

export const validateInput = (value) => {
  const regex = /[a-zA-Z0-9.,?!\'/@() -]+/g;

  let updatedValue = value.trim().toLowerCase();

  if (updatedValue.match(regex)) {
    updatedValue = updatedValue.match(regex).join("");
  }

  return updatedValue;
};
