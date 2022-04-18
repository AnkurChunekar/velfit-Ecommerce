import { useState, Fragment, useEffect } from "react";
import { useOrder, useAuth } from "../../../context";
import { AddAddressModal } from "../../../components/AddAddressModal";
import { deleteAddressService, getAddressesService } from "../../../services";

function Address({ addressObj, setIsAddressModalVisible, setEditAddressObj, token }) {
  const { orderDispatch } = useOrder();
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

  const deleteAddressClick = () => {
    deleteAddressService({ token, _id, orderDispatch });
  };

  const editAddressClick = () => {
    setIsAddressModalVisible(true);
    setEditAddressObj({ isEditMode: true, _id });
  };

  return (
    <div className="address p-s flex flex-column">
      <b> {name} </b>
      <p className="fs-14px"> {street} </p>
      <p className="fs-14px">
        {city}, {state}, {zipCode}
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
  const {
    orderState: { addresses },
    orderDispatch,
  } = useOrder();

  const { authState } = useAuth();
  const token = authState.token || localStorage.getItem("token");

  useEffect(() => {
    getAddressesService(orderDispatch, token);
  }, []);

  const [isAddressModalVisible, setIsAddressModalVisible] = useState(false);
  const [editAddressObj, setEditAddressObj] = useState({
    isEditMode: false,
    id: "",
  });

  return (
    <div className="addresses-tab">
      <h3 className="fw-600 fs-4 m-s center-align-text"> My Addresses </h3>

      <div className="address-wrapper flex flex-row">
        <button
          onClick={() => setIsAddressModalVisible(true)}
          className="add-btn p-xxs w-100pc btn-unset fs-4"
        >
          <i className="fa-solid fa-plus fs-2"></i>
          <div className="m-xs"> Add Address </div>
        </button>
        {addresses.map((item) => (
          <Fragment key={item._id}>
            <Address
              setEditAddressObj={setEditAddressObj}
              setIsAddressModalVisible={setIsAddressModalVisible}
              addressObj={item}
              token={token}
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
