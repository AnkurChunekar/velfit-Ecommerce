import FilterHeader from "./filters/FilterHeader";
import SortFilter from "./filters/SortFilter";
import RatingFilter from "./filters/RatingFilter";
import PriceFilter from "./filters/PriceFilter";
import CategoryFilter from "./filters/CategoryFilter";

export default function Filters() {
  return (
    <aside className="filters-container p-xs">
      <FilterHeader />
      <PriceFilter />
      <CategoryFilter />
      <RatingFilter />
      <SortFilter />
    </aside>
  );
}
