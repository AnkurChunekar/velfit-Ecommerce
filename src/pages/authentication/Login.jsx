import "./Auth.css";
import { Link, useNavigate } from "react-router-dom";
import { TextInput, PasswordInput } from "./components";
import { useState } from "react";
import { useAuth, useCart, useWishlist } from "../../context";
import { loginService } from "./services/login.service";
import { checkIfAllInputsAreNotEmpty } from "../../helpers";

export default function Login() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { authDispatch } = useAuth();
  const { cartDispatch } = useCart();
  const { wishlistDispatch } = useWishlist();

  const handleLoginClick = (e) => {
    e.preventDefault();

    if (!checkIfAllInputsAreNotEmpty(userData)) {
      alert("Email and Password cannot be empty!");
    } else {
      loginService({userData, authDispatch, cartDispatch, wishlistDispatch, navigate});
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
