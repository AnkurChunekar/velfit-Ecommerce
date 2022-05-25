import { useState, Fragment } from "react";
import { toast } from "react-toastify";
import { useOrder } from "../../../context";
import { AddAddressModal } from "../../../components";

function Address({ addressObj, selectedAddress, setSelectedAddress }) {
  const {
    _id,
    country = "",
    name = "",
    city = "",
    street = "",
    state = "",
    zipCode = "",
    mobile = "",
  } = addressObj;

  return (
    <div className="radio flex c-gap-1rem p-xs">
      <input
        checked={selectedAddress._id === _id}
        onChange={() => setSelectedAddress(addressObj)}
        className="m-xxs m-rl0"
        type="radio"
        name="address"
        id={_id}
      />
      <label htmlFor={_id}>
        <h5 className="m-xxxs m-rl0"> {name} </h5>
        <p className="fs-14px">{street}</p>
        <span className="fs-14px">
          {city}, {state}, {zipCode}
        </span>
        <p className="fs-14px"> {country} </p>
        <span className="fs-14px"> Mobile: {mobile} </span>
      </label>
    </div>
  );
}

export function DeliveryAddress({ setCurrentCartStep }) {
  const [isAddressModalVisible, setIsAddressModalVisible] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(false);
  const {
    orderState: { addresses },
    orderDispatch,
  } = useOrder();

  const handleProceedClick = () => {
    if (selectedAddress) {
      orderDispatch({
        type: "UPDATE_DELIVERY_ADDRESS",
        payload: { selectedAddress },
      });
      setCurrentCartStep("3");
    } else {
      toast.error("please select Delivery Address");
    }
  };

  return (
    <div className="delivery-address">
      {addresses.map((item) => (
        <Fragment key={item._id}>
          <Address
            selectedAddress={selectedAddress}
            setSelectedAddress={setSelectedAddress}
            addressObj={item}
          />
        </Fragment>
      ))}

      <div>
        <button
          onClick={() => setIsAddressModalVisible(true)}
          className="btn btn-dark"
        >
          Add Address
        </button>
      </div>

      <div className="flex ai-center jc-space-b flex-wrap c-gap-1rem p-s p-rl0">
        <button
          onClick={() => setCurrentCartStep("1")}
          className="btn btn-secondary"
        >
          Back
        </button>

        <button
          onClick={handleProceedClick}
          className="btn btn-primary"
        >
          Proceed
        </button>
      </div>

      {isAddressModalVisible ? (
        <AddAddressModal setIsAddressModalVisible={setIsAddressModalVisible} />
      ) : null}
    </div>
  );
}
