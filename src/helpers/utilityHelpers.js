
const isItemInArrayOfObjects = (array, callback) => array.findIndex(callback) === -1 ? false : true;

const capitalizeFirstWordOfString = str =>  str.slice(0, 1).toUpperCase() + str.slice(1, str.length);

export { isItemInArrayOfObjects, capitalizeFirstWordOfString };
