import { cartReducer, initialCartState } from "../../reducers";

describe("testing cart reducer", () => {
  test("should reset the cart state when RESET is dispatched", () => {
    const initialState = { cart: [{ title: "Men Shirt", id: "1234" }] };
    const action = { type: "RESET" };
    const finalState = { cart: [] };

    expect(cartReducer(initialState, action)).toEqual(finalState);
  });

  test("should update the cart array with new items", () => {
    const action = {
      type: "UPDATE_CART",
      payload: { cart: [{ id: "1234", title: "New Shirt" }] },
    };
    const finalState = { cart: [{ id: "1234", title: "New Shirt" }] };

    expect(cartReducer(initialCartState, action)).toEqual(finalState);
  });
});
