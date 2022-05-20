import axios from "axios";
import { toast } from "react-toastify";

const addNewAddressService = async ({ address, token, orderDispatch }) => {
  try {
    const response = await axios.post(
      "/api/user/address",
      { address },
      {
        headers: { authorization: token },
      }
    );
    if (response.status === 201) {
      orderDispatch({
        type: "UPDATE_ADDRESSES",
        payload: { addresses: response.data.address },
      });
      toast.success("New Address Added");
    } else {
      throw new Error(response.status, "<-- error code");
    }
  } catch (error) {
    console.error(error);
    toast.error("Error Occured, Please Try again.");
  }
};

export { addNewAddressService };
