import { createContext, useContext, useReducer } from "react";
import { authReducer } from "../redux/index";

const defaultValue = { user: "", token: "" };

const AuthContext = createContext(defaultValue);

const AuthProvider = ({ children }) => {

    const initialAuthState = { user: "", token: "" };

    const [authState, authDispatch] = useReducer(authReducer, initialAuthState);

    return (
        <AuthContext.Provider value={{ authDispatch, authState }} >
            {children}
        </AuthContext.Provider>
    );
}

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
