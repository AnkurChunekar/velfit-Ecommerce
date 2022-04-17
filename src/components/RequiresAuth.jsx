import { Navigate, useLocation } from "react-router-dom";

export function RequiresAuth({ children }) {
  const location = useLocation();
  const token = localStorage.getItem("token");
  return token ? (
    children
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
}
