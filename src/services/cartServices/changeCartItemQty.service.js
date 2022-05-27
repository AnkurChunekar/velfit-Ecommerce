
import axios from "axios";
import { toast } from "react-toastify";

const changeCartItemQtyService = async ({ setLoader, token, cartDispatch, changeType, product }) => {

    try {
        const response = await axios.post(`/api/user/cart/${product._id}`, { action: { type: changeType } }, {
            headers: { authorization: token },
        });
        if (response.status === 200) {
            cartDispatch({
                type: "UPDATE_CART",
                payload: { cart: response.data.cart },
            });
            toast.info("UPDATING QUANTITY");
        } else {
            throw new Error(response.status, "<-- error code");
        }
    } catch (error) {
        toast.error("Error Occured, Please try again.")
        console.error(error)
    } finally {
        setLoader(false);
    }

}

export { changeCartItemQtyService };
