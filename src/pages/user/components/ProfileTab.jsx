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

      <div className="input-wrapper m-xxs m-rl0">
        <label className="text"> Full Name </label>
        <input
          disabled
          value={user.firstName + " " + user.lastName}
          className="input p-xxs m-xxs m-rl0 bd-rad-sm"
        />
      </div>

      <div className="input-wrapper m-xxs m-rl0">
        <label className="text"> Email </label>
        <input
          disabled
          value={user.email}
          className="input p-xxs m-xxs m-rl0 bd-rad-sm"
        />
      </div>

      <h2 className="fw-600 fs-5 m-s m-rl0"> Settings </h2>


      <button
        onClick={handleLogoutClick}
        className="btn btn-danger"
      >
        Logout
      </button>
    </div>
  );
}
