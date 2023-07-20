import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/Auth";
import { toast } from "react-toastify";

export const Profile = () => {
  const { handleUserLogout, currentUser } = useAuth();
};
