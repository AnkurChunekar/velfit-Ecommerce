const initialWishlistState = { wishlist: [] }

const wishlistReducer = (state, action) => {
    switch (action.type) {
        case "TRIAL":
            return state;
        default:
            return state;
    }
}

export { wishlistReducer, initialWishlistState };
