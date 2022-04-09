import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useCart, useAuth } from "../../../context";
import { removeFromCartService } from "../../../services";
import { logo } from "../../../images";

const OrderSummary = ({
  couponModalToggleClick,
  cart,
  selectedCoupon,
  price,
  finalCouponedPrice
}) => {
  const navigate = useNavigate();
  const { cartDispatch } = useCart();
  const { authState: {user, token} } = useAuth();

  const placeOrder = async () => {
    const response = await loadSdk();
    if (response) {
      const options = {
        key: "rzp_test_GWnuASKHFHS4pU",
        key_id: "rzp_test_GWnuASKHFHS4pU",
        key_secret: "jDzGWGMaZxtKMuFquEuP2voz",
        amount: (Number(finalCouponedPrice.toFixed(0)) + 45) * 100,
        currency: "INR",
        name: "Velfit Store",
        description: "Thank you for shopping with us",
        image: logo,
        callback_url: "https://eneqd3r9zrjok.x.pipedream.net/",
        prefill: {
          name: user.firstName,
          email: user.email,
          contact: "9999999999",
        },
        notes: { address: "Razorpay Corporate Office" },
        theme: { color: "#1573ff" },
        handler: function (response) {
          cart.map((product) =>
          removeFromCartService({token, cartDispatch, product, finalOrder: true})
          );
          navigate("/products");
          toast.success("Order Placed Successfully");
        },
      };
      const rzp1 = new window.Razorpay(options);
      rzp1.open();
      rzp1.on("payment.failed", function (response) {
        toast.error("Something went wrong", response.error.code);
      });
    } else {
      toast.error("Something went wrong");
    }
  };

  const loadSdk = async () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  return (
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
          ₹ {Number(finalCouponedPrice.toFixed(0)) + 45}
        </strong>
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
        <button onClick={placeOrder} className="btn btn-primary checkout-btn">
          Checkout
        </button>
      </li>
    </ul>
  </section>
  );
};

export { OrderSummary };
