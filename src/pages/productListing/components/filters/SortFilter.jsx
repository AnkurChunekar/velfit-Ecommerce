export default function SortFilter({ sortBy, dispatch }) {
  return (
    <div className="sort m-md1 m-rl0">
      <h5 className="fw-600">Sort By</h5>
      <div className="input-wrapper radio m-s m-rl0">
        <input type="radio" name="sort" id="low-high" checked={sortBy === "HIGH_TO_LOW"} />
        <label className="input-label2" htmlFor="low-high">
          Low to High
        </label>
      </div>
      <div className="input-wrapper radio m-s m-rl0">
        <input type="radio" name="sort" id="high-low" checked={sortBy === "LOW_TO_HIGH"} />
        <label className="input-label2" htmlFor="high-low">
          High to Low
        </label>
      </div>
    </div>
  );
}
