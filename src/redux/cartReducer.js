const initialCartState = { cart: [] }

const cartReducer = (state, action) => {
    switch (action.type) {
        case "UPDATE_CART":
            return { ...state, cart: action.payload.cart };
        case "RESET":
            return initialCartState;
        default:
            return state;
    }
}

export { cartReducer, initialCartState };
