import axios from "axios";

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
        } else {
            throw new Error(response.status, "<-- error code");
        }
    } catch (error) {
        alert(error);
    } finally {
        setLoader(false);
    }

}


export { addToCartService };
