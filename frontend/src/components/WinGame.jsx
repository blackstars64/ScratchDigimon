import PropTypes from "prop-types";

function WinGame({ clickRestart, digimon, setGetDigiPoint }) {
  return (
    <div className="lose-game">
      <h1 className="win-title">You Win</h1>
      <div className="win-c-img">
        <img src={digimon.img} alt={digimon.name} className="win-img" />
        <p className="win-dname">{digimon.name}</p>
      </div>
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

WinGame.propTypes = {
  clickRestart: PropTypes.func.isRequired,
  digimon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired,
  setGetDigiPoint: PropTypes.func.isRequired,
};

export default WinGame;
