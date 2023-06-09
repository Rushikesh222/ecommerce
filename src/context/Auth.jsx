import { createContext, useContext, useEffect, useState } from "react";
import { loginService, signupService } from "../services/AuthService";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const localStorageToken = JSON.parse(localStorage.getItem("loginDetails"));
  const [token, setToken] = useState(localStorageToken?.token);
  const [currentUser, setCurrentUser] = useState(localStorageToken?.user);

  const signupHandler = async () => {
    try {
      const response = await signupService();

      const {
        status,
        data: { createdUser, encodedToken },
      } = response;
      if (status === 200 || status === 201) {
        localStorage.setItem(
          "loginDetails",
          JSON.stringify({ user: createdUser, token: encodedToken })
        );
        setToken(encodedToken);
        setCurrentUser(createdUser);
      }
    } catch (error) {
      console.error(error);
      toast.error("there is error in signing you up");
    }
  };

  const loginHandler = async ({ email, password }) => {
    try {
      const response = await loginService(email, password);
      const {
        status,
        data: { foundUser, encodedToken },
      } = response;
      if (status === 200 || status === 201) {
        localStorage.setItem(
          "loginDetails",
          JSON.stringify({ user: foundUser, token: encodedToken })
        );
        setToken(encodedToken);
        setCurrentUser(foundUser);
        toast.success(`Welcome back, ${foundUser.firstName}!`, {
          icon: "👋",
        });
        navigate(location?.state?.from?.pathname || "/", { replace: true });
      }
    } catch (error) {
      console.error(error);
      toast.error("User does not exist! Please sign up.");
    }
  };

  useEffect(() => {
    signupHandler();
  }, []);

  return (
    <AuthContext.Provider
      value={{ signupHandler, token, currentUser, loginHandler }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
