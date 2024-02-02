import { useContext } from "react";
import { Outlet } from "react-router-dom";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import "../scss/App.scss";
import { AuthContext } from "../context/AuthContext";
import mafumafu from "../assets/mafumafu-mini.png";

function Page() {
  const { user } = useContext(AuthContext);
  if (!user) {
    return <p className="Loading">Loading in progress...</p>;
  }
  return (
    <>
      <header>
        <section className="top-header">
          {user && (
            <>
              <div className="header-profile">
                <img className="header-img" src={mafumafu} alt="mafumafu" />
                {user && user.username && (
                  <p className="header-username">{user?.username}</p>
                )}
              </div>
              {user && user.digi_point && (
                <p className="header-dp">DP: {user?.digi_point}</p>
              )}
            </>
          )}
          <Menu />
        </section>
        <h1>DigiScratch</h1>
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Page;
