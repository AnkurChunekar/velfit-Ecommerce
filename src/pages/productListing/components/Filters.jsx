import { useState } from "react";
import { useFilter } from "../../../context";
import {
  FilterHeader,
  SortFilter,
  RatingFilter,
  PriceFilter,
  CategoryFilter,
  OtherFilters,
} from "./filters/index";

export function Filters() {
  const { filterState, filterDispatch } = useFilter();
  const [isFiltersTabVisible, setIsFiltersTabVisible] = useState(false);
  const {
    sortBy,
    maxPriceRange,
    categories,
    rating,
    removeOutOfStock,
    fastDeliveryOnly,
  } = filterState;

  return (
    <aside
      className={`filters-container p-xs ${
        isFiltersTabVisible ? "active" : ""
      }`}
    >
      <FilterHeader
        filterDispatch={filterDispatch}
        setIsFiltersTabVisible={setIsFiltersTabVisible}
        isFiltersTabVisible={isFiltersTabVisible}
      />
      <div className="mobile-filters-menu">
        <PriceFilter
          maxPriceRange={maxPriceRange}
          filterDispatch={filterDispatch}
        />
        <CategoryFilter
          categories={categories}
          filterDispatch={filterDispatch}
        />
        <RatingFilter rating={rating} filterDispatch={filterDispatch} />
        <SortFilter sortBy={sortBy} filterDispatch={filterDispatch} />
        <OtherFilters
          removeOutOfStock={removeOutOfStock}
          fastDeliveryOnly={fastDeliveryOnly}
          filterDispatch={filterDispatch}
        />
      </div>
    </aside>
  );
}
