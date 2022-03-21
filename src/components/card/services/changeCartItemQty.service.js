import axios from "axios";

const changeCartItemQtyService = async ({ setLoader, token, cartDispatch, changeType, product }) => {
    const dispatchType = changeType === "increment" ? "ADD_TO_CART" : "DEC_ITEM_IN_CART";

    try {
        const response = await axios.post(`/api/user/cart/${product._id}`, { action: { type: changeType } }, {
            headers: { authorization: token },
        });
        if (response.status === 200) {
            cartDispatch({
                type: dispatchType,
                payload: { cart: response.data.cart, price: product.price },
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
