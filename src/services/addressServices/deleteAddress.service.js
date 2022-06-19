import axios from "axios";

const deleteAddressService = async ({ token, _id }) => {
  try {
    const response = await axios.delete(`/api/user/address/${_id}`, {
      headers: { authorization: token },
    });
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

export { deleteAddressService };
