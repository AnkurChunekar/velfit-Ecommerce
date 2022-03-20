import axios from "axios";

export const loginService = async (userData, authDispatch, navigate) => {

    try {
        const response = await axios.post("/api/auth/login", {
            email: userData.email,
            password: userData.password,
        });

        switch (response.status) {
            case 200:
                localStorage.setItem("token", response.data.encodedToken);
                authDispatch({
                    type: "LOGIN",
                    payload: {
                        user: response.data.foundUser,
                        token: response.data.encodedToken,
                    },
                });
                alert("Login Successfull!");
                navigate("/");
                break;
            case 404:
                throw new Error("Invalid Email ID");
            case 401:
                throw new Error("Incorrect password");
            case 500:
                throw new Error("Error occured while getting response from server");
            default:
                throw new Error("Unknown Error Occured.");
        }
    } catch (error) {
        alert(error);
    }
}
