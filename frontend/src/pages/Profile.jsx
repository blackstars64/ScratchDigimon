import { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import mafumafu from "../assets/mafumafu-mini.png";
import terriermon from "../assets/terriermon.gif";
import adminPanel from "../assets/admin.png";
import "../scss/Connect.scss";
import "../scss/Profile.scss";

function Profile() {
  const { user, token } = useContext(AuthContext);
  const [isEdited, setIsEdited] = useState(false);

  const usernameRef = useRef();
  const emailRef = useRef();

  if (!user) {
    return <p className="Loading">Loading in progress...</p>;
  }

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
  const handleClick = () => {
    setIsEdited(!isEdited);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`${import.meta.env.VITE_BACKEND_URL}/api/users/${user.id}`, {
        username: usernameRef.current.value,
        email: emailRef.current.value,
      })
      .then(() => {
        setIsEdited(false);
        window.location.reload();
      })
      .catch((err) => console.error(err));
  };

  return (
    <section className="connect">
      <h2 className="connect-h2">Profile</h2>
      {user && (
        <>
          <div className="profile-header">
            <p className="profile-username">{user.username}</p>
            <img className="profile-img" src={mafumafu} alt="Mafumafu" />
          </div>
          <hr className="profile-hr" />
          <p className="profile-email">{user.email}</p>
          <br />
          <div className="profile-footer">
            {user.is_admin === 1 && (
              <Link to="/adminPanel">
                <img src={adminPanel} alt="Admin Panel" />
              </Link>
            )}

            <button
              className="profile-footer-btn"
              type="button"
              onClick={handleClick}
            >
              {!isEdited ? "Edit profile" : "Cancel"}
            </button>
          </div>
          {isEdited && (
            <form className="profile-form" onSubmit={handleSubmit}>
              <input
                type="text"
                defaultValue={user.username}
                className="profile-input"
                ref={usernameRef}
              />
              <input
                type="email"
                defaultValue={user.email}
                className="profile-input"
                ref={emailRef}
              />

              <button className="profile-f-btn" type="submit">
                Submit
              </button>
            </form>
          )}
        </>
      )}
    </section>
  );
}

export default Profile;
