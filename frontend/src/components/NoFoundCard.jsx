import { useState } from "react";
import PropTypes from "prop-types";
import digiPoint from "../assets/digiPoint.png";
import "../scss/NoFoundCard.scss";

function NoFoundCard({ digimon, postCollectedDigimon, user, editdigiP }) {
  const [insufficientDp, setInsufficientDp] = useState(false);

  const handleclick = (digimonId, digimonLevel) => () => {
    let price = null;
    if (digimonLevel === "Fresh") {
      price = 800;
    }
    if (digimonLevel === "In Training") {
      price = 1200;
    }
    if (digimonLevel === "Rookie") {
      price = 2000;
    }
    if (digimonLevel === "Champion") {
      price = 3000;
    }
    if (digimonLevel === "Ultimate") {
      price = 4000;
    }
    if (digimonLevel === "Mega") {
      price = 5000;
    }
    if (user.digi_point >= price) {
      postCollectedDigimon(user.id, digimonId);
      editdigiP(user.digi_point - price);
    } else {
      setInsufficientDp(true);
      setTimeout(() => {
        setInsufficientDp(false);
      }, 1000);
    }
  };
  return (
    <section className="nfound">
      <p className="nfound-id">{digimon.id}</p>
      <p className="nfound-name">{digimon.name}</p>
      <button
        type="button"
        onClick={handleclick(digimon.id, digimon.level)}
        className="nfound-buy"
        src={digiPoint}
        alt="digiPoint"
      />
      {insufficientDp && <p className="no-monay">Insufficient DigiPoint</p>}
    </section>
  );
}

NoFoundCard.propTypes = {
  digimon: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired,
  }).isRequired,
  postCollectedDigimon: PropTypes.func.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    digi_point: PropTypes.number.isRequired,
  }).isRequired,
  editdigiP: PropTypes.func.isRequired,
};

export default NoFoundCard;
