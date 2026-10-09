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
    <div className="mx-auto my-6 flex w-[min(350px,calc(100%-2rem))] flex-col items-center justify-center border border-[#bfbfbf] px-5 py-8 shadow-[5px_5px_5px_#aaaaaa]">
      <h2 className="mb-2 text-2xl font-semibold">Login</h2>

      <form className="w-full" onSubmit={handleSubmit}>
        <div className="flex w-full flex-col items-start">
          <label>Email:</label>
          <input
            className="field-input mt-1"
            type="text"
            placeholder="example@gmail.com"
            onChange={(e) =>
              setUserLoginDetails({
                ...userLoginDetails,
                email: e.target.value,
              })
            }
          />

          <label className="mt-4">Password:</label>
          <input
            className="field-input mt-1"
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

        <div className="mt-4 flex flex-col items-center gap-2">
          <button className="btn-brand" type="submit">
            Login
          </button>
          <button
            className="btn-brand"
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

      <p className="mt-4 text-center text-lg font-semibold">
        Create your Account?{" "}
        <NavLink className="text-gray-500 hover:text-brand" to="/signup">
          Signup
        </NavLink>
      </p>
    </div>
  );
};
