import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth, useCart } from "../../context";
import { addToCartService } from "./services/addToCart.service";

export function CardFooter({ product }) {
  const navigate = useNavigate();
  const { authState } = useAuth();
  const { user, token } = authState;
  const { cartState, cartDispatch } = useCart();

  const [loader, setLoader] = useState(false);
  const [ctaBtnText, setCtaBtnText] = useState("Add To Cart");

  const handleCtaBtnClickClick = () => {
    if (user) {
      setLoader(true);
      const { cart } = cartState;

      if (cart.findIndex((item) => item._id === product._id) === -1) {
        const requestObj = {
          url: "/api/user/cart",
          body: { product },
          successStatus: 201,
          token,
          cartDispatch,
          setLoader,
          setCtaBtnText,
        };
        addToCartService(requestObj);
      } else {
        navigate("/cart");
      }
    } else {
      navigate("/login");
    }
  };

  return (
    <footer className="card-actions m-xs">
      <button
        disabled={loader}
        onClick={handleCtaBtnClickClick}
        className="btn btn-primary"
      >
        {loader ? "Adding..." : ctaBtnText}
      </button>
    </footer>
  );
}
