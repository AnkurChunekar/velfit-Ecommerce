import axios from "axios";

export const getAllProductsService = async (setProductData, setLoader = () => {}) => {
  try {
    const response = await axios.get("/api/products");
    if (response.status === 200) {
      setProductData(response.data.products);
    }
  } catch (error) {
    console.error(error);
  } finally {
    setLoader(false);
  }
};
