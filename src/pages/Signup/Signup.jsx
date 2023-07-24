import { useState } from "react";
import { useAuth } from "../../context/Auth";
import "./signup.css";
import { NavLink } from "react-router-dom";
export const Signup = () => {
  const { signupHandler } = useAuth();
  const [userSignupDetails, setUserSignupDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const createAccount = (e) => {
    e.preventDefault();
    signupHandler(userSignupDetails);
  };
  return (
    <div className="signup-from">
      <h1>Sign Up</h1>
      <form onSubmit={createAccount}>
        <div className="signup-details">
          <label>First Name</label>
          <input
            placeholder="First Name"
            type="text"
            onChange={(e) =>
              setUserSignupDetails({
                ...userSignupDetails,
                firstName: e.target.value,
              })
            }
          />
          <br />
          <label>Last Name</label>
          <input
            placeholder="Last Name"
            type="text"
            onChange={(e) =>
              setUserSignupDetails({
                ...userSignupDetails,
                lastName: e.target.value,
              })
            }
          />
          <br />
          <label>Email</label>
          <input
            placeholder="Email"
            type="text"
            onChange={(e) =>
              setUserSignupDetails({
                ...userSignupDetails,
                email: e.target.value,
              })
            }
          />
          <br />
          <label>Password</label>
          <input
            placeholder="Password"
            type="text"
            onChange={(e) =>
              setUserSignupDetails({
                ...userSignupDetails,
                password: e.target.value,
              })
            }
          />
          <br />
        </div>

        <button className="create-account" type="submit">
          Create a Account
        </button>
      </form>
      <NavLink className="login-link" to="/login">
        <a className="login-link">
          Login to existing account <i class="fa-solid fa-angle-right"></i>
        </a>
      </NavLink>
    </div>
  );
};
