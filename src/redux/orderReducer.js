const initialOrderState = {
  addresses: [],
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
    default:
      return state;
  }
};

export { initialOrderState, orderReducer };
