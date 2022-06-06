import {
  isItemInArrayOfObjects,
  capitalizeFirstWordOfString,
  deepCloneObject,
  getArrayOfNumbers,
} from "../../helpers";

describe("testing utility helpers", () => {
  test("should return true if given item is prsent in the array of objects", () => {
    const data = [
      {
        id: "1",
        firstName: "raj",
        lastName: "malhotra",
      },
      {
        id: "2",
        firstName: "ankur",
        lastName: "chunekar",
      },
      {
        id: "3",
        firstName: "juhi",
        lastName: "chawla",
      },
    ];

    expect(
      isItemInArrayOfObjects(data, (item) => item.firstName === "ankur")
    ).toBe(true);
    expect(isItemInArrayOfObjects(data, (item) => item.id === "1")).toBe(true);
    expect(
      isItemInArrayOfObjects(data, (item) => item.firstName === "priety")
    ).toBe(false);
  });

  test("should return true if given item is prsent in the array of objects", () => {
    expect(capitalizeFirstWordOfString("hello")).toBe("Hello");
  });

  test("should return deep copy of given object", () => {
    const obj = {
      id: "12",
      name: "ankur",
      surname: "chunekar",
    };
    expect(deepCloneObject(obj)).toEqual({
      id: "12",
      name: "ankur",
      surname: "chunekar",
    });
    expect(deepCloneObject(obj)).not.toBe(obj);
  });

  test("should return an array containing numbers from start to end both specified in arguments", () => {
    expect(getArrayOfNumbers(5, 10)).toEqual([5, 6, 7, 8, 9, 10]);
  });
});
