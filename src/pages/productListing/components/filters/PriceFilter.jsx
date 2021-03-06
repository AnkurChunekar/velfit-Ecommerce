

export function PriceFilter({ maxPriceRange, filterDispatch }) {

  const handleMaxPriceRangeChange = (e) => {
    filterDispatch({ type: "PRICE_RANGE", payload: e.target.value });
  };

  return (
    <div className="price m-md1 m-rl0">
      <h5 className="fw-600">Price</h5>
      <div className="flex ai-center jc-space-b m-xxs m-rl0 endpoint-container">
        <span className="endpoint">0K</span>
        <span className="endpoint">2K</span>
        <span className="endpoint">4k</span>
        <span className="endpoint">6k</span>
        <span className="endpoint">8k</span>
        <span className="endpoint">10k</span>
      </div>
      <input
        type="range"
        min={0}
        max={10000}
        value={maxPriceRange}
        onChange={handleMaxPriceRangeChange}
      />
      <p className="m-xxs m-rl0">
        Maximum Upto: ₹ {maxPriceRange} <span id="slider-value" />
      </p>
    </div>
  );
}
