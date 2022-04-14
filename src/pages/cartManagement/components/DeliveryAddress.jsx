import { useState, Fragment } from "react";
import { toast } from "react-toastify";
import { useOrder } from "../../../context";
import { AddAddressModal } from "../../../components";

function Address({ addressObj, selectedAddress, setSelectedAddress }) {
  const {
    id,
    country = "",
    name = "",
    city = "",
    address = "",
    state = "",
    zipcode = "",
    mobile = "",
  } = addressObj;

  return (
    <div className="radio flex c-gap-1rem p-xs">
      <input
        checked={selectedAddress.id === id}
        onChange={() => setSelectedAddress(addressObj)}
        className="m-xxs m-rl0"
        type="radio"
        name="address"
        id={id}
      />
      <label htmlFor={id}>
        <h5 className="m-xxxs m-rl0"> {name} </h5>
        <p className="fs-14px">{address}</p>
        <span className="fs-14px">
          {city}, {state}, {zipcode}
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
      orderDispatch({type: "UPDATE_DELIVERY_ADDRESS", payload: {selectedAddress}})
      setCurrentCartStep("3");
    } else {
      toast.error("please select Delivery Address");
    }
  };

  return (
    <div className="delivery-address">
      {addresses.map((item) => (
        <Fragment key={item.id}>
          <Address
            selectedAddress={selectedAddress}
            setSelectedAddress={setSelectedAddress}
            addressObj={item}
          />
        </Fragment>
      ))}

      <div className="flex ai-center flex-wrap c-gap-1rem p-s p-rl0">
        <button
          onClick={() => setCurrentCartStep("1")}
          className="btn btn-secondary"
        >
          Back
        </button>
        <button
          onClick={() => setIsAddressModalVisible(true)}
          className="btn btn-dark"
        >
          Add New Address
        </button>
        <button onClick={handleProceedClick} className="btn btn-primary m-left-auto">
          Proceed
        </button>
      </div>

      {isAddressModalVisible ? (
        <AddAddressModal setIsAddressModalVisible={setIsAddressModalVisible} />
      ) : null}
    </div>
  );
}
