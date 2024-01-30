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
    <section className="connect">
      <h2 className="connect-h2">Sign up</h2>
      <form className="connect-form" onSubmit={handleSubmit}>
        <input
          className="connect-input"
          type="text"
          id="username"
          ref={refUsername}
          placeholder="Username"
          required
        />
        <input
          className="connect-input"
          type="email"
          id="email"
          ref={refEmail}
          placeholder="Email"
          required
        />
        <input
          className="connect-input"
          type="password"
          id="password"
          ref={refPassword}
          placeholder="Password"
          required
        />
        <button className="connect-btn" type="submit">
          Sign up
        </button>
      </form>
    </section>
  );
}

SignUp.propTypes = {
  handleSignIn: PropTypes.func.isRequired,
};

export default SignUp;
