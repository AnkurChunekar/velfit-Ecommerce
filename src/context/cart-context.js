import { createContext, useContext, useReducer } from "react";
import { cartReducer, initialCartState } from "../reducers";

const defaultValue = {
    cartState: {},
    cartDispatch: () => {}
};

const CartContext = createContext(defaultValue);

const CartProvider = ({ children }) => {

    const [cartState, cartDispatch] = useReducer(cartReducer, initialCartState);

    return (
        <CartContext.Provider value={{ cartState, cartDispatch }}>
            {children}
        </CartContext.Provider>
    );

};

const useCart = () => useContext(CartContext);

export { useCart, CartProvider };
