import "./User.css";
import { useNavigate } from "react-router-dom";
import { useAuth, useCart, useWishlist } from "../../context";

export default function User() {
  const { authState, authDispatch } = useAuth();
  const navigate = useNavigate();
  const { user, token } = authState;
  const { cartDispatch } = useCart();
  const { wishlistDispatch } = useWishlist();

  const handleLogoutClick = () => {
    alert("Logout Successfull!");
    navigate("/");
    localStorage.removeItem("token");
    authDispatch({ type: "LOGOUT" });
    cartDispatch({ type: "RESET" });
    wishlistDispatch({ type: "RESET" });
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
