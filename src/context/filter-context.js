import { createContext, useContext, useReducer } from "react";

const defaultValue = {
  state: {
    sortBy: null,
    includeOutOfStock: false,
    onlyFastDelivery: false,
    maxRangePrice: 10000
  },
  dispatch: () => {}
};

const FilterContext = createContext(defaultValue);

const FilterProvider = ({ children }) => {
  const reducerFn = (state, action) => {
    switch (action.type) {
      case "SORT_BY":
        return { ...state, sortBy: action.payload };
      case "INCLUDE_OUT_OF_STOCK":
        return { ...state, includeOutOfStock: !state.includeOutOfStock };
      case "FAST_DELIVERY":
        return { ...state, onlyFastDelivery: !state.onlyFastDelivery };
      case "MAX_RANGE_PRICE":
        return { ...state, maxRangePrice: action.payload };
      case "RESET":
        return initialState;
      default:
        return state;
    }
  };

  const initialState = {
    sortBy: null,
    includeOutOfStock: false,
    onlyFastDelivery: false,
    maxRangePrice: 10000
  };

  const [state, dispatch] = useReducer(reducerFn, initialState);

  return (
    <FilterContext.Provider value={{ state, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => useContext(FilterContext);

export { FilterProvider, useFilter };
