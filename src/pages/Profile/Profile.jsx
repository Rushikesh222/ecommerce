import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/Auth";
import { toast } from "react-toastify";
import "./Profile.css";

export const Profile = () => {
  const { handleUserLogout, currentUser } = useAuth();
  const Navigate = useNavigate();
  const getStyle = ({ isActive }) => ({
    color: isActive ? "rgb(1, 1, 83)" : "black",
    borderBottom: isActive ? "1px solid rgb(1, 1, 83)" : "none",
  });
  return (
    <div className="profile-block">
      <div className="profile-card">
        <h1>Account</h1>
        <div className="link-profile">
          <NavLink style={getStyle} to="/profile">
            Profile
          </NavLink>
          <NavLink style={getStyle} to="/address-details">
            Address
          </NavLink>
        </div>
        <hr />
        <div className="profile-name">
          <strong>Name:</strong>
          <span>{`${currentUser?.firstName}${currentUser?.lastName}`}</span>
        </div>
        <div className="profile-email">
          <strong>Email:</strong>
          <span>{`${currentUser?.email}`}</span>
        </div>
        <button
          className="logout"
          onClick={() => {
            handleUserLogout();
            Navigate("/");
            toast.warning("Logged Out!");
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};
