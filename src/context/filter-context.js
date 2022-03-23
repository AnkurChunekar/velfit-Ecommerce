import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../redux/filterReducer";

const defaultValue = { filterState: {}, filterDispatch: () => {}};

const FilterContext = createContext(defaultValue);


const FilterProvider = ({ children }) => {

  const initialstate = {
    sortBy: null,
    rating: null,
    removeOutOfStock: false,
    fastDeliveryOnly: false,
    maxPriceRange: 10000,
    categories: []
}

  const [filterState, filterDispatch] = useReducer(filterReducer, initialstate);

  return (
    <FilterContext.Provider value={{ filterState, filterDispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => useContext(FilterContext);

export { FilterProvider, useFilter };
