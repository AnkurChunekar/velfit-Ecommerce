import { useCart, useAuth, useWishlist } from "../../context";
import { useNavigate } from "react-router-dom";
import { addToWishlistService, removeFromCartService } from "./services";

export function CardIcons({ isFastDelivered, className, product, inWishlist }) {
  const {
    authState: { token, user },
    authDispatch,
  } = useAuth();

  const navigate = useNavigate();

  // Cart fuctionalities

  const {
    cartState: { cart },
    cartDispatch,
  } = useCart();

  const handleDeleteFromCartClick = async () => {
    const requestObj = {
      token,
      cartDispatch,
      product,
    };

    removeFromCartService(requestObj);
  };

  // Wishlist Functionalities

  const { wishlistDispatch } = useWishlist();

  const handleAddToWishlistClick = () => {
    if (user) {
      if (inWishlist) {
        
      } else {
        addToWishlistService({ token, product, wishlistDispatch });
      }
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      {className === "card-horizontal" ? (
        // Remove From Cart
        <div className="card-dismiss" onClick={handleDeleteFromCartClick}>
          <i className="fa-solid fa-trash fs-5" />
        </div>
      ) : (
        // Remove From Wishlist
        <button className="card-dismiss">
          <i className="fa-solid fa-trash fs-5" />
        </button>
      )}

      <button
        className={`card-like ${inWishlist ? "active" : ""}`}
        onClick={handleAddToWishlistClick}
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
