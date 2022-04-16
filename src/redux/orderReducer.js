const initialOrderState = {
  addresses: [],
  deliveryAddress: null,
};

const orderReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_ADDRESSES":
      return {
        ...initialOrderState,
        addresses: action.payload.addresses,
      };
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
