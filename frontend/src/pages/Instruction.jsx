import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import terriermon from "../assets/terriermon.gif";
import "../scss/Instruction.scss";

function Instruction() {
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
  return (
    <section className="container-instruction">
      <h2 className="title-instruction">Instructions</h2>
      <p className="game-instruction">
        Le but du jeu est de trouver ton digimon le plus vite possible.
      </p>
      <p className="game-instruction">
        En grattant la carte vous dévoilez le digimon. Mais plus vous dévoilez
        le digimon, moins vous gagnerez de Tokens.
      </p>
      <p className="game-instruction">
        Quand vous avez deviné le digimon, écrivez-le et appuyez sur le bouton
        valider. Si c'est le bon digimon, vous gagnerez la carte du digimon,
        mais aussi les Tokens correspondant.
      </p>
      <p className="game-instruction">
        Vous pourrez aussi acheter les cartes des digimon dans votre collection
        grâce aux Tokens.
      </p>
      <p className="last">
        Bonne partie et trouvez le digimon que vous appréciez le plus.
      </p>
    </section>
  );
}

export default Instruction;
