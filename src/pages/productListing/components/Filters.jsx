import FilterHeader from "./filters/FilterHeader";
import SortFilter from "./filters/SortFilter";
import RatingFilter from "./filters/RatingFilter";
import PriceFilter from "./filters/PriceFilter";
import CategoryFilter from "./filters/CategoryFilter";
import OtherFilters from "./filters/OtherFilters";
import { useFilter } from "../../../context/index";
import {useState} from "react";

export default function Filters() {
  const { filterState, filterDispatch } = useFilter();
  const [ isFiltersTabVisible, setIsFiltersTabVisible ] = useState(false);
  const {
    sortBy,
    maxPriceRange,
    categories,
    rating,
    removeOutOfStock,
    fastDeliveryOnly,
  } = filterState;

  return (
    <aside className={`filters-container p-xs ${isFiltersTabVisible ? "active" : ""}`}>
      <FilterHeader filterDispatch={filterDispatch} setIsFiltersTabVisible={setIsFiltersTabVisible} isFiltersTabVisible={isFiltersTabVisible} />
      <div className="mobile-filters-menu" >
      <PriceFilter maxPriceRange={maxPriceRange} filterDispatch={filterDispatch} />
      <CategoryFilter
        categories={categories}
        filterDispatch={filterDispatch}
      />
      <RatingFilter rating={rating} filterDispatch={filterDispatch} />
      <SortFilter sortBy={sortBy} filterDispatch={filterDispatch} />
      <OtherFilters removeOutOfStock={removeOutOfStock} fastDeliveryOnly={fastDeliveryOnly} filterDispatch={filterDispatch}  />
      </div>
    </aside>
  );
}
