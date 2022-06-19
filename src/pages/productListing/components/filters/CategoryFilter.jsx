import { useState, useEffect } from "react";
import { getCategoriesService } from "../../../../services";
import { capitalizeFirstWordOfString } from "../../../../helpers/utilityHelpers";

export function CategoryFilter({ categories, filterDispatch }) {
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await getCategoriesService();
      if (response.status === 200) setCategoryData(response.data.categories);
      else toast.error("Error Occured! Please Try Again.");
    })();
  }, []);

  const handleCategoryClick = (e) => {
    filterDispatch({ type: `CATEGORY_CHANGE`, payload: e.target.name });
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
          <label htmlFor={category.categoryName}>
            {capitalizeFirstWordOfString(category.categoryName)}
          </label>
        </div>
      ))}
    </div>
  );
}
