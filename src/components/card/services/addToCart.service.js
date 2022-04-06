import axios from "axios";
import { toast } from "react-toastify";

const addToCartService = async ({ url, body, token, successStatus, cartDispatch, setLoader, setCtaBtnText }) => {

    try {
        const response = await axios.post(url, body, {
            headers: { authorization: token },
        });
        if (response.status === successStatus) {
            cartDispatch({
                type: "UPDATE_CART",
                payload: { cart: response.data.cart },
            });
            setCtaBtnText("Go To Cart");
            toast.success(body.product.title.slice(0, 13).trim() + "... Added to Cart");
        } else {
            throw new Error(response.status, "<-- error code");
        }
    } catch (error) {
        toast.error(error.response.data.errors[0])
        console.error(error)
    } finally {
        setLoader(false);
    }

}

export { addToCartService };
