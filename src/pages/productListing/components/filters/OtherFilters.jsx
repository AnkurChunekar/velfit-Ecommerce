export default function OtherFilters({
  removeOutOfStock,
  fastDeliveryOnly,
  dispatch,
}) {
  const handleFastDeliveryChange = () => {
    dispatch({ type: "FAST_DELIVERY_ONLY" });
  };

  const handleRemoveOutOfStockChange = () => {
    dispatch({ type: "REMOVE_OUT_OF_STOCK" });
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
          id="remove-out-of-stock"
          checked={removeOutOfStock}
          onChange={handleRemoveOutOfStockChange}
        />
        <label className="input-label2" htmlFor="remove-out-of-stock">
          Remove Out Of Stock
        </label>
      </div>
    </div>
  );
}
