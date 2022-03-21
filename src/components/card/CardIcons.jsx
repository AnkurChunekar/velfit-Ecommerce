import { useCart, useAuth } from "../../context";
import { removeFromCartService } from "./services/removeFromCart.service";

export function CardIcons({ isFastDelivered, className, product }) {
  const {
    authState: { token },
    authDispatch,
  } = useAuth();

  const {
    cartState: { cart },
    cartDispatch,
  } = useCart();

  const handleDeleteFromCartClick = async () => {
    if (cart.findIndex((item) => item._id === product._id) !== -1) {
      const requestObj = {
        token,
        cartDispatch,
        product,
      };

      removeFromCartService(requestObj);
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

      <div className="card-like">
        <i className="fas fa-heart icon" />
      </div>

      {isFastDelivered ? (
        <div className="badge-container tag tag-danger">
          <span className="icon-badge">Super Fast</span>
        </div>
      ) : null}
    </>
  );
}
