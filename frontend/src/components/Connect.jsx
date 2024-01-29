import { useContext, useRef } from "react";
import { AuthContext } from "../context/AuthContext";

function Connect() {
  const { login } = useContext(AuthContext);
  const refEmail = useRef();
  const refPassword = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(refEmail.current.value, refPassword.current.value);
  };

  return (
    <section className="app-login">
      <h2>Connect</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          ref={refEmail}
          placeholder="Enter your email"
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          ref={refPassword}
          placeholder="Enter your password"
          required
        />
        <button type="submit">Connect</button>
      </form>
    </section>
  );
}

export default Connect;
