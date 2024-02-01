import PropTypes from "prop-types";
import digiPoint from "../assets/digiPoint.png";
import "../scss/NoFoundCard.scss";

function NoFoundCard({ digimon }) {
  return (
    <section className="nfound">
      <p className="nfound-id">{digimon.id}</p>
      <p className="nfound-name">{digimon.name}</p>
      <img className="nfound-buy" src={digiPoint} alt="digiPoint" />
    </section>
  );
}

NoFoundCard.propTypes = {
  digimon: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default NoFoundCard;
