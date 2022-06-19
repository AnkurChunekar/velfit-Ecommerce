import axios from "axios";

const addNewAddressService = async ({ address, token }) => {
  try {
    const response = await axios.post(
      "/api/user/address",
      { address },
      {
        headers: { authorization: token },
      }
    );

    return { data: response.data, status: response.status };
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
