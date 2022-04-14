import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useCart, useAuth, useOrder } from "../../../context";
import { removeFromCartService } from "../../../services";
import { logo } from "../../../images";

const OrderSummary = ({
  finalCouponedPrice,
  price,
  selectedCoupon,
  setCurrentCartStep,
}) => {
  const navigate = useNavigate();
  const {
    cartState: { cart },
    cartDispatch,
  } = useCart();

  const {
    authState: { user, token },
  } = useAuth();

  const {
    orderState: { deliveryAddress },
  } = useOrder();

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
            removeFromCartService({
              token,
              cartDispatch,
              product,
              finalOrder: true,
            })
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
    <div className="p-xs order-summary">
      <section className="divider">
        <p className="fw-600 p-xxxs p-rl0"> Order Summary: </p>
        {cart.map((item) => (
          <div key={item.id} className="flex c-gap-1rem p-xxs p-rl0">
            <div>
              <img
                className="img-responsive"
                src={item.image}
                alt={item.title}
              />
            </div>
            <div className="flex flex-column">
              <span className="fw-600"> {item.title} </span>
              <span className="fs-14px"> Qty: {item.qty} </span>
              <span className="fs-14px">Price: ₹ {item.price * item.qty}</span>
            </div>
          </div>
        ))}
      </section>

      <section className="p-s p-rl0 divider">
        <p className="fw-600 p-xxxs p-rl0"> Delivery Address: </p>
        <div>
          <p className="m-xxxs m-rl0"> {deliveryAddress.name} </p>
          <p className="fs-14px">{deliveryAddress.address}</p>
          <span className="fs-14px">
            {deliveryAddress.city}, {deliveryAddress.state},
            {deliveryAddress.zipcode}
          </span>
          <p className="fs-14px"> {deliveryAddress.country} </p>
          <span className="fs-14px"> Mobile: {deliveryAddress.mobile} </span>
        </div>
      </section>

      <table className="p-xs p-rl0 divider w-100pc">
        <thead>
          <th className="fw-600 p-xxxs p-rl0 left-align-text">
            Price Details:
          </th>
        </thead>
        <tbody className="fs-14px">
          <tr>
            <td className="p-xxxs p-rl0">Price ({cart.length} items)</td>
            <td>₹ {price} </td>
          </tr>
          <tr>
            <td className="p-xxxs p-rl0"> Discount </td>
            <td> {selectedCoupon ? `${selectedCoupon}%` : "-"} </td>
          </tr>
          <tr>
            <td className="p-xxxs p-rl0"> Delivery Charge </td>
            <td> ₹45 </td>
          </tr>
        </tbody>
        <tfoot className="fs-14px">
          <tr>
            <td className="p-xxxs p-rl0 fw-600"> Total Amount </td>
            <td className="fw-600">
              ₹ {Number(finalCouponedPrice.toFixed(0)) + 45}
            </td>
          </tr>
        </tfoot>
      </table>

      <button onClick={placeOrder} className="btn btn-primary w-100pc">
        Place Order
      </button>

      <button
        onClick={() => setCurrentCartStep("2")}
        className="btn btn-secondary w-100pc"
      >
        Back
      </button>
    </div>
  );
};

export { OrderSummary };
