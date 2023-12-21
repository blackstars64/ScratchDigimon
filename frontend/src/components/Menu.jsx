import { useState } from "react";
import { Link } from "react-router-dom";
import patamon from "../assets/patamon.png";
import digivice from "../assets/digivice.png";
import "../scss/Menu.scss";

function Menu() {
  const [isClicked, setIsClicked] = useState(false);
  const toggleNav = () => {
    setIsClicked(!isClicked);
  };
  const handleKeyDown = (event) => {
    if (event.key === "t" / "T") {
      setIsClicked(!isClicked);
    }
  };
  return (
    <nav className={isClicked ? "nav" : "navbordernone"}>
      {isClicked ? (
        <button
          type="button"
          className="menu_patamon"
          onClick={() => toggleNav()}
          onKeyDown={handleKeyDown}
        >
          <img src={patamon} alt="menu burger" />
        </button>
      ) : (
        <button
          type="button"
          className="menu_digivice"
          onClick={() => toggleNav()}
          onKeyDown={handleKeyDown}
        >
          <img src={digivice} alt="close menu burger" />
        </button>
      )}

      {isClicked && (
        <ul>
          <li>
            <Link
              to="/"
              onClick={() => {
                toggleNav();
              }}
              className="navbar-li"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/page/game"
              onClick={() => {
                toggleNav();
              }}
              className="navbar-li"
            >
              Jeux
            </Link>
          </li>
          <li>
            <Link
              to="/page/collection"
              onClick={() => {
                toggleNav();
              }}
              className="navbar-li"
            >
              Collection
            </Link>
          </li>
          <li>
            <Link
              to="/page/profile"
              onClick={() => {
                toggleNav();
              }}
              className="navbar-li"
            >
              Profile
            </Link>
          </li>
          <li>
            <Link
              to="/page/instruction"
              onClick={() => {
                toggleNav();
              }}
              className="navbar-li"
            >
              Instruction
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
export default Menu;
