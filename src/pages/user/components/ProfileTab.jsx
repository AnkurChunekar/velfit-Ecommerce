import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth, useCart, useWishlist } from "../../../context";

export function ProfileTab() {
  const navigate = useNavigate();
  const { authDispatch } = useAuth();
  const { cartDispatch } = useCart();
  const { wishlistDispatch } = useWishlist();

  const handleLogoutClick = () => {
    toast.success("Logout Successfull!");
    navigate("/");
    localStorage.removeItem("token");
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
          value="John Doe"
          className="input p-xxs m-xxs m-rl0 bd-rad-sm"
        />
      </div>

      <div className="input-wrapper m-xxs m-rl0">
        <label className="text"> Email </label>
        <input
          disabled
          value="johndoe@gmail.com"
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
