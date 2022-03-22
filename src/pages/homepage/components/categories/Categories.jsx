import "./Categories.css";
import { useEffect, useState } from "react";
import { getCategoriesService } from "../../services/getCategories.service";
import { useFilter } from "../../../../context";
import { useNavigate } from "react-router-dom";

export default function Categories() {
  const [categoryData, setCategoryData] = useState([]);
  const { dispatch } = useFilter();
  const navigate = useNavigate();
  
  useEffect(() => {
    getCategoriesService(setCategoryData);
  }, []);

  const handleCategoryClick = (categoryName) => {
    dispatch({type: "SINGLE_CATEGORY", payload: categoryName});
    navigate("/products");
  };

  return (
    <section className="category-section">
      <h2 className="title">
        {" "}
        {categoryData.length > 0 ? "Categories" : "Loading Categories..."}{" "}
      </h2>
      <div className="category-container grid-container">
        {categoryData.map((category) => (
          <button
            key={category._id}
            className="category"
            onClick={() => handleCategoryClick(category.categoryName)}
          >
            <img src={category.image} alt="" />
            <div className="category-name">
              {" "}
              {category.categoryName.toUpperCase()}{" "}
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
