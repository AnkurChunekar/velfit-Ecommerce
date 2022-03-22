import "./Categories.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Categories() {
  const [categoryData, setCategoryData] = useState([]);

  const fetchCategories = async () => {
    try {
      const response = await axios.get("/api/categories");
      if (response.status === 200) {
        setCategoryData(response.data.categories);
      } else {
        throw new Error("Error occcured while fetching categories");
      }
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    fetchCategories();
  });

  const handleCategoryClick = (categoryName) => {
   
  }


  return (
    <section className="category-section">
      <h2 className="title"> { categoryData.length > 0 ? "Categories" : "Loading Categories..." } </h2>
      <div className="category-container grid-container">
        {categoryData.map((category) => (
          <button key={category._id} className="category" onClick={() => handleCategoryClick(category.categoryName)} >
            <img src={category.image} alt="" />
            <div className="category-name"> {category.categoryName.toUpperCase()} </div>
          </button>
        ))}
      </div>
    </section>
  );
}
