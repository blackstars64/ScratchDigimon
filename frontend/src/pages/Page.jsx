import { Outlet } from "react-router-dom";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import "../scss/App.scss";

function Page() {
  return (
    <>
      <header>
        <section className="top-header">
          <p>Dp:</p>
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
