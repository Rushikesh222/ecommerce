import { useContext, useState } from "react";
import { AuthContext } from "../../context/Auth";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loginHandler } = useContext(AuthContext);

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    loginHandler({ email, password });
    console.log(email, password);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="text" onChange={handleEmail} />
        </label>
        <br />
        <label>
          Password:
          <input type="text" onChange={handlePassword} />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
