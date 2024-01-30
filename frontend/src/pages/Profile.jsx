import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import mafumafu from "../assets/mafumafu-mini.png";
import terriermon from "../assets/terriermon.gif";
import adminPanel from "../assets/admin.png";
import "../scss/Connect.scss";
import "../scss/Profile.scss";

function Profile() {
  const { user, token } = useContext(AuthContext);
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
            {user.is_admin === 1 && <img src={adminPanel} alt="Admin Panel" />}
            <button className="profile-footer-btn" type="button">
              Edit profile
            </button>
          </div>
        </>
      )}
    </section>
  );
}

export default Profile;
