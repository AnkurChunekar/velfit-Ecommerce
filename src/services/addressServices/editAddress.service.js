import axios from "axios";

const editAddressService = async ({ address, token, _id }) => {
  try {
    const response = await axios.post(
      `/api/user/address/${_id}`,
      { address },
      {
        headers: { authorization: token },
      }
    );
    return { addresses: response.data.address, status: response.status };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error && error.response) {
        return error.response.data;
      }
    }

    return { message: "Something went wrong!" };
  }
};

export { editAddressService };
