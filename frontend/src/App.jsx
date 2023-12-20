import Footer from "./components/Footer";
import Menu from "./components/Menu";
import PlayButtom from "./components/PlayButtom";

import "./scss/App.scss";

function App() {
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
        <PlayButtom />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
