import axios from "axios";

const removeFromWishlistService = async (token, product) => {
  try {
    return await axios.delete(`/api/user/wishlist/${product._id}`, {
      headers: { authorization: token },
    });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error && error.response) {
        return error.response.data;
      }
    }

    return { message: "Something went wrong!" };
  }
};

export { removeFromWishlistService };
