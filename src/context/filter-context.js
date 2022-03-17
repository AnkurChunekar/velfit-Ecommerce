import { createContext, useContext } from "react";

const defaultValue = { items: 22 };

const FilterContext = createContext(defaultValue);

const FilterProvider = ({ children }) =>  {
    return (
        <FilterContext.Provider value={{items: 22}} >
            {children}
        </FilterContext.Provider>
    );
}

const useFilter = () => useContext(FilterContext);

export { useFilter, FilterProvider };
