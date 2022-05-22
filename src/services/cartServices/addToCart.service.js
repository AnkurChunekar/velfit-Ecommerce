import axios from "axios";
import { toast } from "react-toastify";

const addToCartService = async ({ product, token, cartDispatch, setLoader }) => {

    try {
        const response = await axios.post("/api/user/cart", { product }, {
            headers: { authorization: token },
        });
        if (response.status === 201) {
            cartDispatch({
                type: "UPDATE_CART",
                payload: { cart: response.data.cart },
            });
            toast.success("Added to Cart");
        } else {
            throw new Error(response.status, "<-- error code");
        }
    } catch (error) {
        console.error(error);
        toast.error(error.response.data.errors[0])
    } finally {
        setLoader(false);
    }

}

export { addToCartService };
