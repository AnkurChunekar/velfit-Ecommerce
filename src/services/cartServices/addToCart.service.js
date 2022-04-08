import axios from "axios";
import { toast } from "react-toastify";

const addToCartService = async ({ product, token, cartDispatch, setLoader, setCtaBtnText = () => {} }) => {

    try {
        const response = await axios.post("/api/user/cart", { product }, {
            headers: { authorization: token },
        });
        if (response.status === 201) {
            cartDispatch({
                type: "UPDATE_CART",
                payload: { cart: response.data.cart },
            });
            setCtaBtnText("Go To Cart");
            toast.success(product.title.slice(0, 13).trim() + "... Added to Cart");
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
