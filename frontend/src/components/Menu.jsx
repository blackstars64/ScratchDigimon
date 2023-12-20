/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
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
  return (
    <nav className={isClicked ? "nav" : "navbordernone"}>
      {isClicked ? (
        <img
          src={patamon}
          alt="menu burger"
          className="menu_patamon"
          onClick={() => toggleNav()}
        />
      ) : (
        <img
          src={digivice}
          alt="close menu burger"
          className="menu_digivice"
          onClick={() => toggleNav()}
        />
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
