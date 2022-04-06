import "./Categories.css";
import { useEffect, useState } from "react";
import { getCategoriesService } from "../../services/getCategories.service";
import { useFilter } from "../../../../context";
import { useNavigate } from "react-router-dom";
import { CircularLoader } from "../../../../components";

export default function Categories() {
  const [categoryData, setCategoryData] = useState([]);
  const [loader, setLoader] = useState(true);
  const { filterDispatch } = useFilter();
  const navigate = useNavigate();

  useEffect(() => {
    getCategoriesService(setCategoryData, setLoader);
  }, []);

  const handleCategoryClick = (categoryName) => {
    filterDispatch({ type: "SINGLE_CATEGORY", payload: categoryName });
    navigate("/products");
  };

  return (
    <section className="category-section">
      <h2 className="title">Categories</h2>

      {loader ? (
        <div className="flex flex-center">
          <CircularLoader />
        </div>
      ) : (
        <div className="category-container grid-container">
          {categoryData.map((category) => (
            <button
              key={category._id}
              className="category"
              onClick={() => handleCategoryClick(category.categoryName)}
            >
              <img src={category.image} alt="" />
              <div className="category-name">
                {category.categoryName.toUpperCase()}
              </div>
            </button>
          ))}
        </div>
      )}
    </section>
  );
}
