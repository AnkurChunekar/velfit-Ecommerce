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
  const { authState } = useAuth();
  const token = authState.token || localStorage.getItem("token");
  const navigate = useNavigate();

  // Cart fuctionalities
  const { cartDispatch } = useCart();

  const handleDeleteFromCart = async () => {
    const response = await removeFromCartService({ token, product });

    if (response.status === 200) {
      cartDispatch({
        type: "UPDATE_CART",
        payload: { cart: response.data.cart },
      });
    } else toast.error(response.message);
  };

  // Wishlist Functionalities
  const [isAddToWishlistLoading, setIsAddToWishlistLoading] = useState(false);
  const { wishlistDispatch } = useWishlist();

  const handleAddOrRemoveFromWishlist = async () => {
    if (token) {
      setIsAddToWishlistLoading(true);
      if (inWishlist) {
        removeFromWishlistService({
          token,
          product,
          wishlistDispatch,
          setIsWishlistBtnLoading: setIsAddToWishlistLoading,
        });
      } else {
        const response = await addToWishlistService(token, product);

        if (response.status === 201) {
          wishlistDispatch({
            type: "UPDATE_WISHLIST",
            payload: { wishlist: response.data.wishlist },
          });
          toast.success("Added to Wishlist");
        } else toast.error(response.message);

        setIsAddToWishlistLoading(false);

        if (window.location.pathname === "/cart") handleDeleteFromCart();
      }
    } else navigate("/login");
  };

  return (
    <>
      {className === "card-horizontal" ? (
        // Remove From Cart
        <div className="card-dismiss" onClick={handleDeleteFromCart}>
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
        disabled={isAddToWishlistLoading ? true : false}
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
