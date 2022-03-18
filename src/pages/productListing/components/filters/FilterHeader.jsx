export default function FilterHeader({ dispatch }) {
  const handleReset = () => {
    dispatch({ type: "RESET" });
  };

  return (
    <header className="flex ai-center jc-space-b m-s m-rl0">
      <h3 className="fs-4 fw-600">Filters</h3>
      <button className="btn btn-link" onClick={handleReset}>
        Clear
      </button>
      <button className="filters-close-btn">
        {" "}
        <i className="fa-solid fa-circle-chevron-up" />{" "}
      </button>
    </header>
  );
}
