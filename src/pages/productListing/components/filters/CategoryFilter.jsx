import { useState, useEffect } from "react";
import { getCategoriesService } from "../../../homepage/services/getCategories.service";
import { capitalizeFirstWordOfString } from "../../../../helpers/utilityHelpers";
import { HorizontalLoader } from "../../../../components";

export default function CategoryFilter({ categories, filterDispatch }) {
  const [loader, setLoader] = useState(true);
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    getCategoriesService(setCategoryData, setLoader);
  }, []);

  const handleCategoryClick = (e) => {
    filterDispatch({ type: `CATEGORY_CHANGE`, payload: e.target.name });
  };

  return (
    <div className="m-md1 m-rl0">
      <h5 className="fw-600">Category</h5>

      {loader ? (
        <HorizontalLoader />
      ) : (
        categoryData.map((category) => (
          <div key={category._id} className="input-wrapper checkbox m-s m-rl0">
            <input
              type="checkbox"
              id={category.categoryName}
              name={category.categoryName}
              checked={categories.includes(category.categoryName)}
              onChange={handleCategoryClick}
            />
            <label htmlFor={category.categoryName}>
              {capitalizeFirstWordOfString(category.categoryName)}
            </label>
          </div>
        ))
      )}
    </div>
  );
}
