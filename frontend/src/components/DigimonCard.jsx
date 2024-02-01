import "../scss/DigimonCard.scss";
import PropTypes from "prop-types";

function DigimonCard({ digimon }) {
  return (
    <section className="dcard">
      <div className="dcard-head">
        <p className="dcard-id">{digimon.id}</p>
        <img className="dcard-img" src={digimon.img} alt={digimon.name} />
        <p className="dcard-level">{digimon.level}</p>
      </div>
      <div className="dcard-f-name">
        <p className="dcard-name">{digimon.name}</p>
      </div>
    </section>
  );
}

DigimonCard.propTypes = {
  digimon: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired,
  }).isRequired,
};

export default DigimonCard;
