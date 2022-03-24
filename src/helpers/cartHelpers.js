const cartPriceCalculator = (cart) => {
return cart.reduce((acc, curr) =>  ({ price: acc.price + ( curr.price * curr.qty ) }), { price: 0 });
}

export { cartPriceCalculator };
