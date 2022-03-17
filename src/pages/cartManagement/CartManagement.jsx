import "./CartManagement.css";
import { dumbbellPI } from "../../images";
import { Card } from "../../components";

export default function CartManagement() {
  return (
    <>
      <header className="center-align-text m-lg">
        <h1 className="fs-3 fw-600">My Cart (2)</h1>
      </header>
      <div className="cart-management-page">
        <section className="card-container">
          <Card className={"card-horizontal"} cardImage={dumbbellPI} />
          <Card className={"card-horizontal"} cardImage={dumbbellPI} />
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
