import { useState } from "react";
import { toast } from "react-toastify";
import { v4 as uuid } from "uuid";
import { useOrder } from "../context";
import { checkIfAllInputsAreNotEmpty } from "../helpers";
import { TextInput } from "../pages/authentication/components/TextInput";

export function AddAddressModal({
  setIsAddressModalVisible,
  editAddressObj,
  setEditAddressObj,
}) {
  const {
    orderState: { addresses },
    orderDispatch,
  } = useOrder();

  const initialUserInputState = editAddressObj.isEditMode
    ? addresses.find((item) => item.id === editAddressObj.id)
    : {
        id: uuid(),
        country: "",
        name: "",
        city: "",
        address: "",
        state: "",
        zipcode: "",
        mobile: "",
      };

  const [userInputData, setUserInputData] = useState(initialUserInputState);

  const addDummyAddress = () => {
    const dummyData = {
      id: uuid(),
      country: "India",
      name: "John Doe",
      city: "Mumbai",
      address: "E045 , B.S Ring Road, Near Taj Hotel - 4th Floor, Osho Kabir",
      state: "Maharashtra",
      zipcode: "784411",
      mobile: "8877665544",
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
      orderDispatch({
        type: "SAVE_EDITED_ADDRESS",
        payload: { id: editAddressObj.id, address: userInputData },
      });
      setEditAddressObj({ isEditMode: false, id: null });
    } else {
      orderDispatch({
        type: "ADD_ADDRESS",
        payload: { address: userInputData },
      });
    }
  };

  const closeAddressModal = () => {
    setEditAddressObj({ isEditMode: false, id: null });
    setIsAddressModalVisible(false);
  };

  return (
    <div className="modal-container flex flex-center address-modal active">
      <div className="modal m-md1">
        <header className="p-s">
          <div className="modal-title fs-3 fw-600"> Add New Address </div>
          <button onClick={closeAddressModal} className="btn-unset">
            <i className="fas fa-times close-icon fs-3"></i>
          </button>
        </header>
        <section className="modal-body p-s">
          <TextInput
            labelText="Full Name"
            id="name"
            name="name"
            placeholder="John Doe"
            userData={userInputData}
            setUserData={setUserInputData}
            type="text"
          />

          <TextInput
            labelText="Address"
            id="address"
            name="address"
            placeholder="E045 , B.S Ring Road, Near Taj Hotel - 4th Floor, Osho...."
            userData={userInputData}
            setUserData={setUserInputData}
            type="text"
          />

          <TextInput
            labelText="City"
            id="city"
            name="city"
            placeholder="Mumbai"
            userData={userInputData}
            setUserData={setUserInputData}
            type="text"
          />

          <TextInput
            labelText="State"
            id="state"
            name="state"
            placeholder="Maharashtra"
            userData={userInputData}
            setUserData={setUserInputData}
            type="text"
          />

          <TextInput
            labelText="Country"
            id="country"
            name="country"
            placeholder="India"
            userData={userInputData}
            setUserData={setUserInputData}
            type="text"
          />

          <TextInput
            labelText="Zipcode"
            id="zipcode"
            name="zipcode"
            placeholder="784411"
            userData={userInputData}
            setUserData={setUserInputData}
            type="number"
          />

          <TextInput
            labelText="Mobile Number"
            id="mobile"
            name="mobile"
            placeholder="8877665544"
            userData={userInputData}
            setUserData={setUserInputData}
            type="number"
          />
        </section>
        <footer className="modal-actions p-s">
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
