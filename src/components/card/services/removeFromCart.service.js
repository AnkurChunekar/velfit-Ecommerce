import axios from "axios";

const removeFromCartService = async ({ token, cartDispatch, product }) => {

    try {
        const response = await axios.delete(`/api/user/cart/${product._id}`, {
            headers: { authorization: token },
        });

        switch (response.status) {
            case 200:
                cartDispatch({
                    type: "REMOVE_FROM_CART",
                    payload: { cart: response.data.cart, price: product.price },
                });
                break;
            case 404:
                throw new Error(
                    "The email you entered is not Registered. Not Found error"
                );
            default:
                throw new Error("Unknown Error Occured!");
        }
    } catch (error) {
        alert(error);
    }

}


export { removeFromCartService };
