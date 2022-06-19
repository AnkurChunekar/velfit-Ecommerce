import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";

import { useCart, useAuth, useWishlist } from "../../context";
import {
  removeFromCartService,
  addToWishlistService,
  removeFromWishlistService,
} from "../../services";

export function CardIcons({ isFastDelivered, className, product, inWishlist }) {
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const { wishlistDispatch } = useWishlist();
  const { authState } = useAuth();
  const token = authState.token || localStorage.getItem("token");

  // Cart fuctionalities
  const { cartDispatch } = useCart();

  const removeFromCart = async (showToast = true) => {
    const response = await removeFromCartService({ token, product });

    if (response.status === 200) {
      cartDispatch({
        type: "UPDATE_CART",
        payload: { cart: response.data.cart },
      });
      if (showToast) toast.success("Removed From Cart!");
    } else toast.error(response.message);
  };

  // Wishlist Functionalities

  const removeFromWishlist = async () => {
    const response = await removeFromWishlistService(token, product);

    if (response.status === 200) {
      wishlistDispatch({
        type: "UPDATE_WISHLIST",
        payload: { wishlist: response.data.wishlist },
      });
      toast.success("Removed from Wishlist");
    } else toast.error(response.message);

    setIsLoading(false);
  };

  const addToWishlist = async () => {
    const response = await addToWishlistService(token, product);

    if (response.status === 201) {
      wishlistDispatch({
        type: "UPDATE_WISHLIST",
        payload: { wishlist: response.data.wishlist },
      });
      toast.success("Added to Wishlist");
    } else toast.error(response.message);

    setIsLoading(false);

    if (window.location.pathname === "/cart") removeFromCart(false);
  };

  const handleAddOrRemoveFromWishlist = () => {
    if (token) {
      setIsLoading(true);
      if (inWishlist) removeFromWishlist();
      else addToWishlist();
    } else navigate("/login");
  };

  return (
    <>
      {className === "card-horizontal" ? (
        // Remove From Cart
        <div className="card-dismiss" onClick={removeFromCart}>
          <i className="fa-solid fa-trash fs-5" />
        </div>
      ) : (
        // Remove From Wishlist
        <button
          className="card-dismiss"
          onClick={handleAddOrRemoveFromWishlist}
        >
          <i className="fa-solid fa-trash fs-5" />
        </button>
      )}

      <button
        className={`card-like ${inWishlist ? "active" : ""}`}
        onClick={handleAddOrRemoveFromWishlist}
        disabled={isLoading ? true : false}
      >
        <i className="fas fa-heart icon" />
      </button>

      {isFastDelivered ? (
        <div className="badge-container tag tag-danger">
          <span className="icon-badge">Super Fast</span>
        </div>
      ) : null}
    </>
  );
}
