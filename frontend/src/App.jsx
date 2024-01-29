import { useState } from "react";
import Connect from "./components/Connect";
import SignUp from "./components/SignUp";
import "./scss/App.scss";
import terriermon from "./assets/terriermon.gif";

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleSignIn = () => {
    setIsSignedIn(!isSignedIn);
  };
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
