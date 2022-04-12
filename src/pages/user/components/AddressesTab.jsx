import { useState, Fragment } from "react";
import { useOrder } from "../../../context";
import { AddAddressModal } from "../../../components/AddAddressModal";

function Address({ addressObj, setIsAddressModalVisible, setEditAddressObj }) {
  const { orderDispatch } = useOrder();
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

  const deleteAddressClick = () => {
    orderDispatch({ type: "DELETE_ADDRESS", payload: { id } });
  };

  const editAddressClick = () => {
    setIsAddressModalVisible(true);
    setEditAddressObj({ isEditMode: true, id });
  };

  return (
    <div className="address p-s flex flex-column">
      <b> {name} </b>
      <p className="fs-14px"> {address} </p>
      <p className="fs-14px">
        {city}, {state}, {zipcode}
      </p>
      <p className="fs-14px"> {country} </p>
      <span className="fs-14px"> Mobile: {mobile} </span>
      <div>
        <button onClick={editAddressClick} className="btn-unset">
          Edit
        </button>
        <span className="m-xxxs"> | </span>

        <button onClick={deleteAddressClick} className="btn-unset">
          Delete
        </button>
      </div>
    </div>
  );
}

export function AddressesTab() {
  const [isAddressModalVisible, setIsAddressModalVisible] = useState(false);
  const [editAddressObj, setEditAddressObj] = useState({
    isEditMode: false,
    id: "",
  });

  const {
    orderState: { addresses },
  } = useOrder();

  return (
    <div className="addresses-tab">
      <h3 className="fw-600 m-s center-align-text"> Your Addresses </h3>

      <div className="address-wrapper flex flex-row">
        <button
          onClick={() => setIsAddressModalVisible(true)}
          className="add-btn p-xxs w-100pc btn-unset fs-4"
        >
          <i className="fa-solid fa-plus fs-2"></i>
          <div className="m-xs"> Add Address </div>
        </button>
        {addresses.map((item) => (
          <Fragment key={item.id}>
            <Address
              setEditAddressObj={setEditAddressObj}
              setIsAddressModalVisible={setIsAddressModalVisible}
              addressObj={item}
            />
          </Fragment>
        ))}
      </div>
      {isAddressModalVisible ? (
        <AddAddressModal
          setEditAddressObj={setEditAddressObj}
          editAddressObj={editAddressObj}
          setIsAddressModalVisible={setIsAddressModalVisible}
        />
      ) : null}
    </div>
  );
}
