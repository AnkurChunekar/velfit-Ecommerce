import "./CartManagement.css";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import { Card } from "../../components";
import { useCart } from "../../context";
import { cartPriceCalculator } from "../../helpers/cartHelpers";


export default function CartManagement() {
  const { cartState } = useCart();
  const { cart } = cartState;
  const { price } = cartPriceCalculator(cart);
  
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
                  <div className="input-wrapper bd-rad-sm input-w-btn flex flex-row ai-center">
                    <input
                      type="text"
                      className="p-xxs input"
                      placeholder="Apply Coupon Code.."
                    />
                    <button className="p-xxs primary-color-text input-btn">
                      Apply
                    </button>
                  </div>
                </li>
                <li>
                  <span>Price ({cart.length} items)</span>
                  <span>₹ {price} </span>
                </li>
                <li>
                  <span>Discount</span>
                  <span>-₹ 100</span>
                </li>
                <li>
                  <span>Delivery Charge</span>
                  <span>₹ 45</span>
                </li>
                <div className="divider" />
                <li className="total">
                  <strong>TOTAL AMOUNT</strong>
                  <strong> ₹ {price - 100 -45} </strong>
                </li>
                <div className="divider" />
                <li>
                  <span>You will save ₹ 0 on this order.</span>
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
    </>
  );
}
