import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/Auth";
import { toast } from "react-toastify";

export const Profile = () => {
  const { handleUserLogout, currentUser } = useAuth();
  const Navigate = useNavigate();
  const getStyle = ({ isActive }) => ({
    color: isActive ? "rgb(1, 1, 83)" : "black",
    borderBottom: isActive ? "1px solid rgb(1, 1, 83)" : "none",
  });
  return (
    <div className="mx-auto my-6 flex w-[min(420px,calc(100%-2rem))] flex-col items-center rounded-[25px] border border-[#bfbfbf] px-4 py-8 capitalize shadow-[5px_5px_5px_#aaaaaa]">
      <div className="flex w-full flex-col items-center justify-center">
        <h1 className="mb-4 text-2xl font-bold md:text-3xl">Account</h1>
        <div className="mb-2 flex flex-row justify-center gap-6 text-lg font-semibold sm:gap-8 sm:text-xl">
          <NavLink style={getStyle} to="/profile">
            Profile
          </NavLink>
          <NavLink style={getStyle} to="/address-details">
            Address
          </NavLink>
        </div>
        <hr className="my-4 w-full" />
        <div className="my-2 flex w-full flex-col items-center justify-center gap-1 break-all px-2 sm:flex-row sm:gap-2">
          <strong>Name:</strong>
          <span>{`${currentUser?.firstName}${currentUser?.lastName}`}</span>
        </div>
        <div className="my-2 flex w-full flex-col items-center justify-center gap-1 break-all px-2 text-center sm:flex-row sm:gap-2">
          <strong>Email:</strong>
          <span>{`${currentUser?.email}`}</span>
        </div>
        <button
          className="btn-brand mt-6"
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
