import axios from "axios";

const getAddressesService = async (orderDispatch, token) => {
  try {
    const response = await axios.get("/api/user/address", {
      headers: { authorization: token },
    });
    if (response.status === 200) {
      orderDispatch({
        type: "UPDATE_ADDRESSES",
        payload: {addresses: response.data.address},
      });
    } else {
      throw new Error("Error occcured while fetching categories");
    }
  } catch (error) {
    console.error(error);
  }
};

export { getAddressesService };
