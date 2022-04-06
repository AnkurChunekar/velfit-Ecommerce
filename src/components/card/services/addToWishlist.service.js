import axios from "axios";
import { toast } from "react-toastify";

const addToWishlistService = async ({ token, product, wishlistDispatch, setIsAddToWishlistLoading }) => {

    try {
        const response = await axios.post("/api/user/wishlist", { product }, {
            headers: { authorization: token },
        });
        if (response.status === 201) {
            wishlistDispatch({
                type: "UPDATE_WISHLIST",
                payload: { wishlist: response.data.wishlist }
            });
            toast.success(product.title.slice(0, 13).trim() + "... Added to Wishlist");
        } else {
            throw new Error(response.status, "<-- error code");
        }
    } catch (error) {
        toast.error(error.response.data.errors[0])
        console.error(error)
    } finally {
        setIsAddToWishlistLoading(false)
    }

}

export { addToWishlistService };
