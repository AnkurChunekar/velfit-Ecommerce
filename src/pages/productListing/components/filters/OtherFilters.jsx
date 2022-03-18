export default function OtherFilters({
  includeOutOfStock,
  fastDeliveryOnly,
  dispatch,
}) {
  const handleFastDeliveryChange = () => {
    dispatch({ type: "FAST_DELIVERY_ONLY" });
  };

  const handleIncludeOutOfStockChange = () => {
    dispatch({ type: "INCLUDE_OUT_OF_STOCK" });
  };

  return (
    <div className="sort m-md1 m-rl0">
      <h5 className="fw-600">Other Filters</h5>
      <div className="input-wrapper checkbox m-s m-rl0">
        <input
          type="checkbox"
          id="fast-delivery"
          checked={fastDeliveryOnly}
          onChange={handleFastDeliveryChange}
        />
        <label className="input-label2" htmlFor="fast-delivery">
          Fast Delivery Only
        </label>
      </div>
      <div className="input-wrapper checkbox m-s m-rl0">
        <input
          type="checkbox"
          id="include-out-of-stock"
          checked={includeOutOfStock}
          onChange={handleIncludeOutOfStockChange}
        />
        <label className="input-label2" htmlFor="include-out-of-stock">
          Include Out Of Stock
        </label>
      </div>
    </div>
  );
}
