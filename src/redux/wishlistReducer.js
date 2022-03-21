const initialWishlistState = { wishlist: [] }

const wishlistReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_WISHLIST":
            return { ...state, wishlist: action.payload.wishlist };
        case "REMOVE_FROM_WISHLIST":
            return { ...state, wishlist: action.payload.wishlist };
        default:
            return state;
    }
}

export { wishlistReducer, initialWishlistState };
