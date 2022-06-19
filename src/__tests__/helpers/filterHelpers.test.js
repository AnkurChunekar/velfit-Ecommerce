import {
  categorizeData,
  rateData,
  filterProductsUptoPriceRange,
  getOnlyFastDeliveryData,
  getStockData,
  sortData,
  getCurrentPageProducts,
  getFilteredProducts,
} from "../../helpers/filterHelpers";

describe("testing filter helpers", () => {
  // Test for sortData
  test("should sort the data based on price and given argument", () => {
    const data = [
      { id: "1", price: "100" },
      { id: "2", price: "50" },
      { id: "3", price: "150" },
    ];

    const finalData1 = [
      { id: "2", price: "50" },
      { id: "1", price: "100" },
      { id: "3", price: "150" },
    ];

    const finalData2 = [
      { id: "3", price: "150" },
      { id: "1", price: "100" },
      { id: "2", price: "50" },
    ];
    expect(sortData(data, "LOW_TO_HIGH")).toEqual(finalData1);
    expect(sortData(data, "HIGH_TO_LOW")).toEqual(finalData2);
  });

  // Test for categorizeData
  test("should return an array having products of the specified categories", () => {
    const data = [
      { id: "1", categoryName: "weights", title: "dumbbels" },
      { id: "2", categoryName: "equipments", title: "machine" },
      { id: "3", categoryName: "supplements", title: "protien" },
      { id: "4", categoryName: "accessories", title: "rope" },
    ];

    const result = [
      { id: "1", categoryName: "weights", title: "dumbbels" },
      { id: "3", categoryName: "supplements", title: "protien" },
    ];
    expect(categorizeData(data, ["weights", "supplements"])).toEqual(result);
  });

  // Test for filterProductsUptoPriceRange
  test("should return products whose price is below the maxPriceRange", () => {
    const data = [
      { id: "1", price: 4000, title: "dumbbels" },
      { id: "2", price: 6000, title: "machine" },
      { id: "3", price: 3000, title: "protien" },
      { id: "4", price: 7499, title: "rope" },
    ];

    const result = [
      { id: "1", price: 4000, title: "dumbbels" },
      { id: "3", price: 3000, title: "protien" },
    ];
    expect(filterProductsUptoPriceRange(data, 5000)).toEqual(result);
  });

  // Test for rateData
  test("should return products whose rating is equal or above the given rating", () => {
    const data = [
      { id: "1", rating: 4, title: "dumbbels" },
      { id: "2", rating: 2, title: "machine" },
      { id: "3", rating: 5, title: "protien" },
      { id: "4", rating: 3, title: "rope" },
    ];

    const result = [
      { id: "1", rating: 4, title: "dumbbels" },
      { id: "3", rating: 5, title: "protien" },
    ];
    expect(rateData(data, 4)).toEqual(result);
  });

  // Test for getOnlyFastDeliveryData
  test("should return products whose isFastDelivered property is set to true", () => {
    const data = [
      { id: "1", isDeliveredFast: true, title: "dumbbels" },
      { id: "2", isDeliveredFast: false, title: "machine" },
      { id: "3", isDeliveredFast: true, title: "protien" },
      { id: "4", isDeliveredFast: false, title: "rope" },
    ];

    const result = [
      { id: "1", isDeliveredFast: true, title: "dumbbels" },
      { id: "3", isDeliveredFast: true, title: "protien" },
    ];
    expect(getOnlyFastDeliveryData(data, true)).toEqual(result);
  });

  // Test for getStockData
  test("should return products whose inStock property is set to true", () => {
    const data = [
      { id: "1", inStock: true, title: "dumbbels" },
      { id: "2", inStock: false, title: "machine" },
      { id: "3", inStock: true, title: "protien" },
      { id: "4", inStock: false, title: "rope" },
    ];

    const result = [
      { id: "1", inStock: true, title: "dumbbels" },
      { id: "3", inStock: true, title: "protien" },
    ];
    expect(getStockData(data, true)).toEqual(result);
  });

  // Test for getCurrentPageProducts
  test("should return products according to the given page number (6 products per page)", () => {
    const data = [
      { id: "1", title: "dumbbels" },
      { id: "2", title: "machine" },
      { id: "3", title: "protien" },
      { id: "4", title: "rope" },
      { id: "5", title: "shirt" },
      { id: "6", title: "pants" },
      { id: "7", title: "tie" },
      { id: "8", title: "shoe" },
      { id: "9", title: "watch" },
      { id: "10", title: "socks" },
      { id: "11", title: "sunglasses" },
      { id: "12", title: "cap" },
      { id: "13", title: "bag" },
    ];

    const result = [
      { id: "7", title: "tie" },
      { id: "8", title: "shoe" },
      { id: "9", title: "watch" },
      { id: "10", title: "socks" },
      { id: "11", title: "sunglasses" },
      { id: "12", title: "cap" },
    ];
    expect(getCurrentPageProducts(data, 2)).toEqual(result);
  });

  // Test for getFilteredProducts
  test("should return products whose inStock property is set to true", () => {
    const data = [
      {
        id: "1",
        price: 9000,
        categoryName: "weights",
        isDeliveredFast: false,
        inStock: true,
        title: "dumbbels",
      },
      {
        id: "2",
        price: 4000,
        categoryName: "equipments",
        isDeliveredFast: true,
        inStock: true,
        title: "machine",
      },
      {
        id: "3",
        price: 3000,
        categoryName: "supplements",
        isDeliveredFast: false,
        inStock: true,
        title: "protien",
      },
      {
        id: "4",
        price: 4599,
        categoryName: "equipments",
        isDeliveredFast: false,
        inStock: false,
        title: "rope",
      },
      {
        id: "5",
        price: 5009,
        categoryName: "equipments",
        isDeliveredFast: false,
        inStock: true,
        title: "rope",
      },
    ];

    const filterState = {
      sortBy: "LOW_TO_HIGH",
      rating: null,
      removeOutOfStock: true,
      fastDeliveryOnly: false,
      maxPriceRange: 6000,
      categories: ["weights", "equipments"],
    };

    const result = [
      {
        id: "2",
        price: 4000,
        categoryName: "equipments",
        isDeliveredFast: true,
        inStock: true,
        title: "machine",
      },
      {
        id: "5",
        price: 5009,
        categoryName: "equipments",
        isDeliveredFast: false,
        inStock: true,
        title: "rope",
      },
    ];

    expect(getFilteredProducts(data, filterState)).toEqual(result);
  });
});
