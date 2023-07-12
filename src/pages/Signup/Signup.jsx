import { useState } from "react";
import { useAuth } from "../../context/Auth";

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
    signupHandler({ userSignupDetails });
  };
  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={createAccount}>
        <label>
          First Name
          <input
            type="text"
            onChange={(e) =>
              setUserSignupDetails({
                ...userSignupDetails,
                firstName: e.target.value,
              })
            }
          />
        </label>
        <label>
          Last Name
          <input
            type="text"
            onChange={(e) =>
              setUserSignupDetails({
                ...userSignupDetails,
                lastName: e.target.value,
              })
            }
          />
        </label>
        <label>
          Email
          <input
            type="text"
            onChange={(e) =>
              setUserSignupDetails({
                ...userSignupDetails,
                email: e.target.value,
              })
            }
          />
        </label>
        <label>
          Password
          <input
            type="text"
            onChange={(e) =>
              setUserSignupDetails({
                ...userSignupDetails,
                password: e.target.value,
              })
            }
          />
        </label>
        <button type="submit">Create a Account</button>
      </form>
    </div>
  );
};
