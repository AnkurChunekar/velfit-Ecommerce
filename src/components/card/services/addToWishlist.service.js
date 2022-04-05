import axios from "axios";

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
        } else {
            throw new Error(response.status, "<-- error code");
        }
    } catch (error) {
        console.error(error)
    } finally {
        setIsAddToWishlistLoading(false)
    }

}

export { addToWishlistService };
