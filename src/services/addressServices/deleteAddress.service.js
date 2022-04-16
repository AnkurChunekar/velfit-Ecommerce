import axios from "axios";
import { toast } from "react-toastify";

const deleteAddressService = async ({ token, orderDispatch, _id }) => {
  try {
    const response = await axios.delete(
      `/api/user/address/${_id}`,
      {
        headers: { authorization: token },
      }
    );
    if (response.status === 200) {
      orderDispatch({
        type: "UPDATE_ADDRESSES",
        payload: { addresses: response.data.address },
      });
      toast.success("Address Deleted Successfully");
    } else {
      throw new Error("Error Occured, Please Try again.");
    }
  } catch (error) {
    console.error(error);
    toast.error("Error Occured, Please Try again.");
  }
};

export { deleteAddressService };
