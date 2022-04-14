const initialOrderState = {
  addresses: [
    {
      id: "address1",
      country: "India",
      name: "John Doe",
      city: "Mumbai",
      address: "E045 , B.S Ring Road, Near Taj Hotel - 4th Floor, Osho Kabir",
      state: "Maharashtra",
      zipcode: "784411",
      mobile: "8877665544",
    },
  ],
  deliveryAddress: null,
};

const orderReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ADDRESS":
      return {
        ...initialOrderState,
        addresses: state.addresses.concat(action.payload.address),
      };
    case "SAVE_EDITED_ADDRESS":
      return {
        ...initialOrderState,
        addresses: state.addresses.map((item) =>
          item.id === action.payload.id ? action.payload.address : item
        ),
      };
    case "DELETE_ADDRESS":
      return {
        ...initialOrderState,
        addresses: state.addresses.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    case "UPDATE_DELIVERY_ADDRESS":
      return {
        ...initialOrderState,
        addresses: [...state.addresses],
        deliveryAddress: action.payload.selectedAddress,
      };
    default:
      return state;
  }
};

export { initialOrderState, orderReducer };
