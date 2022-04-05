import axios from "axios";

const removeFromWishlistService = async ({ token, product, wishlistDispatch }) => {

    try {
        const response = await axios.delete(`/api/user/wishlist/${product._id}`, {
            headers: { authorization: token },
        });
        if (response.status === 200) {
            wishlistDispatch({
                type: "UPDATE_WISHLIST",
                payload: { wishlist: response.data.wishlist }
            });
        } else {
            throw new Error(`Error occured having Status: ${response.status}`);
        }
    } catch (error) {
        console.error(error)
    }

}

export { removeFromWishlistService };
