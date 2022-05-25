import { useState, Fragment } from "react";
import { toast } from "react-toastify";
import { v4 as uuid } from "uuid";
import { useOrder, useAuth } from "../context";
import { checkIfAllInputsAreNotEmpty } from "../helpers";
import { addressModalInputData } from "../constants";
import { TextInput } from "../pages/authentication/components/TextInput";
import { addNewAddressService, editAddressService } from "../services";

export function AddAddressModal({
  setIsAddressModalVisible,
  editAddressObj = { isEditMode: false, _id: null },
  setEditAddressObj = () => {},
}) {
  const {
    orderState: { addresses },
    orderDispatch,
  } = useOrder();

  const { authState } = useAuth();
  const token = authState.token || localStorage.getItem("token");

  const initialUserInputState = editAddressObj.isEditMode
    ? addresses.find((item) => item._id === editAddressObj._id)
    : {
        _id: uuid(),
        country: "",
        name: "",
        city: "",
        street: "",
        state: "",
        zipCode: "",
        mobile: "",
      };

  const [userInputData, setUserInputData] = useState(initialUserInputState);

  const addDummyAddress = () => {
    const dummyData = {
      _id: uuid(),
      country: "India",
      name: "Raj Malhotra",
      city: "Pune",
      street: "E049 , R.B Road, Near Char Mahal - 18th Floor, King Tower",
      state: "Maharashtra",
      zipCode: "181916",
      mobile: "987654321",
    };
    setUserInputData(dummyData);
  };

  const saveAddressClick = () => {
    if (!checkIfAllInputsAreNotEmpty(userInputData)) {
      toast.error("Please Provide all the inputs");
      return;
    }

    setIsAddressModalVisible(false);
    setUserInputData(initialUserInputState);
    if (editAddressObj.isEditMode) {
      editAddressService({
        token,
        address: userInputData,
        _id: editAddressObj._id,
        orderDispatch,
      });
      setEditAddressObj({ isEditMode: false, _id: null });
    } else {
      addNewAddressService({ token, address: userInputData, orderDispatch });
    }
  };

  const closeAddressModal = () => {
    setEditAddressObj({ isEditMode: false, _id: null });
    setIsAddressModalVisible(false);
  };

  return (
    <div className="modal-container flex jc-center address-modal active">
      <div className="modal m-md1">
        <header className="p-xs">
          <div className="modal-title fs-3 fw-600"> Add New Address </div>
          <button onClick={closeAddressModal} className="btn-unset">
            <i className="fas fa-times close-icon fs-3"></i>
          </button>
        </header>
        <section className="modal-body ">
          {addressModalInputData.map((item) => (
            <Fragment key={item.id}>
              <TextInput
                labelText={item.labelText}
                id={item.name}
                name={item.name}
                placeholder={item.placeholder}
                userData={userInputData}
                setUserData={setUserInputData}
                type="text"
              />
            </Fragment>
          ))}
        </section>
        <footer className="modal-actions p-xs">
          <button onClick={addDummyAddress} className="btn btn-secondary">
            Dummy Address
          </button>
          <button onClick={saveAddressClick} className="btn btn-primary">
            Save
          </button>
        </footer>
      </div>
    </div>
  );
}
