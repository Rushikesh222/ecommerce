import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/Auth";
import { toast } from "react-toastify";

export const Profile = () => {
  const { handleUserLogout, currentUser } = useAuth();
  const Navigate = useNavigate();
  const getStyle = ({ isActive }) => ({
    color: isActive ? "var(--primary-color)" : "black",
    borderBottom: isActive ? "1px solid var(--primary-color)" : "none",
  });
  return (
    <div>
      <h1>Account</h1>
      <div className="Profile-card">
        <div className="link">
          <NavLink style={getStyle} to="/profile">
            Profile
          </NavLink>
          <NavLink style={getStyle} to="/address-details">
            Address
          </NavLink>
        </div>
        <hr />
        <div>
          <strong>Name:</strong>
          <span>{`${currentUser?.firstName}${currentUser?.lastName}`}</span>
        </div>
        <div>
          <strong>Email:</strong>
          <span>{`${currentUser?.email}`}</span>
        </div>
        <button
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
