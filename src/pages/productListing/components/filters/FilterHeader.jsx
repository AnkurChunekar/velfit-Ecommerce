export function FilterHeader({ filterDispatch, setIsFiltersTabVisible, isFiltersTabVisible }) {
  const handleReset = () => {
    filterDispatch({ type: "RESET" });
  };

  return (
    <header className="flex ai-center jc-space-b">
      <h3 className="fs-4 fw-600">Filters</h3>
      <button className="btn btn-link" onClick={handleReset}>
        Clear
      </button>
    </header>
  );
}
