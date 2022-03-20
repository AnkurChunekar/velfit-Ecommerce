import { createContext, useContext, useReducer } from "react";
import { cartReducer, initialCartState } from "../redux";

const defaultValue = {};

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
