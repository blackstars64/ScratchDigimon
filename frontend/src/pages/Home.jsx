import { Link } from "react-router-dom";
import agumonPlay from "../assets/agumon-play.png";

function Home() {
  return (
    <section className="home">
      <Link to="/game">
        <img className="home-img" src={agumonPlay} alt="play" />
      </Link>
    </section>
  );
}

export default Home;
