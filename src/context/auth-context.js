import { createContext, useContext, useReducer } from "react";

const defaultValue = { user: "", token: "" };

const AuthContext = createContext(defaultValue);

const AuthProvider = ({ children }) => {

    const initialAuthState = {
        user: "",
        token: ""
    }

    const authReducer = (state, action) => {
        switch (action.type) {
            case "SIGN_UP":
                return { user: action.payload.user, token: action.payload.token };
            case "LOGIN":
                return { user: action.payload.user, token: action.payload.token };
            case "LOGOUT":
                return initialAuthState;
            default:
                return state;
        }
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
