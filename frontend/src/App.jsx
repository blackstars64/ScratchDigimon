import { useState } from "react";
import Connect from "./components/Connect";
import "./scss/App.scss";
import SignUp from "./components/SignUp";

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleSignIn = () => {
    setIsSignedIn(!isSignedIn);
  };
  return (
    <>
      <h1> ScratchDimimon </h1>
      {!isSignedIn && <Connect />}
      {isSignedIn && <SignUp handleSignIn={handleSignIn} />}
      {!isSignedIn && (
        <button type="button" onClick={handleSignIn}>
          Sign up
        </button>
      )}
    </>
  );
}

export default App;
