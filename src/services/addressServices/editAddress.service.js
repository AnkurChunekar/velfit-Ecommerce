import axios from "axios";
import { toast } from "react-toastify";

const editAddressService = async ({ address, token, orderDispatch, _id }) => {
  try {
    const response = await axios.post(
      `/api/user/address/${_id}`,
      { address },
      {
        headers: { authorization: token },
      }
    );
    if (response.status === 200) {
      orderDispatch({
        type: "UPDATE_ADDRESSES",
        payload: { addresses: response.data.address },
      });
      toast.success("Address Edited Successfully");
    } else {
      throw new Error("Error Occured, Please Try again.");
    }
  } catch (error) {
    console.error(error);
    toast.error("Error Occured, Please Try again.");
  }
};

export { editAddressService };
