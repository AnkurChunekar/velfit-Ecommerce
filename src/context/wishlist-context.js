import { createContext, useContext, useReducer } from "react";
import { wishlistReducer, initialWishlistState } from "../redux";

const defaultValue = {
    wishlistState: {},
    wishlistDispatch: () => {}
};

const WishlistContext = createContext(defaultValue);

const WishlistProvider = ({ children }) => {

    const [wishlistState, wishlistDispatch] = useReducer(wishlistReducer, initialWishlistState);

    return (
        <WishlistContext.Provider value={{ wishlistState, wishlistDispatch }}>
            {children}
        </WishlistContext.Provider>
    );

};

const useWishlist = () => useContext(WishlistContext);

export { useWishlist, WishlistProvider };
