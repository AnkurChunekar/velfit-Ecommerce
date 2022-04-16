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
