import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/Auth";

export const Login = () => {
  const [userLoginDetails, setUserLoginDetails] = useState({
    email: "",
    password: "",
  });
  const guestUserLoginDetails = {
    email: "adarshbalika@gmail.com",
    password: "adarshbalika",
  };
  const { loginHandler } = useAuth();

  const handleSubmit = (event) => {
    event.preventDefault();
    loginHandler(userLoginDetails);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="text"
            onChange={(e) =>
              setUserLoginDetails({
                ...userLoginDetails,
                email: e.target.value,
              })
            }
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="text"
            onChange={(e) =>
              setUserLoginDetails({
                ...userLoginDetails,
                password: e.target.value,
              })
            }
          />
        </label>
        <br />
        <button type="submit">Login</button>
        <button
          className="guest-button"
          onClick={(e) => {
            e.preventDefault();
            setUserLoginDetails(guestUserLoginDetails);
            loginHandler(guestUserLoginDetails);
          }}
        >
          Guest Login
        </button>
      </form>
      <a>
        Create your Account?
        <NavLink className="signup-link" to="/signup">
          <a className="Signup-link">Signup</a>
        </NavLink>
      </a>
    </div>
  );
};
