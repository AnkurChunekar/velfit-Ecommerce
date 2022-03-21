const initialCartState = {
    cart: [],
    totalPrice: 0
}

const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return { ...state, cart: action.payload.cart, totalPrice: state.totalPrice + action.payload.price };
        case "REMOVE_FROM_CART":
            return { ...state, cart: action.payload.cart, totalPrice: state.totalPrice - action.payload.price };
        default:
            return state;
    }
}

export { cartReducer, initialCartState };
