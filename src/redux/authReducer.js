const initialAuthState = { user: "", token: "" };

const authReducer = (state, action) => {
    switch (action.type) {
        case "SIGN_UP":
            return { user: action.payload.user, token: action.payload.token };
        case "LOGIN":
            return { user: action.payload.user, token: action.payload.token };
        case "LOGOUT":
            return initialAuthState;
        default:
            return state;
    }
}

export { authReducer };
