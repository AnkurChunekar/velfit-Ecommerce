import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart, useAuth } from "../../context";
import { changeCartItemQtyService } from "../../services";

export function CardTextContent({
  title = "Velfit's Dumbbell",
  description = "Best Quality Products",
  price = 100,
  quantity = 10,
  ratingValue = 1,
  product,
}) {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const {
    authState: { token },
  } = useAuth();
  const { cartDispatch } = useCart();

  const handleIncCartItemClick = (e) => {
    e.stopPropagation();
    setLoader(true);
    if (quantity > 0) {
      const requestObj = {
        changeType: e.target.name,
        setLoader,
        token,
        cartDispatch,
        product,
      };
      changeCartItemQtyService(requestObj);
    }
  };

  const navigateToProduct = () => {
    navigate(`/products/${product._id}`);
  };

  return (
    <div onClick={navigateToProduct} className="card-text-content m-xs">
      <p className="card-title"> {title} </p>
      <p className="subtitle"> {description} </p>
      <p className="price"> ₹ {price} </p>
      <div className="ecom-qty">
        <button
          onClick={(e) =>  handleIncCartItemClick(e)}
          name="decrement"
          className="qty-btn fs-3 p-xxs dec"
          disabled={quantity < 2 || loader}
        >
          -
        </button>
        <span className="qty-num p-xxs"> {quantity} </span>
        <button
          onClick={(e) =>  handleIncCartItemClick(e)}
          className="qty-btn fs-3 p-xxs inc"
          name="increment"
          disabled={loader}
        >
          +
        </button>
      </div>
      <div className={`rating s${ratingValue} fs-6`}>
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <span className="rating-info"> {ratingValue} </span>
      </div>
    </div>
  );
}
