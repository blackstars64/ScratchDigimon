import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import terriermon from "../assets/terriermon.gif";

function Game() {
  const { token } = useContext(AuthContext);
  if (!token) {
    const navigate = useNavigate();
    setTimeout(() => {
      navigate("/");
    }, 1000);
    return (
      <section className="app-start">
        <h1> DigiScratch </h1>
        <p className="redirecting">you're not logged in...</p>
        <div className="app-img-btn">
          <img className="app-terriermon" src={terriermon} alt="terriermon" />
        </div>
      </section>
    );
  }
  return <p>game</p>;
}

export default Game;
