import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import patamon from "../assets/patamon.png";
import digivice from "../assets/digivice.png";
import "../scss/Menu.scss";
import { AuthContext } from "../context/AuthContext";

function Menu() {
  const [isClicked, setIsClicked] = useState(false);
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const toggleNav = () => {
    setIsClicked(!isClicked);
  };

  return (
    <nav className={isClicked ? "nav" : "navbordernone"}>
      {isClicked ? (
        <button
          type="button"
          className="menu_patamon"
          onClick={() => toggleNav()}
        >
          <img src={patamon} alt="menu burger" />
        </button>
      ) : (
        <button
          type="button"
          className="menu_digivice"
          onClick={() => toggleNav()}
        >
          <img src={digivice} alt="close menu burger" />
        </button>
      )}

      {isClicked && (
        <ul>
          <li>
            <Link
              to="/home"
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
              to="/game"
              onClick={() => {
                toggleNav();
              }}
              className="navbar-li"
            >
              Game
            </Link>
          </li>
          <li>
            <Link
              to="/collection"
              onClick={() => {
                toggleNav();
              }}
              className="navbar-li"
            >
              Collections
            </Link>
          </li>
          <li>
            <Link
              to="/profile"
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
              to="/instruction"
              onClick={() => {
                toggleNav();
              }}
              className="navbar-li"
            >
              Instructions
            </Link>
          </li>
          <li>
            <button
              type="button"
              onClick={() => {
                toggleNav();
                logout();
                navigate("/");
              }}
              className="navbar-li navbar-li-logout"
            >
              Logout
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
}
export default Menu;
