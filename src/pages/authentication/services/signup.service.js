import axios from "axios";

export const signupService = async (userData, authDispatch, navigate) => {

    try {
        const { firstName, lastName, email, password } = userData;

        const response = await axios.post("/api/auth/signup", {
            firstName,
            lastName,
            email,
            password,
        });

        switch (response.status) {
            case 201:
                localStorage.setItem("token", response.data.encodedToken);
                authDispatch({
                    type: "SIGN_UP",
                    payload: {
                        user: response.data.createdUser,
                        token: response.data.encodedToken,
                    },
                });
                alert("Signup Successfull!");
                navigate("/");
                break;
            case 422:
                throw new Error("User already exists");
            case 500:
                throw new Error("Server Error");
            default:
                throw new Error("Unknown Error Occured.");
        }
    } catch (error) {
        alert("Error Occured, Please Try Again.", error)
    }
}
