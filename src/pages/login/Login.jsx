import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/Auth";
import "./login.css";

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
    <div className="login-page">
      <h2>Login</h2>

      <form className="" onSubmit={handleSubmit}>
        <div className="login-from">
          <label>Email:</label>
          <input
            type="text"
            placeholder="example@gmail.com"
            onChange={(e) =>
              setUserLoginDetails({
                ...userLoginDetails,
                email: e.target.value,
              })
            }
          />

          <br />
          <label>Password:</label>
          <input
            type="password"
            placeholder="**********"
            onChange={(e) =>
              setUserLoginDetails({
                ...userLoginDetails,
                password: e.target.value,
              })
            }
          />
        </div>

        <br />
        <div className="login-form-button">
          <button className="login-button" type="submit">
            Login
          </button>
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
        </div>
      </form>

      <a className="signup-text">
        Create your Account?
        <NavLink className="signup-link" to="/signup">
          <a className="Signup-link">Signup</a>
        </NavLink>
      </a>
    </div>
  );
};
