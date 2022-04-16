import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context";
import { addToCartService } from "../../services";

export function CardFooter({ product, inCart }) {
  const navigate = useNavigate();
  const { cartDispatch } = useCart();
  const token = localStorage.getItem("token");
  const [loader, setLoader] = useState(false);

  const handleCtaBtnClick = () => {
    if (token) {
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
