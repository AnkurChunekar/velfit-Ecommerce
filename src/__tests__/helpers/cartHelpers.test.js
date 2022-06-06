import {
  cartPriceCalculator,
  calculateCouponedPrice,
} from "../../helpers/cartHelpers";

describe("testing auth helpers", () => {
  // test for cartPriceCalculator
  test("should calculate and return the total cart price based on item price and quantity", () => {
    const cart = [
      { price: 40, qty: 1 },
      { price: 50, qty: 2 },
      { price: 60, qty: 3 },
    ];

    expect(cartPriceCalculator(cart)).toEqual({ price: 320 });
  });

  // test for cartPriceCalculator
  test("should calculate and return discounted price after applying coupon if price is less than 5000", () => {
    expect(calculateCouponedPrice(10000, 10)).toBe(9000);
    // if value is below 5000 returns the same value.
    expect(calculateCouponedPrice(4000, 10)).toBe(4000);
  });
});
