import axios from "axios";

const getCategoriesService = async (setCategoryData, setLoader = () => {}) => {
    try {
      const response = await axios.get("/api/categories");
      if (response.status === 200) {
        setCategoryData(response.data.categories);
        setLoader(false);
      } else {
        throw new Error("Error occcured while fetching categories");
      }
    } catch (error) {
      console.error(error)
    } finally {

    }
  };

  export { getCategoriesService };
