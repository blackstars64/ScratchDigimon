import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "../scss/Connect.scss";

function Connect() {
  const { login } = useContext(AuthContext);
  const refEmail = useRef();
  const refPassword = useRef();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(refEmail.current.value, refPassword.current.value);
    navigate("/home");
  };

  return (
    <section className="connect">
      <h2 className="connect-h2">Sign in</h2>
      <form className="connect-form" onSubmit={handleSubmit}>
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
          Connect
        </button>
      </form>
    </section>
  );
}

export default Connect;
