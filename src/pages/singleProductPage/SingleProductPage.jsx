import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth, useCart, useWishlist } from "../../context";
import { getProductService } from "../../services";
import {
  addToCartService,
  addToWishlistService,
  removeFromWishlistService,
} from "../../services";
import { isItemInArrayOfObjects } from "../../helpers";
import { CircularLoader } from "../../components";
import "./SingleProductPage.css";

export default function SingleProductPage() {
  const { productID } = useParams();
  const navigate = useNavigate();
  const [productData, setProductData] = useState(false);
  const [addToCartLoading, setAddToCartLoading] = useState(false);
  const [isWishlistBtnLoading, setIsWishlistBtnLoading] = useState(false);

  const { authState } = useAuth();
  const token = authState.token || localStorage.getItem("token");

  const {
    cartState: { cart },
    cartDispatch,
  } = useCart();

  const {
    wishlistState: { wishlist },
    wishlistDispatch,
  } = useWishlist();

  useEffect(() => {
    getProductService(productID, setProductData);
  }, [productID]);

  const inCart = isItemInArrayOfObjects(
    cart,
    (item) => item._id === productData._id
  );

  const inWishlist = isItemInArrayOfObjects(
    wishlist,
    (item) => item._id === productData._id
  );

  const addToCartClick = () => {
    if (token) {
      setAddToCartLoading(true);
      if (!inCart) {
        addToCartService({
          product: productData,
          token,
          cartDispatch,
          setLoader: setAddToCartLoading,
        });
      } else {
        navigate("/cart");
      }
    } else {
      navigate("/login");
    }
  };

  const wishlistToggleClick = () => {
    if (token) {
      setIsWishlistBtnLoading(true);
      if (!inWishlist) {
        addToWishlistService({
          product: productData,
          token,
          wishlistDispatch,
          setIsWishlistBtnLoading,
        });
      } else {
        removeFromWishlistService({
          product: productData,
          token,
          wishlistDispatch,
          setIsWishlistBtnLoading,
        });
      }
    } else {
      navigate("/login");
    }
  };

  return productData ? (
    <div className="single-prod-page flex">
      <section className="img-container">
        <img className="img-responsive" src={productData.image} alt="product" />
      </section>
      <section className="prod-details flex flex-column">
        <h1 className="fs-3 fw-600"> {productData.title} </h1>
        <div className="flex rating-container cgap-1rem flex-wrap rgap-1rem">
          <div className={`rating s${productData.rating}`}>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <span className="rating-info"> {productData.rating} </span>
          </div>
          <span className="gray-text"> | 32 reviews </span>
          <span className="gray-text"> | 154 orders </span>
        </div>

        <p className="flex flex-column prod-features rgap-1rem">
          <span>
            <i className="fa-solid fa-check"></i> Durable
          </span>
          <span>
            <i className="fa-solid fa-check"></i> Affordable
          </span>
          <span>
            <i className="fa-solid fa-check"></i> Quality
          </span>
          <span>
            <i className="fa-solid fa-check"></i> Trusted
          </span>
          <span>
            <i className="fa-solid fa-check"></i> Authentic
          </span>

          {productData.isDeliveredFast ? (
            <span>
              <i className="fa-solid fa-check"></i> Fast Delivery
            </span>
          ) : null}
        </p>

        <div className="fs-4 fw-600"> ₹{productData.price} /- </div>

        <button
          disabled={addToCartLoading}
          onClick={addToCartClick}
          className="btn btn-primary w-100pc"
        >
          {inCart ? "Go" : "Add"} To Cart
          <i className="fa-solid fa-cart-shopping m-xxxs"></i>
        </button>
        <button
          onClick={wishlistToggleClick}
          disabled={isWishlistBtnLoading}
          className="btn btn-secondary w-100pc"
        >
          {inWishlist ? "Remove from" : "Save to"} Wishlist{" "}
          <i className="fa fa-heart m-xxxs"></i>
        </button>
      </section>
    </div>
  ) : (
    <div className="loader-container flex flex-center">
      <CircularLoader />
    </div>
  );
}
