import axios from "axios";

const changeCartItemQtyService = async ({ token, changeType, product }) => {
  try {
    return await axios.post(
      `/api/user/cart/${product._id}`,
      { action: { type: changeType } },
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

export { changeCartItemQtyService };
