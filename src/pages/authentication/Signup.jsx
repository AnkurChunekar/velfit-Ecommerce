import "./Authentication.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function TextInput({
  labelText,
  id,
  name,
  placeholder,
  type,
  setUserData,
  userData,
}) {
  return (
    <div className="input-wrapper m-xxxs m-rl0">
      <label htmlFor={id}> {labelText} </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        name={name}
        onChange={(e) => setUserData({ ...userData, [name]: e.target.value })}
        value={userData[name]}
        className="input p-xxs m-xxs m-rl0 bd-rad-sm"
        required
      />
    </div>
  );
}

function PasswordInput({
  labelText,
  id,
  name,
  placeholder,
  setUserData,
  userData,
}) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className={`input-wrapper m-xxxs m-rl0 ${
        userData.passwordsDifferent ? "error" : ""
      }`}
    >
      <label htmlFor={id}> {labelText} </label>
      <div className="input-wrapper bd-rad-sm input-w-btn flex flex-row ai-center m-xxs m-rl0">
        <input
          type={isVisible ? "text" : "password"}
          className="p-xxs input"
          placeholder={placeholder}
          name={name}
          value={userData[name]}
          onChange={(e) => setUserData({ ...userData, [name]: e.target.value })}
        />
        <div
          className="p-xxs gray-text input-btn"
          onClick={() => setIsVisible((v) => !v)}
        >
          <i className={`fa-solid ${isVisible ? "fa-eye" : "fa-eye-slash"}`} />
        </div>
      </div>
      <label className="error-msg fs-6">Passwords Don't Match</label>
    </div>
  );
}

export default function Signup() {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    passwordsDifferent: false,
  });

  const doSignupNetworkCall = () => {
    try {
      const { firstName, lastName, email, password } = userData;

      (async () => {
        const response = await axios.post("/api/auth/signup", {
          firstName,
          lastName,
          email,
          password,
        });

        switch (response.status) {
          case 201:
            localStorage.setItem("token", response.data.encodedToken);
            break;
          case 422:
            throw new Error("User already exists");
          case 500:
            throw new Error("Server Error");
        }
      })();
    } catch (error) {
      alert("Unknown Error Occurred", error);
    }
  };

  const handleSubmitClick = (e) => {
    e.preventDefault();
    if (userData.password !== userData.confirmPassword) {
      setUserData({ ...userData, passwordsDifferent: true });
    } else {
      doSignupNetworkCall();
    }
  };

  return (
    <>
      <main className="main-container flex flex-center">
        <form className="authentication-container flex flex-column ai-left p-md2 m-xs">
          <h1 className="title m-s m-rl0 fs-3 fw-600">Sign up</h1>
          <div className="flex c-gap-1rem">
            <TextInput
              labelText="First Name"
              id="firstName"
              name="firstName"
              placeholder="John"
              userData={userData}
              setUserData={setUserData}
              type="text"
            />
            <TextInput
              labelText="Last Name"
              id="lastName"
              name="lastName"
              placeholder="Doe"
              userData={userData}
              setUserData={setUserData}
              type="text"
            />
          </div>
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

          <PasswordInput
            labelText="Confirm Password"
            id="confirm-password"
            name="confirmPassword"
            placeholder="confirm password"
            userData={userData}
            setUserData={setUserData}
          />

          <p className="m-xxs m-rl0 gray-text fs-6">
            By signing up, you agree to our terms and conditions.
          </p>
          <button
            type="submit"
            className="btn btn-primary m-xxs m-rl0"
            onClick={handleSubmitClick}
          >
            Sign Up
          </button>
          <p className="m-xxs m-rl0 center-align-text gray-text">
            Already a User?{" "}
            <Link to="/login" className="primary-color-text">
              Log in
            </Link>
          </p>
        </form>
      </main>
    </>
  );
}
