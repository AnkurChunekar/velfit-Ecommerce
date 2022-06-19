import axios from "axios";

const getCategoriesService = async () => {
  try {
    return await axios.get("/api/categories");
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error && error.response) {
        return error.response.data;
      }
    }

    return { message: "Something went wrong!" };
  }
};

export { getCategoriesService };
