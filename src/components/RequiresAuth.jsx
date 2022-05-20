import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context";

export function RequiresAuth({ children }) {
  const location = useLocation();
  const { authState } = useAuth();
  const token = authState.token || localStorage.getItem("token");

  return token ? (
    children
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
}
