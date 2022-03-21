import "./CartManagement.css";
import { Fragment } from "react";
import { Card } from "../../components";
import { useCart } from "../../context";

export default function CartManagement() {
  const { cartState } = useCart();
  const { cart } = cartState;

  return (
    <>
      <header className="center-align-text m-lg">
        <h1 className="fs-3 fw-600">My Cart (2)</h1>
      </header>
      <div className="cart-management-page">
        <section className="card-container">
          {cart.length > 0 ? (
            cart.map((product) => (
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
            ))
          ) : (
            <h1> Cart is Empty </h1>
          )}
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
              <span>Price (2 items)</span>
              <span>$ 4999</span>
            </li>
            <li>
              <span>Discount</span>
              <span>-$1999</span>
            </li>
            <li>
              <span>Delivery Charge</span>
              <span>$499</span>
            </li>
            <div className="divider" />
            <li className="total">
              <strong>TOTAL AMOUNT</strong>
              <strong>$3499</strong>
            </li>
            <div className="divider" />
            <li>
              <span>You will save $1999 on this order</span>
            </li>
            <li>
              <button className="btn btn-primary checkout-btn">
                {" "}
                Checkout{" "}
              </button>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}
