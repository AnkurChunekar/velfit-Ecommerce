import axios from "axios";

const getCategoriesService = async (setCategoryData) => {
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

  export { getCategoriesService };
