const initialAuthState = { user: "", token: "" };

const authReducer = (state, action) => {
  switch (action.type) {
    case "SIGNUP":
      return { user: action.payload.user, token: action.payload.token };
    case "LOGIN":
      return { user: action.payload.user, token: action.payload.token };
    case "LOGOUT":
      return initialAuthState;
    default:
      return state;
  }
};

export { authReducer };
