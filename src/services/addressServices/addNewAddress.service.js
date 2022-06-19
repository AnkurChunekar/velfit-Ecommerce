import axios from "axios";

const addNewAddressService = async ({ address, token }) => {
  try {
    return await axios.post(
      "/api/user/address//",
      { address },
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

export { addNewAddressService };
