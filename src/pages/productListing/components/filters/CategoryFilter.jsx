export default function CategoryFilter({
  categoryWeights,
  categorySupplements,
  categoryEquipments,
  categoryAccessories,
  dispatch
}) {
  
  const handleWeightsChange = () => {
    dispatch({ type: "CATEGORY_WEIGHTS" });
  };

  const handleEquipmentsChange = () => {
    dispatch({ type: "CATEGORY_EQUIPMENTS" });
  };

  const handleSupplementsChange = () => {
    dispatch({ type: "CATEGORY_SUPPLEMENTS" });
  };

  const handleAccessoriesChange = () => {
    dispatch({ type: "CATEGORY_ACCESSORIES" });
  };

  return (
    <div className="m-md1 m-rl0">
      <h5 className="fw-600">Category</h5>
      <div className="input-wrapper checkbox m-s m-rl0">
        <input
          type="checkbox"
          id="weights"
          checked={categoryWeights}
          onChange={handleWeightsChange}
        />
        <label htmlFor="weights">Weights</label>
      </div>
      <div className="input-wrapper checkbox m-s m-rl0">
        <input type="checkbox" id="equipments" checked={categoryEquipments}
          onChange={handleEquipmentsChange} />
        <label htmlFor="equipments">Equipments</label>
      </div>
      <div className="input-wrapper checkbox m-s m-rl0">
        <input type="checkbox" id="supplements" checked={categorySupplements}
          onChange={handleSupplementsChange} />
        <label htmlFor="supplements">Supplements</label>
      </div>
      <div className="input-wrapper checkbox m-s m-rl0">
        <input type="checkbox" id="accessories" checked={categoryAccessories}
          onChange={handleAccessoriesChange} />
        <label htmlFor="accessories">Accessories</label>
      </div>
    </div>
  );
}
