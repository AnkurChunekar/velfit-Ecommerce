import axios from "axios";

const getAddressesService = async (token) => {
  try {
    return await axios.get("/api/user/address", {
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

export { getAddressesService };
