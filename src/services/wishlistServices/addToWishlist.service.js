import axios from "axios";
import { toast } from "react-toastify";

const addToWishlistService = async ({
  token,
  product,
  wishlistDispatch,
  setIsWishlistBtnLoading,
}) => {
  try {
    const response = await axios.post(
      "/api/user/wishlist",
      { product },
      {
        headers: { authorization: token },
      }
    );
    if (response.status === 201) {
      wishlistDispatch({
        type: "UPDATE_WISHLIST",
        payload: { wishlist: response.data.wishlist },
      });
      toast.success("Added to Wishlist");
    } else {
      throw new Error(response.status, "<-- error code");
    }
  } catch (error) {
    toast.error("Error Occured, Please try again.");
    console.error(error);
  } finally {
    setIsWishlistBtnLoading(false);
  }
};

export { addToWishlistService };
