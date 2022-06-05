import { wishlistReducer, initialWishlistState } from "../../reducers";

describe("testing wishlist reducer", () => {
  test("should reset the wishlist state when RESET is dispatched", () => {
    const initialState = { wishlist: [{ title: "Men Shirt", id: "1234" }] };
    const action = { type: "RESET" };
    const finalState = { wishlist: [] };

    expect(wishlistReducer(initialState, action)).toEqual(finalState);
  });

  test("should update the wishlist array with new items", () => {
    const action = {
      type: "UPDATE_WISHLIST",
      payload: { wishlist: [{ id: "1234", title: "New Shirt" }] },
    };
    const finalState = { wishlist: [{ id: "1234", title: "New Shirt" }] };

    expect(wishlistReducer(initialWishlistState, action)).toEqual(finalState);
  });
});
