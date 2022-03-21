import axios from "axios";

const changeCartItemQtyService = async ({ setLoader, token, cartDispatch, changeType, product }) => {

    try {
        const response = await axios.post(`/api/user/cart/${product._id}`, { action: { type: changeType } }, {
            headers: { authorization: token },
        });
        if (response.status === 200) {
            cartDispatch({
                type: "ADD_TO_CART",
                payload: { cart: response.data.cart },
            });
        } else {
            throw new Error(response.status, "<-- error code");
        }
    } catch (error) {
        alert(error);
    } finally {
        setLoader(false);
    }

}


export { changeCartItemQtyService };
