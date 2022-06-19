import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useCart, useAuth } from "../../context";
import { addToCartService } from "../../services";

export function CardFooter({ product, inCart }) {
  const navigate = useNavigate();
  const { cartDispatch } = useCart();
  const { authState } = useAuth();
  const token = authState.token || localStorage.getItem("token");
  const [loader, setLoader] = useState(false);

  const addToCart = async () => {
    const response = await addToCartService({ product, token });

    if (response.status === 201) {
      cartDispatch({
        type: "UPDATE_CART",
        payload: { cart: response.data.cart },
      });
      toast.success("Added to Cart");
    } else toast.error(response.message);

    setLoader(false);
  };

  const handleCtaBtnClick = () => {
    if (token) {
      setLoader(true);
      if (!inCart) {
        addToCart();
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
