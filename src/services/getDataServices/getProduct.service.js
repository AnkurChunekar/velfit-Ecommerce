import axios from "axios";

export const getProductService = async (productID) => {
  try {
    return await axios.get(`/api/products/${productID}`);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error && error.response) {
        return error.response.data;
      }
    }

    return { message: "Something went wrong!" };
  }
};
