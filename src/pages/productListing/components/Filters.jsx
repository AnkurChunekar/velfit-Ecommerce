import FilterHeader from "./filters/FilterHeader";
import SortFilter from "./filters/SortFilter";
import RatingFilter from "./filters/RatingFilter";
import PriceFilter from "./filters/PriceFilter";
import CategoryFilter from "./filters/CategoryFilter";
import { useFilter } from "../../../context/index";

export default function Filters() {
  const { state, dispatch } = useFilter();
  const {
    sortBy,
    maxPriceRange,
    categoryWeights,
    categorySupplements,
    categoryEquipments,
    categoryAccessories,
  } = state;

  return (
    <aside className="filters-container p-xs">
      <FilterHeader />
      <PriceFilter maxPriceRange={maxPriceRange} dispatch={dispatch} />
      <CategoryFilter
        categoryAccessories={categoryAccessories}
        categoryWeights={categoryWeights}
        categorySupplements={categorySupplements}
        categoryEquipments={categoryEquipments}
        dispatch={dispatch}
      />
      <RatingFilter />
      <SortFilter sortBy={sortBy} dispatch={dispatch} />
    </aside>
  );
}
