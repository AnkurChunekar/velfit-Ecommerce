import { useEffect } from "react";
import { getArrayOfNumbersTillN } from "../../../helpers/utilityHelpers";

export default function PaginationRow({
  currentPage,
  setCurrentPage,
  productsCount,
}) {
  const productsPerPage = 6;
  const maxNumberOfPages = Math.ceil(productsCount / productsPerPage);
  const numberOfPagesArr = getArrayOfNumbersTillN(1, maxNumberOfPages);

  useEffect(() => {
    if (currentPage > maxNumberOfPages && maxNumberOfPages !== 0) {
      setCurrentPage(maxNumberOfPages);
    }
  }, [currentPage, maxNumberOfPages]);

  const handlePageNumberClick = (e) => {
    const nameValue = e.target.name;
    if (isNaN(nameValue)) {
      if (nameValue === "next") {
        setCurrentPage((number) => (number < 3 ? number + 1 : number));
      } else if (nameValue === "previous") {
        setCurrentPage((number) => (number > 1 ? number - 1 : number));
      }
    } else {
      setCurrentPage(Number(nameValue));
    }
  };

  return (
    <div className="pagination p-xs">
      <div
        onClick={handlePageNumberClick}
        className="flex cgap-1rem ai-center jc-center"
      >
        <button disabled={currentPage <= 1} name="previous" className="number">
          previous
          {/* <i name="previous" className="fa-solid fa-angle-left"></i> */}
        </button>

        {numberOfPagesArr.map((num) => (
          <button
            key={num}
            name={num}
            className={`number ${currentPage === num ? "active" : ""}`}
          >
            {num}
          </button>
        ))}

        <button
          disabled={currentPage === maxNumberOfPages || maxNumberOfPages === 0}
          name="next"
          className="number"
        >
          next
        </button>
      </div>
    </div>
  );
}
