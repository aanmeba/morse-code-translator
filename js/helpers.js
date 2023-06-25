export const convertData = (data) => {
  let convertedData = {};
  for (const [key, value] of Object.entries(data)) {
    convertedData = { ...convertedData, [value]: key };
  }
  return convertedData;
};
