import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFilter } from "../../../../context";
import { getCategoriesService } from "../../../../services";
import { CircularLoader } from "../../../../components";
import "./Categories.css";
import { toast } from "react-toastify";

export function Categories() {
  const [categoryData, setCategoryData] = useState([]);
  const [loader, setLoader] = useState(true);
  const { filterDispatch } = useFilter();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const response = await getCategoriesService();
      if (response.status === 200) setCategoryData(response.data.categories);
      else toast.error("Error Occured! Please Try Again.");
      setLoader(false);
    })();
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
