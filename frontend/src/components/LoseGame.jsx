import PropTypes from "prop-types";

function LoseGame({ clickRestart, setGetDigiPoint }) {
  return (
    <div className="lose-game">
      <h1 className="lose-title">You Lose</h1>
      <button
        type="button"
        className="solution-btn"
        onClick={() => {
          window.location.reload();
          setGetDigiPoint(400);
          clickRestart();
        }}
      >
        Restart
      </button>
    </div>
  );
}

LoseGame.propTypes = {
  clickRestart: PropTypes.func.isRequired,
  setGetDigiPoint: PropTypes.func.isRequired,
};

export default LoseGame;
