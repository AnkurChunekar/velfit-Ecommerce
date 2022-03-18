import FilterHeader from "./filters/FilterHeader";
import SortFilter from "./filters/SortFilter";
import RatingFilter from "./filters/RatingFilter";
import PriceFilter from "./filters/PriceFilter";
import CategoryFilter from "./filters/CategoryFilter";
import OtherFilters from "./filters/OtherFilters";
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
    rating,
    includeOutOfStock,
    fastDeliveryOnly,
  } = state;

  return (
    <aside className="filters-container p-xs">
      <FilterHeader dispatch={dispatch} />
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
    </aside>
  );
}
