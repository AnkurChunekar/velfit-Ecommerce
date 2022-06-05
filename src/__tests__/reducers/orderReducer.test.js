import { orderReducer, initialOrderState } from "../../reducers";

describe("testing order reducer", () => {
  // Test for UPDATE ADDRESSES type
  test("should replace the addresses array in orderState with the given array", () => {
    const action = {
      type: "UPDATE_ADDRESSES",
      payload: {
        addresses: [{ id: "1234", firstName: "ankur", lastName: "chunekar" }],
      },
    };
    const finalState = {
      addresses: [{ id: "1234", firstName: "ankur", lastName: "chunekar" }],
      deliveryAddress: null,
      prevOrders: [],
    };

    expect(orderReducer(initialOrderState, action)).toEqual(finalState);
  });

  // Test for UPDATE DELIVERY ADDRESS type
  test("should replace the previous delivery address with the given the dilivery address", () => {
    const action = {
      type: "UPDATE_DELIVERY_ADDRESS",
      payload: {
        selectedAddress: {
          id: "1234",
          firstName: "ankur",
          lastName: "chunekar",
        },
      },
    };
    const finalState = {
      addresses: [],
      deliveryAddress: { id: "1234", firstName: "ankur", lastName: "chunekar" },
      prevOrders: [],
    };

    expect(orderReducer(initialOrderState, action)).toEqual(finalState);
  });

  // Test for ADD TO PREVIOUS ORDERS type
  test("should add the given order details to the prevOrders array ", () => {
    const initialState = {
      addresses: [],
      deliveryAddress: null,
      prevOrders: [
        {
          cart: [{ id: "5678", title: "Mens Pants", price: 2000 }],
          deliveryAddress: {
            id: "7777",
            firstName: "raj",
            lastName: "malthotra",
          },
        },
      ],
    };

    const action = {
      type: "ADD_TO_PREVIOUS_ORDERS",
      payload: {
        orderDetails: {
          cart: [{ id: "1234", title: "Mens Shirt", price: 4000 }],
          deliveryAddress: {
            id: "1234",
            firstName: "ankur",
            lastName: "chunekar",
          },
        },
      },
    };
    const finalState = {
      addresses: [],
      deliveryAddress: null,
      prevOrders: [
        {
          cart: [{ id: "1234", title: "Mens Shirt", price: 4000 }],
          deliveryAddress: {
            id: "1234",
            firstName: "ankur",
            lastName: "chunekar",
          },
        },
        {
          cart: [{ id: "5678", title: "Mens Pants", price: 2000 }],
          deliveryAddress: {
            id: "7777",
            firstName: "raj",
            lastName: "malthotra",
          },
        },
      ],
    };

    expect(orderReducer(initialState, action)).toEqual(finalState);
  });
});
