
const isItemInArrayOfObjects = (array, callback) => array.findIndex(callback) === -1 ? false : true;

export { isItemInArrayOfObjects };
