const isItemInArrayOfObjects = (array, callback) =>
  array.findIndex(callback) === -1 ? false : true;

const capitalizeFirstWordOfString = (str) =>
  str[0].toUpperCase() + str.slice(1, str.length);

const deepCloneObject = (obj) => JSON.parse(JSON.stringify(obj));

const getArrayOfNumbersTillN = (start, end) => {
  const result = [];
  for (let i = start; i < end + 1; i++) {
    result.push(i);
  }
  return result;
};

export { isItemInArrayOfObjects, capitalizeFirstWordOfString, deepCloneObject, getArrayOfNumbersTillN };
