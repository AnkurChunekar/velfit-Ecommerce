const initialWishlistState = { wishlist: [] }

const wishlistReducer = (state, action) => {
    switch (action.type) {
        case "UPDATE_WISHLIST":
            return { wishlist: action.payload.wishlist };
        case "RESET":
            return initialWishlistState;
        default:
            return state;
    }
}

export { wishlistReducer, initialWishlistState };
