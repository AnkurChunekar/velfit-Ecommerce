import axios from "axios";

const addToCartService = async ({ product, token }) => {
  try {
    return await axios.post(
      "/api/user/cart",
      { product },
      {
        headers: { authorization: token },
      }
    );
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error && error.response) {
        return error.response.data;
      }
    }

    return { message: "Something went wrong!" };
  }
};

export { addToCartService };
