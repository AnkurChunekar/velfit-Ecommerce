import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart, useOrder } from "../../context";
import { getAddressesService } from "../../services";
import {
  cartPriceCalculator,
  handleCouponDiscount,
} from "../../helpers/cartHelpers";
import { CouponModal } from "../../components";
import { CartSummary } from "./components/CartSummary";
import { OrderSummary } from "./components/OrderSummary";
import { DeliveryAddress } from "./components/DeliveryAddress";
import "./CartManagement.css";

export default function CartManagement() {
  const [selectedCoupon, setSelectedCoupon] = useState(0);
  const {
    orderState: { addresses },
    orderDispatch,
  } = useOrder();

  const { cartState: {cart} } = useCart();
  const { price } = cartPriceCalculator(cart);
  const [isCouponModalVisibile, setIsCouponModalVisible] = useState(false);
  const [currentCartStep, setCurrentCartStep] = useState("1");
  const token = localStorage.getItem("token");

  // Coupon Functionalities

  const couponModalToggleClick = () => {
    setIsCouponModalVisible((isCouponModalVisibile) => !isCouponModalVisibile);
  };

  const finalCouponedPrice = handleCouponDiscount(price, selectedCoupon);

  useEffect(() => {
    if (price < 5000 || (price < 10000 && selectedCoupon !== 10)) {
      setSelectedCoupon(0);
    }
  }, [price, selectedCoupon]);

  useEffect(() => {
    if (addresses.length < 1) {
      getAddressesService(orderDispatch, token);
    }
  }, []);

  const getCurrentStepComponent = () => {
    switch (currentCartStep) {
      case "1":
        return (
          <CartSummary
            price={price}
            selectedCoupon={selectedCoupon}
            cart={cart}
            couponModalToggleClick={couponModalToggleClick}
            setCurrentCartStep={setCurrentCartStep}
            finalCouponedPrice={finalCouponedPrice}
          />
        );
      case "2":
        return <DeliveryAddress setCurrentCartStep={setCurrentCartStep} />;
      case "3":
        return (
          <OrderSummary
            finalCouponedPrice={finalCouponedPrice}
            price={price}
            setCurrentCartStep={setCurrentCartStep}
            selectedCoupon={selectedCoupon}
          />
        );
      default:
        return null;
    }
  };

  const getPageTitle = () => {
    switch (currentCartStep) {
      case "1":
        return `My Cart (${cart.length})`;
      case "2":
        return "Choose An Address";
      case "3":
        return "Checkout Page";
      default:
        return "My Cart";
    }
  };

  return (
    <>
      {cart.length > 0 ? (
        <>
          <header className="center-align-text m-lg">
            <h1 className="fs-3 fw-600"> {getPageTitle()} </h1>
          </header>
          {getCurrentStepComponent()}
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
        <CouponModal
          price={price}
          selectedCoupon={selectedCoupon}
          setSelectedCoupon={setSelectedCoupon}
          couponModalToggleClick={couponModalToggleClick}
        />
      ) : null}
    </>
  );
}
