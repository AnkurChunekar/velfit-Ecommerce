import { createContext, useContext, useReducer } from "react";

const defaultValue = {
  sortBy: null,
  maxPriceRange: 10000
};

const FilterContext = createContext(defaultValue);


const FilterProvider = ({ children }) => {

  const reducerFn = (state, action) => {
    switch (action.type) {
      case "SORT_BY":
        return { ...state, sortBy: action.payload }
        case "CATEGORIZE":
          return { ...state }
      case "PRICE_RANGE":
        return { ...state, maxPriceRange: action.payload }
      default:
        return state;
    }
  }

  const initialstate = {
    sortBy: null,
    category: null,
    maxPriceRange: 10000
  }

  const [state, dispatch] = useReducer(reducerFn, initialstate);

  return (
    <FilterContext.Provider value={{ state, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => useContext(FilterContext);

export { FilterProvider, useFilter };
