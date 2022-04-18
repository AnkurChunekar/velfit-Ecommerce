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
      toast.info(product.title.slice(0, 13).trim() + "... Removed");
    } else {
      throw new Error(`Error occured having Status: ${response.status}`);
    }
  } catch (error) {
    setIsWishlistBtnLoading(false);
    toast.error(error.response.data.errors[0]);
    console.error(error);
  } 
};

export { removeFromWishlistService };
