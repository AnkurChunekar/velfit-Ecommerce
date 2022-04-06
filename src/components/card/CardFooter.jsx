import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth, useCart } from "../../context";
import { addToCartService } from "./services/addToCart.service";

export function CardFooter({ product, inCart }) {
  const navigate = useNavigate();
  const { authState } = useAuth();
  const { user, token } = authState;
  const { cartState, cartDispatch } = useCart();

  const [loader, setLoader] = useState(false);
  const [ctaBtnText, setCtaBtnText] = useState(inCart ? "Go To Cart" : "Add To Cart");

  const handleCtaBtnClick = () => {
    if (user) {
      setLoader(true);
      const { cart } = cartState;
      if (!inCart) {
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
        onClick={handleCtaBtnClick}
        className={`btn btn-primary ${ctaBtnText !== "Add To Cart" ? "btn-outline" : ""} `}
      >
        {loader ? "Adding..." : ctaBtnText}
      </button>
    </footer>
  );
}
