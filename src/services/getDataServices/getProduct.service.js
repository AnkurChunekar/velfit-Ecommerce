import axios from "axios";
import { toast } from "react-toastify";

export const getProductService = async (productID, setProductData) => {
  try {
    const response = await axios.get(`/api/products/${productID}`);
    if (response.status === 200) {
      setProductData(response.data.product);
    } else {
      throw new Error("Error Occured!");
    }
  } catch (error) {
    console.error(error);
    toast.error("Error Occured! Please Try Refreshing.");
  }
};
