import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth, useCart, useWishlist } from "../../../context";

export function SettingsTab() {
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
    <div className="center-align-text m-md1">
      <h3 className="m-xxs m-rl0"> Account Settings </h3>
      <button
        onClick={handleLogoutClick}
        className="btn btn-danger m-xxs m-rl0"
      >
        Logout
      </button>
    </div>
  );
}
