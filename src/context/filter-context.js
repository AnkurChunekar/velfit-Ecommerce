import { createContext, useContext, useReducer } from "react";

const defaultValue = {
  sortBy: null,
  categoryWeights: false,
  categorySupplements: false,
  categoryEquipments: false,
  categoryAccessories: false,
  rating: null,
  maxPriceRange: 10000
};

const FilterContext = createContext(defaultValue);


const FilterProvider = ({ children }) => {

  const initialstate = {
    sortBy: null,
    categoryWeights: false,
    categorySupplements: false,
    categoryEquipments: false,
    categoryAccessories: false,
    rating: null,
    maxPriceRange: 10000
  }

  const reducerFn = (state, action) => {
    switch (action.type) {
      case "SORT_BY":
        return { ...state, sortBy: action.payload }
      case "RATING":
        return { ...state, rating: action.payload }
      case "CATEGORY_WEIGHTS":
        return { ...state, categoryWeights: !state.categoryWeights };
      case "CATEGORY_SUPPLEMENTS":
        return { ...state, categorySupplements: !state.categorySupplements };
      case "CATEGORY_EQUIPMENTS":
        return { ...state, categoryEquipments: !state.categoryEquipments };
      case "CATEGORY_ACCESSORIES":
        return { ...state, categoryAccessories: !state.categoryAccessories };
      case "PRICE_RANGE":
        return { ...state, maxPriceRange: action.payload }
      case "RESET":
        return initialstate;
      default:
        return state;
    }
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
