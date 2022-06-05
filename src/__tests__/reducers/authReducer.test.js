import { authReducer, initialAuthState } from "../../reducers";

describe("testing auth reducer", () => {
  test("should add user and token data value when SIGN_UP is dispatched", () => {
    const action = {
      type: "SIGNUP",
      payload: { user: { name: "ankur" }, token: "123456" },
    };

    const finalState = { user: { name: "ankur" }, token: "123456" };

    expect(authReducer(initialAuthState, action)).toEqual(finalState);
  });

  test("should add user and token data value when LOGIN is dispatched", () => {
    const action = {
      type: "LOGIN",
      payload: { user: { name: "ankur" }, token: "123456" },
    };

    const finalState = { user: { name: "ankur" }, token: "123456" };

    expect(authReducer(initialAuthState, action)).toEqual(finalState);
  });

  test("should remove user and token data value when LOG_OUT is dispatched", () => {
    const initialState = { user: { name: "ankur" }, token: "123456" };
    const action = { type: "LOGOUT" };
    const finalState = { user: "", token: "" };

    expect(authReducer(initialState, action)).toEqual(finalState);
  });
});
