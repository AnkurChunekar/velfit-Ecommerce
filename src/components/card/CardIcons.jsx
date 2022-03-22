import { useCart, useAuth, useWishlist } from "../../context";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  addToWishlistService,
  removeFromCartService,
  removeFromWishlistService,
} from "./services";

export function CardIcons({ isFastDelivered, className, product, inWishlist }) {
  const {
    authState: { token, user },
  } = useAuth();

  const navigate = useNavigate();

  // Cart fuctionalities
  const {
    cartState: { cart },
    cartDispatch,
  } = useCart();

  const handleDeleteFromCart = async () => {
    const requestObj = {
      token,
      cartDispatch,
      product,
    };

    removeFromCartService(requestObj);
  };

  // Wishlist Functionalities
  const [isAddToWishlistLoading, setIsAddToWishlistLoading] = useState(false);
  const { wishlistDispatch } = useWishlist();

  const handleAddOrRemoveFromWishlist = () => {
    if (user) {
      if (inWishlist) {
        removeFromWishlistService({ token, product, wishlistDispatch });
      } else {
        setIsAddToWishlistLoading(true);
        addToWishlistService({
          token,
          product,
          wishlistDispatch,
          setIsAddToWishlistLoading,
        });
      }
    } else {
      navigate("/login");
    }
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
