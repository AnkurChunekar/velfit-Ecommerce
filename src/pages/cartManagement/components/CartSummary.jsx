import { Fragment } from "react";
import { Card } from "../../../components";

const CartSummary = ({
  couponModalToggleClick,
  cart,
  selectedCoupon,
  price,
  setCurrentCartStep,
  finalCouponedPrice
}) => {
  return (
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
            <strong>₹ {Number(finalCouponedPrice.toFixed(0)) + 45}</strong>
          </li>
          <div className="divider" />
          <li>
            <span>
              You will save
              <span className="green-text m-xxs">
                ₹{(price - finalCouponedPrice).toFixed(2)}
              </span>
              on this order.
            </span>
          </li>
          <li>
            <button onClick={() => setCurrentCartStep("2")} className="btn btn-primary checkout-btn">
              Proceed to Checkout
            </button>
          </li>
        </ul>
      </section>
    </div>
  );
};

export { CartSummary };
