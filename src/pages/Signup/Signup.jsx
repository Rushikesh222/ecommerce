import { useState } from "react";
import { useAuth } from "../../context/Auth";
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
    <div className="mx-auto my-6 flex w-[min(350px,calc(100%-2rem))] flex-col items-center justify-center border border-[#bfbfbf] px-5 py-8 shadow-[5px_5px_5px_#aaaaaa]">
      <h1 className="mb-4 text-2xl font-bold md:text-3xl">Sign Up</h1>
      <form className="w-full" onSubmit={createAccount}>
        <div className="flex flex-col text-[15px]">
          <label>First Name</label>
          <input
            className="field-input mt-1"
            placeholder="First Name"
            type="text"
            onChange={(e) =>
              setUserSignupDetails({
                ...userSignupDetails,
                firstName: e.target.value,
              })
            }
          />
          <label className="mt-3">Last Name</label>
          <input
            className="field-input mt-1"
            placeholder="Last Name"
            type="text"
            onChange={(e) =>
              setUserSignupDetails({
                ...userSignupDetails,
                lastName: e.target.value,
              })
            }
          />
          <label className="mt-3">Email</label>
          <input
            className="field-input mt-1"
            placeholder="Email"
            type="text"
            onChange={(e) =>
              setUserSignupDetails({
                ...userSignupDetails,
                email: e.target.value,
              })
            }
          />
          <label className="mt-3">Password</label>
          <input
            className="field-input mt-1"
            placeholder="Password"
            type="text"
            onChange={(e) =>
              setUserSignupDetails({
                ...userSignupDetails,
                password: e.target.value,
              })
            }
          />
        </div>

        <div className="mt-4 flex justify-center">
          <button className="btn-brand" type="submit">
            Create a Account
          </button>
        </div>
      </form>
      <NavLink
        className="mt-4 text-center text-lg font-semibold text-gray-500 hover:text-brand md:text-xl"
        to="/login"
      >
        Login to existing account <i className="fa-solid fa-angle-right"></i>
      </NavLink>
    </div>
  );
};
