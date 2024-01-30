import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import Connect from "./components/Connect";
import SignUp from "./components/SignUp";
import "./scss/App.scss";
import terriermon from "./assets/terriermon.gif";
import { AuthContext } from "./context/AuthContext";

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleSignIn = () => {
    setIsSignedIn(!isSignedIn);
  };
  const { token } = useContext(AuthContext);
  if (token) {
    const navigate = useNavigate();
    setTimeout(() => {
      navigate("/home");
    }, 1000);
    return (
      <section className="app-start">
        <h1> DigiScratch </h1>
        <p className="redirecting">Redirecting...</p>
        <div className="app-img-btn">
          <img className="app-terriermon" src={terriermon} alt="terriermon" />
        </div>
      </section>
    );
  }
  return (
    <section className="app-start">
      <h1> DigiScratch </h1>
      {!isSignedIn && <Connect />}
      {isSignedIn && <SignUp handleSignIn={handleSignIn} />}
      <div className="app-img-btn">
        <img className="app-terriermon" src={terriermon} alt="terriermon" />
        {!isSignedIn && (
          <button className="app-btn" type="button" onClick={handleSignIn}>
            Sign up
          </button>
        )}
        {isSignedIn && (
          <button className="app-btn" type="button" onClick={handleSignIn}>
            Sign in
          </button>
        )}
      </div>
    </section>
  );
}

export default App;
