import { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context";
import { cartPriceCalculator, handleCouponDiscount } from "../../helpers/cartHelpers";
import { Card } from "../../components";
import "./CartManagement.css";

export default function CartManagement() {
  const [selectedCoupon, setSelectedCoupon] = useState(0);
  const { cartState } = useCart();
  const { cart } = cartState;
  const { price } = cartPriceCalculator(cart);
  const [isCouponModalVisibile, setIsCouponModalVisible] = useState(false);

  // Coupon Functionalities

  const couponModalToggleClick = () => {
    setIsCouponModalVisible((isCouponModalVisibile) => !isCouponModalVisibile);
  };

  useEffect(() => {
    if (price < 5000 || (price < 10000 && selectedCoupon !== 10)) {
      setSelectedCoupon(0);
    }
  }, [price, selectedCoupon]);

  const finalCouponedPrice = handleCouponDiscount(price, selectedCoupon);

  return (
    <>
      {cart.length > 0 ? (
        <>
          <header className="center-align-text m-lg">
            <h1 className="fs-3 fw-600">My Cart ({cart.length})</h1>
          </header>
          <div className="cart-management-page">
            <section className="card-container">
              {cart.map((product) => (
                <Fragment key={product._id}>
                  <Card
                    product={product}
                    cardImage={product.image}
                    className="card-horizontal"
                    title={product.title}
                    description={product.description}
                    ratingValue={product.rating}
                    price={product.price}
                    isFastDelivered={false}
                    quantity={product.qty}
                  />
                </Fragment>
              ))}
            </section>
            <section className="order-box">
              <ul className="list list-style-none p-s">
                <li>
                  <button
                    onClick={couponModalToggleClick}
                    className="apply-coupon-btn"
                  >
                    <i className="fa-solid fa-tag"></i> Apply Coupons
                  </button>
                </li>
                <li>
                  <span>Price ({cart.length} items)</span>
                  <span>₹ {price} </span>
                </li>
                <li>
                  <span>Discount</span>
                  <span> {selectedCoupon ? `${selectedCoupon}%` : "₹0"} </span>
                </li>
                <li>
                  <span>Delivery Charge</span>
                  <span>₹ 45</span>
                </li>
                <div className="divider" />
                <li className="total">
                  <strong>TOTAL AMOUNT</strong>
                  <strong>
                    ₹ {Number(finalCouponedPrice.toFixed(2)) + 45}
                  </strong>
                </li>
                <div className="divider" />
                <li>
                  <span>
                    You will save
                    <span className="green-text m-xxs"> 
                       ₹{price - finalCouponedPrice} 
                     </span>
                    on this order.
                  </span>
                </li>
                <li>
                  <button className="btn btn-primary checkout-btn">
                    Checkout
                  </button>
                </li>
              </ul>
            </section>
          </div>
        </>
      ) : (
        <div className="center-align-text m-xxxl">
          <h1 className="m-lg"> Cart is Empty. </h1>
          <Link to="/products">
            <button className="btn btn-primary"> Continue Shopping </button>
          </Link>
        </div>
      )}

      {isCouponModalVisibile ? (
        <div className="modal-container coupon-modal active">
          <div className="modal m-md1 p-s">
            <header className="">
              <div className="modal-title fs-4 fw-600">Select Coupon</div>
              <button onClick={couponModalToggleClick} className="btn-unset">
                <i
                  id="demo-modal-close-btn"
                  className="fas fa-times close-icon fs-4"
                ></i>
              </button>
            </header>
            <section className="modal-body">
              <div className={`radio ${price < 5000 ? "disabled" : ""} `}>
                <input
                  onChange={() => setSelectedCoupon(10)}
                  checked={selectedCoupon === 10}
                  type="radio"
                  name="coupon"
                  id="coupon-10"
                  disabled={price < 5000 ? true : false}
                />
                <label htmlFor="coupon-10">FIT10 - 10% Off above ₹5000.</label>
              </div>

              <div className={`radio ${price < 10000 ? "disabled" : ""}`}>
                <input
                  onChange={() => setSelectedCoupon(15)}
                  checked={selectedCoupon === 15}
                  type="radio"
                  name="coupon"
                  id="coupon-15"
                  disabled={price < 10000 ? true : false}
                />
                <label htmlFor="coupon-15">GYM15 - 15% Off above ₹10000.</label>
              </div>
            </section>
          </div>
        </div>
      ) : null}
    </>
  );
}
