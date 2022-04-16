import axios from "axios";
import { toast } from "react-toastify";

export const loginService = async ({
  userData,
  authDispatch,
  cartDispatch,
  wishlistDispatch,
  orderDispatch,
  navigate,
}) => {
  try {
    const response = await axios.post("/api/auth/login", {
      email: userData.email,
      password: userData.password,
    });
    if (response.status === 200) {
      const { firstName, lastName, email } = response.data.foundUser;
      localStorage.setItem("token", response.data.encodedToken);
      localStorage.setItem("user", JSON.stringify({ firstName, lastName, email}));
      authDispatch({
        type: "LOGIN",
        payload: {
          user: response.data.foundUser,
          token: response.data.encodedToken,
        },
      });
      cartDispatch({
        type: "UPDATE_CART",
        payload: { cart: response.data.foundUser.cart },
      });
      wishlistDispatch({
        type: "UPDATE_WISHLIST",
        payload: { wishlist: response.data.foundUser.wishlist },
      });
      orderDispatch({
        type: "UPDATE_ADDRESSES",
        payload: { addresses: response.data.foundUser.address },
      });
      toast.success("Login Successfull!");
      navigate("/");
    } else {
      throw new Error("Error Occured! Please Try again.");
    }
  } catch (error) {
    toast.error("Error Occured!, Please Try Again.");
    console.error(error);
  }
};
