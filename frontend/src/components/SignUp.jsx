import PropTypes from "prop-types";
import { useContext, useRef } from "react";
import { AuthContext } from "../context/AuthContext";

function SignUp({ handleSignIn }) {
  const refUsername = useRef();
  const refEmail = useRef();
  const refPassword = useRef();

  const { register } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    register(
      refUsername.current.value,
      refEmail.current.value,
      refPassword.current.value
    );
    handleSignIn();
  };
  return (
    <section className="register">
      <h2>Sign up</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          ref={refUsername}
          placeholder="Enter your username"
          required
        />
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
        <button type="submit">Sign up</button>
      </form>

      <button type="button" onClick={handleSignIn}>
        Sign in
      </button>
    </section>
  );
}

SignUp.propTypes = {
  handleSignIn: PropTypes.func.isRequired,
};

export default SignUp;
