import { createContext, useContext, useReducer } from "react";

const defaultValue = { items: 22 };

const AuthContext = createContext(defaultValue);

const AuthProvider = ({ children }) => {

    const initialAuthState = {
    }

    const authReducer = () => {

    }

    const [authState, authDispatch] = useReducer(authReducer, initialAuthState);


    return (
        <AuthContext.Provider value={{ authDispatch, authState }} >
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
