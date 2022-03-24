const cartPriceCalculator = (cart) => {
return cart.reduce((acc, curr) =>  ({ price: acc.price + ( curr.price * curr.qty ) }), { price: 0 });
}

console.log("hello");

export { cartPriceCalculator };

/* 

cart = [
    {price, qty},
    { price, qty }
]
*/
