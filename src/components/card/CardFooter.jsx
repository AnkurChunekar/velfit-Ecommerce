import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth, useCart } from "../../context";
import { addToCartService } from "../../services";

export function CardFooter({ product, inCart }) {
  const navigate = useNavigate();
  const { authState } = useAuth();
  const { user, token } = authState;
  const { cartDispatch } = useCart();

  const [loader, setLoader] = useState(false);

  const handleCtaBtnClick = () => {
    if (user) {
      setLoader(true);
      if (!inCart) {
        addToCartService({
          product,
          token,
          cartDispatch,
          setLoader,
        });
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
        className={`btn btn-primary ${inCart ? "btn-outline" : ""} `}
      >
        {loader ? "Adding..." : inCart ? "Go To Cart" : "Add To Cart"}
      </button>
    </footer>
  );
}
