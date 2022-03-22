import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../redux/filterReducer";

const defaultValue = { state: {}, dispatch: () => {}};

const FilterContext = createContext(defaultValue);


const FilterProvider = ({ children }) => {

  const initialstate = {
    sortBy: null,
    rating: null,
    includeOutOfStock: true,
    fastDeliveryOnly: false,
    maxPriceRange: 10000,
    categories: []
}

  const [state, dispatch] = useReducer(filterReducer, initialstate);

  return (
    <FilterContext.Provider value={{ state, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => useContext(FilterContext);

export { FilterProvider, useFilter };
