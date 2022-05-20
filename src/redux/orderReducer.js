import { cloneDeep } from "lodash";

const initialOrderState = {
  addresses: [],
  deliveryAddress: null,
  prevOrders: [],
};

const deepCloneAndUpdate = (object, propertyName, propertyValue) => {
  const copiedObject = cloneDeep(object);
  copiedObject[propertyName] = propertyValue;
  return copiedObject;
};

const orderReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_ADDRESSES":
      return deepCloneAndUpdate(state, "addresses", action.payload.addresses);

    case "UPDATE_DELIVERY_ADDRESS":
      return deepCloneAndUpdate(
        state,
        "deliveryAddress",
        action.payload.selectedAddress
      );

    case "ADD_TO_PREVIOUS_ORDERS":
      return deepCloneAndUpdate(state, "prevOrders", [
        action.payload.orderDetails,
        ...state.prevOrders,
      ]);

    default:
      return state;
  }
};

export { initialOrderState, orderReducer };
