import FilterHeader from "./filters/FilterHeader";
import SortFilter from "./filters/SortFilter";
import RatingFilter from "./filters/RatingFilter";
import PriceFilter from "./filters/PriceFilter";
import CategoryFilter from "./filters/CategoryFilter";
import OtherFilters from "./filters/OtherFilters";
import { useFilter } from "../../../context/index";
import {useState} from "react";

export default function Filters() {
  const { state, dispatch } = useFilter();
  const [ isFiltersTabVisible, setIsFiltersTabVisible ] = useState(false);
  const {
    sortBy,
    maxPriceRange,
    categoryWeights,
    categorySupplements,
    categoryEquipments,
    categoryAccessories,
    rating,
    includeOutOfStock,
    fastDeliveryOnly,
  } = state;

  return (
    <aside className={`filters-container p-xs ${isFiltersTabVisible ? "active" : ""}`}>
      <FilterHeader dispatch={dispatch} setIsFiltersTabVisible={setIsFiltersTabVisible} isFiltersTabVisible={isFiltersTabVisible} />
      <div className="mobile-filters-menu" >
      <PriceFilter maxPriceRange={maxPriceRange} dispatch={dispatch} />
      <CategoryFilter
        categoryAccessories={categoryAccessories}
        categoryWeights={categoryWeights}
        categorySupplements={categorySupplements}
        categoryEquipments={categoryEquipments}
        dispatch={dispatch}
      />
      <RatingFilter rating={rating} dispatch={dispatch} />
      <SortFilter sortBy={sortBy} dispatch={dispatch} />
      <OtherFilters includeOutOfStock={includeOutOfStock} fastDeliveryOnly={fastDeliveryOnly} dispatch={dispatch}  />
      </div>
    </aside>
  );
}
