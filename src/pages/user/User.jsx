import "./User.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context";
import { useState } from "react/cjs/react.production.min";

export default function User() {
  const { authState, authDispatch } = useAuth();
  const navigate = useNavigate();
  const { user, token } = authState;

  const handleLogoutClick = () => {
    alert("Logout Successfull!");
    navigate("/");
    localStorage.removeItem("token");
    authDispatch({ type: "LOGOUT" });
  };

  return (
    <div className="user-page center-align-text">
      <h1> Hello, {user.firstName} </h1>
      <button className="btn btn-danger" onClick={handleLogoutClick}>
        Logout
      </button>
    </div>
  );
}
