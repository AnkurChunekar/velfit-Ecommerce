import axios from "axios";
import { toast } from "react-toastify";

const removeFromWishlistService = async ({
  token,
  product,
  wishlistDispatch,
  setIsWishlistBtnLoading = () => {},
}) => {
  try {
    const response = await axios.delete(`/api/user/wishlist/${product._id}`, {
      headers: { authorization: token },
    });
    if (response.status === 200) {
      setIsWishlistBtnLoading(false);
      wishlistDispatch({
        type: "UPDATE_WISHLIST",
        payload: { wishlist: response.data.wishlist },
      });
      toast.info("Removed from Wishlist");
    } else {
      throw new Error(`Error occured having Status: ${response.status}`);
    }
  } catch (error) {
    setIsWishlistBtnLoading(false);
    toast.error("Error Occured, Please try again.");
    console.error(error);
  } 
};

export { removeFromWishlistService };
