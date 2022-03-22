import { useState, useEffect } from "react";
import { getCategoriesService } from "../../../homepage/services/getCategories.service";
import { capitalizeFirstWordOfString } from "../../../../helpers/utilityHelpers";

export default function CategoryFilter({ categories, dispatch }) {
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    getCategoriesService(setCategoryData);
  });

  const handleCategoryClick = (e) => {
    dispatch({ type: `CATEGORY_CHANGE`, payload: e.target.name });
  };

  return (
    <div className="m-md1 m-rl0">
      <h5 className="fw-600">Category</h5>

      {categoryData.map((category) => (
        <div key={category._id} className="input-wrapper checkbox m-s m-rl0">
          <input
            type="checkbox"
            id={category.categoryName}
            name={category.categoryName}
            checked={categories.includes(category.categoryName)}
            onChange={handleCategoryClick}
          />
          <label htmlFor={category.categoryName}>{ capitalizeFirstWordOfString(category.categoryName) }</label>
        </div>
      ))}
    </div>
  );
}
