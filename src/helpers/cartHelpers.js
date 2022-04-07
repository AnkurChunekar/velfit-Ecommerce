const cartPriceCalculator = (cart) => {
return cart.reduce((acc, curr) =>  ({ price: acc.price + ( curr.price * curr.qty ) }), { price: 0 });
}

const handleCouponDiscount = (price, selectedCoupon) => {
    return selectedCoupon && price > 5000
      ? price - price * (selectedCoupon / 100)
      : price;
  };

export { cartPriceCalculator, handleCouponDiscount };
