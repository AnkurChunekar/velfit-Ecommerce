import { filterReducer, initialFilterState } from "../../reducers";

describe("testing filter reducer", () => {
  //   Test for SORT BY
  test("should update the sortBy value of filterState", () => {
    const action = { type: "SORT_BY", payload: "LOW_TO_HIGH" };
    const finalState = {
      sortBy: "LOW_TO_HIGH",
      rating: null,
      removeOutOfStock: false,
      fastDeliveryOnly: false,
      maxPriceRange: 10000,
      categories: [],
    };

    expect(filterReducer(initialFilterState, action)).toEqual(finalState);
  });

  // Test for RATING
  test("should update the rating value of filterState", () => {
    const action = { type: "RATING", payload: 2 };
    const finalState = {
      sortBy: null,
      rating: 2,
      removeOutOfStock: false,
      fastDeliveryOnly: false,
      maxPriceRange: 10000,
      categories: [],
    };

    expect(filterReducer(initialFilterState, action)).toEqual(finalState);
  });

  // Test for CATEGORIES
  test("should toggle the given category from filterState categories", () => {
    const action = { type: "CATEGORY_CHANGE", payload: "weights" };
    const finalState = {
      sortBy: null,
      rating: null,
      removeOutOfStock: false,
      fastDeliveryOnly: false,
      maxPriceRange: 10000,
      categories: ["weights"],
    };

    expect(filterReducer(initialFilterState, action)).toEqual(finalState);
  });

  // Test for SINGLE CATEGORY
  test("should keep only the given category in the filterState categories", () => {
    const action = { type: "SINGLE_CATEGORY", payload: "weights" };
    const finalState = {
      sortBy: null,
      rating: null,
      removeOutOfStock: false,
      fastDeliveryOnly: false,
      maxPriceRange: 10000,
      categories: ["weights"],
    };

    expect(filterReducer(initialFilterState, action)).toEqual(finalState);
  });

  // Test for PRICE RANGE
  test("should update the maxPriceRange property in the filterState", () => {
    const action = { type: "PRICE_RANGE", payload: 4000 };
    const finalState = {
      sortBy: null,
      rating: null,
      removeOutOfStock: false,
      fastDeliveryOnly: false,
      maxPriceRange: 4000,
      categories: [],
    };

    expect(filterReducer(initialFilterState, action)).toEqual(finalState);
  });

  // Test for REMOVE OUT OF STOCK
  test("should toggle the removeOutOfStock property in the filterState", () => {
    const action = { type: "REMOVE_OUT_OF_STOCK" };
    const finalState = {
      sortBy: null,
      rating: null,
      removeOutOfStock: true,
      fastDeliveryOnly: false,
      maxPriceRange: 10000,
      categories: [],
    };

    expect(filterReducer(initialFilterState, action)).toEqual(finalState);
  });

  // Test for FAST DELIVERY ONLY
  test("should toggle the fastDeliveryOnly property in the filterState", () => {
    const action = { type: "FAST_DELIVERY_ONLY" };
    const finalState = {
      sortBy: null,
      rating: null,
      removeOutOfStock: false,
      fastDeliveryOnly: true,
      maxPriceRange: 10000,
      categories: [],
    };

    expect(filterReducer(initialFilterState, action)).toEqual(finalState);
  });

  // Test for RESET
  test("should reset the filterState to initialFilterState", () => {
    const initialState = {
      sortBy: "HIGH_TO_LOW",
      rating: 4,
      removeOutOfStock: true,
      fastDeliveryOnly: true,
      maxPriceRange: 4000,
      categories: ["weights"],
    };
    const action = { type: "RESET" };

    expect(filterReducer(initialState, action)).toEqual(initialFilterState);
  });
});
