const initialCartState = {
    cart: [],
    totalPrice: 0
}

const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return { ...state, cart: action.payload.cart };
        default:
            return state;
    }
}

export { cartReducer, initialCartState };
