import "./Auth.css";
import { Link, useNavigate } from "react-router-dom";
import { TextInput, PasswordInput } from "./components";
import { useState } from "react";
import { useAuth } from "../../context";
import axios from "axios";

export default function Login() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { authDispatch } = useAuth();

  const doLoginNetworkCall = async () => {
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
          alert("Login Successfull!")
          navigate("/");
          break;
        case 404:
          throw new Error("Invalid Email ID");
        case 401:
          throw new Error("Incorrect password");
        case 500:
          throw new Error("Error occured while getting response from server");
      }
    } catch (error) {
      alert(
        "Error Occured: please check credentials or try again later.",
        error
      );
    }
  };

  const handleLoginClick = (e) => {
    e.preventDefault();

    if (userData.email === "" && userData.password === "") {
      alert("please enter appropriate fields");
    } else {
      doLoginNetworkCall();
    }
  };

  const handleGuestLoginClick = (e) => {
    e.preventDefault();
    setUserData({ email: "johndoe@gmail.com", password: "johnDoe123" });
  };

  return (
    <>
      <main className="main-container flex ai-start jc-center">
        <form className="authentication-container flex flex-column ai-left p-md2 m-xs">
          <h1 className="title m-s m-rl0 fs-3 fw-600">Log in</h1>

          <TextInput
            labelText="Email"
            id="email"
            name="email"
            placeholder="johndoe@gmail.com"
            userData={userData}
            setUserData={setUserData}
            type="email"
          />

          <PasswordInput
            labelText="Password"
            id="password"
            name="password"
            placeholder="password"
            userData={userData}
            setUserData={setUserData}
          />

          <button
            type="submit"
            className="btn btn-primary m-xxs m-rl0"
            onClick={handleLoginClick}
          >
            LOGIN
          </button>
          <p className="m-xxs m-rl0 center-align-text gray-text">
            New User?{" "}
            <Link className="primary-color-text" to="/signup">
              Sign Up!
            </Link>
            .
          </p>
          <button
            onClick={handleGuestLoginClick}
            className="primary-color-text center-align-text m-xxs m-rl0 transparent-bg"
          >
            Use Guest Credentials.
          </button>
        </form>
      </main>
    </>
  );
}
