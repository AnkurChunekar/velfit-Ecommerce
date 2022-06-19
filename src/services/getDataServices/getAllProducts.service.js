import axios from "axios";

export const getAllProductsService = async () => {
  try {
    return await axios.get("/api/products");
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error && error.response) {
        return error.response.data;
      }
    }

    return { message: "Something went wrong!" };
  }
};
