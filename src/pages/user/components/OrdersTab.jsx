import { Fragment } from "react";
import { useOrder } from "../../../context";

function Order({ orderObj }) {
  const {
    _id,
    date,
    price,
    finalCouponedPrice,
    selectedCoupon,
    deliveryAddress,
    cart,
  } = orderObj;

  return (
    <div className="p-xs order-summary w-100pc">
      <section className="divider">
        <p className="fw-600 p-xxxs p-rl0 green-text"> Order Confirmed </p>
        <p className="gray-text fs-14px"> {date} </p>
        <p className="m-xxs m-rl0 fs-14px"> Order Id: #{_id.slice(0, 15)} </p>
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

      <table className="p-xs p-rl0 w-100pc">
        <thead>
          <tr className="fw-600 p-xxxs p-rl0 left-align-text">
            <td>Price Details:</td>
          </tr>
        </thead>
        <tbody className="fs-14px">
          <tr>
            <td className="p-xxxs p-rl0">Price ({cart.length} items)</td>
            <td>₹ {price}</td>
          </tr>
          <tr>
            <td className="p-xxxs p-rl0"> Discount </td>
            <td>{selectedCoupon ? `${selectedCoupon}%` : "-"}</td>
          </tr>
          <tr>
            <td className="p-xxxs p-rl0">Delivery Charge</td>
            <td>₹45</td>
          </tr>
        </tbody>
        <tfoot className="fs-14px">
          <tr>
            <td className="p-xxxs p-rl0 fw-600">Total Amount</td>
            <td className="fw-600">
              ₹ {Number(finalCouponedPrice.toFixed(0)) + 45}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export function OrdersTab() {
  const {
    orderState: { prevOrders },
  } = useOrder();
  return (
    <div className="orders-tab flex flex-column">
      <h3 className="fw-600 fs-4 center-align-text"> My Orders </h3>
      {prevOrders.map((item) => (
        <Fragment key={item._id}>
          <Order orderObj={item} />
        </Fragment>
      ))}
    </div>
  );
}
