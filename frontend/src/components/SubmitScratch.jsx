import { useContext, useRef } from "react";
import PropTypes from "prop-types";
import { DigimonsContext } from "../context/DigimonsContext";
import { AuthContext } from "../context/AuthContext";

function SubmitScratch({ digimon, setGameState, getDigiPoint }) {
  const { postCollectedDigimon } = useContext(DigimonsContext);
  const { user, editdigiP, setDigiPoint, setUsername } =
    useContext(AuthContext);
  const solutionRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, id } = digimon;
    const { value } = solutionRef.current;

    if (value === name) {
      postCollectedDigimon(user.id, id);
      editdigiP(user.digi_point + getDigiPoint);
      setDigiPoint(user.digi_point + getDigiPoint);
      setUsername(user.username);
      setGameState("win");
    } else {
      setGameState("lose");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Who is this digimon ?"
        type="text"
        className="solution-input"
        ref={solutionRef}
      />
      <button className="solution-btn" type="submit">
        Valider
      </button>
    </form>
  );
}

SubmitScratch.propTypes = {
  digimon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  setGameState: PropTypes.func.isRequired,
  getDigiPoint: PropTypes.number.isRequired,
};

export default SubmitScratch;
