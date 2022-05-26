import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth, useCart, useWishlist } from "../../../context";

export function ProfileTab() {
  const navigate = useNavigate();
  const { authDispatch, authState } = useAuth();
  const { cartDispatch } = useCart();
  const { wishlistDispatch } = useWishlist();

  const user = authState.user || JSON.parse(localStorage.getItem("user"));

  const handleLogoutClick = () => {
    toast.success("Logout Successfull!");
    navigate("/");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    authDispatch({ type: "LOGOUT" });
    cartDispatch({ type: "RESET" });
    wishlistDispatch({ type: "RESET" });
  };

  return (
    <div className="tab-container profile">
      <h2 className="fw-600 fs-4 m-s m-rl0 center-align-text"> My Profile </h2>
      
      <div>
        <p className="heading fs-4">Details</p>
        <p className="m-xs m-rl0">
          Name
          <span className="details">
            {user.firstName + " " + user.lastName}
          </span>
        </p>
        <p className="m-xs m-rl0">
          Email
          <span className="details">{user.email}</span>
        </p>
      </div>

      <div>
        <p className="heading fs-4">Settings</p>
        <button onClick={handleLogoutClick} className="btn btn-danger">
          Logout
        </button>
      </div>
    </div>
  );
}
