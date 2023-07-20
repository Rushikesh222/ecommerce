import { Outlet, useLocation, Navigate } from "react-router-dom";
import { useAuth } from "../../context/Auth";

export const RequireAuth = () => {
  const { token } = useAuth();
  const location = useLocation();
  return token ? (
    <Outlet />
  ) : (
    <Navigate to="./login" state={{ from: location }} replace />
  );
};
