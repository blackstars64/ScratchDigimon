import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { useMediaQuery } from "usehooks-ts";
import { AuthContext } from "../context/AuthContext";
import { scratchedPercentContext } from "../context/ScratchPercentContext";
import terriermon from "../assets/terriermon.gif";
import ScratchCard from "../services/ScratchCard";
import ReveltCard from "../assets/revelt-card.png";
import ReveltCardT from "../assets/revelt-card2.png";

function Game() {
  const { token } = useContext(AuthContext);
  const { scrPercent } = useContext(scratchedPercentContext);
  const touchMedia = useMediaQuery("(max-width: 840px)");
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
  return (
    <section>
      {touchMedia ? (
        <ScratchCard
          width={250}
          height={300}
          image={ReveltCardT}
          brushSize={5}
        />
      ) : (
        <ScratchCard
          width={350}
          height={450}
          image={ReveltCard}
          brushSize={5}
        />
      )}
      <div>
        <p>DP: </p>
        <p>Percent: {scrPercent}</p>
      </div>
    </section>
  );
}

export default Game;
