import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import { AuthContext } from "../context/AuthContext";
import { scratchedPercentContext } from "../context/ScratchPercentContext";
import terriermon from "../assets/terriermon.gif";
import ScratchCard from "../services/ScratchCard";
import ReveltCard from "../assets/revelt-card.png";
import ReveltCardT from "../assets/revelt-card2.png";
import Rendomiser from "../services/Rendomiser";
import { DigimonsContext } from "../context/DigimonsContext";
import SubmitScratch from "../components/SubmitScratch";
import LoseGame from "../components/LoseGame";
import WinGame from "../components/WinGame";
import "../scss/Game.scss";

function Game() {
  const [gameState, setGameState] = useState("game");
  const [getDigiPoint, setGetDigiPoint] = useState(400);
  const { token, user } = useContext(AuthContext);
  const { scrPercent } = useContext(scratchedPercentContext);
  const { datasDigimon, setDigimon, digimon } = useContext(DigimonsContext);
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

  useEffect(() => {
    if (scrPercent >= 9) {
      setGetDigiPoint(Math.max(getDigiPoint - 60, 0));
    }
  }, [scrPercent, setGetDigiPoint]);

  if (!datasDigimon) return <p>loading...</p>;

  const clickRestart = () => {
    setGameState("game");

    setDigimon(Rendomiser(datasDigimon).slice(0, 1)[0]);
  };

  if (!digimon) {
    setDigimon(Rendomiser(datasDigimon).slice(0, 1)[0]);
  }

  if (gameState === "game") {
    return (
      <section className="game">
        {touchMedia ? (
          <ScratchCard
            width={250}
            height={300}
            image={ReveltCardT}
            brushSize={7}
          />
        ) : (
          <ScratchCard
            width={350}
            height={450}
            image={ReveltCard}
            brushSize={9}
          />
        )}
        <div className="game-stats">
          <p className="game-p">Win {getDigiPoint} DP </p>
          <p className="game-p">{scrPercent} %</p>
        </div>
        <SubmitScratch
          digimon={digimon}
          setGameState={setGameState}
          getDigiPoint={getDigiPoint}
          user={user}
        />
      </section>
    );
  }

  if (gameState === "win") {
    return (
      <section className="win">
        <WinGame
          clickRestart={clickRestart}
          digimon={digimon}
          setGetDigiPoint={setGetDigiPoint}
        />
      </section>
    );
  }

  if (gameState === "lose") {
    return (
      <section className="lose">
        <LoseGame
          clickRestart={clickRestart}
          setGetDigiPoint={setGetDigiPoint}
        />
      </section>
    );
  }
}

export default Game;
