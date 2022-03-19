import { createContext, useContext } from "react";

const defaultValue = {items: 22};

const AuthContext = createContext(defaultValue);

const AuthProvider = ({ children }) => {
    return (
        <AuthContext.Provider value={{items: 22}} >
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
