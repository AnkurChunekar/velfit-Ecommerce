import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

import { useAuth, useCart, useWishlist, useOrder } from "../../context";
import { loginService } from "../../services";
import { TextInput, PasswordInput } from "./components";
import "./Auth.css";

export function Login() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    rememberUser: false,
  });

  const navigate = useNavigate();
  const location = useLocation();

  const { authDispatch } = useAuth();
  const { cartDispatch } = useCart();
  const { orderDispatch } = useOrder();
  const { wishlistDispatch } = useWishlist();

  const handleLoginClick = async (e) => {
    e.preventDefault();

    if (userData.email.trim() === "" && userData.password.trim() === "") {
      toast.error("Email and Password cannot be empty!");
    } else {
      const response = await loginService(userData);

      if (response.status === 200) {
        if (userData.rememberUser) {
          const { firstName, lastName, email } = response.data.foundUser;
          localStorage.setItem("token", response.data.encodedToken);
          localStorage.setItem(
            "user",
            JSON.stringify({ firstName, lastName, email })
          );
        }
        authDispatch({
          type: "LOGIN",
          payload: {
            user: response.data.foundUser,
            token: response.data.encodedToken,
          },
        });
        cartDispatch({
          type: "UPDATE_CART",
          payload: { cart: response.data.foundUser.cart },
        });
        wishlistDispatch({
          type: "UPDATE_WISHLIST",
          payload: { wishlist: response.data.foundUser.wishlist },
        });
        orderDispatch({
          type: "UPDATE_ADDRESSES",
          payload: { addresses: response.data.foundUser.address },
        });
        toast.success("Login Successfull!");
        navigate(location?.state?.from?.pathname || "/", { replace: true });
      } else toast.error(response.message);
    }
  };

  const handleGuestLoginClick = (e) => {
    setUserData({
      email: "shellyburton@gmail.com",
      password: "shellyburton123",
      rememberUser: true,
    });
  };

  return (
    <>
      <main className="main-container flex ai-start jc-center">
        <form
          onSubmit={handleLoginClick}
          className="authentication-container flex flex-column ai-left p-md2 m-xs"
        >
          <h1 className="title m-s m-rl0 fs-3 fw-600">Log in</h1>

          <TextInput
            labelText="Email"
            id="email"
            name="email"
            placeholder="shellyburton@gmail.com"
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

          <div className="input-wrapper checkbox">
            <input
              type="checkbox"
              id="remember-me"
              name="remember-me"
              checked={userData.rememberUser}
              onChange={() => {
                setUserData((userData) => ({
                  ...userData,
                  rememberUser: !userData.rememberUser,
                }));
              }}
            />
            <label htmlFor="remember-me">Remember Me</label>
          </div>

          <button type="submit" className="btn btn-primary m-xxs m-rl0">
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
            type="button"
            onClick={handleGuestLoginClick}
            className="primary-color-text center-align-text m-xxs m-rl0 transparent-bg"
          >
            Add Guest Credentials.
          </button>
        </form>
      </main>
    </>
  );
}
