import { checkIfAllInputsAreNotEmpty } from "../../helpers/authHelpers";

describe("testing auth helpers", () => {
  test("should return false if any of the properties of given object has an empty string value", () => {
    const obj1 = { name: "ankur", surname: "chunekar" };
    const obj2 = { name: "", surname: "chunekar" };
    expect(checkIfAllInputsAreNotEmpty(obj1)).toBe(true);
    expect(checkIfAllInputsAreNotEmpty(obj2)).toBe(false);
  });
});
