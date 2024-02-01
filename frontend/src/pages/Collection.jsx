import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import terriermon from "../assets/terriermon.gif";
import { DigimonsContext } from "../context/DigimonsContext";
import DigimonCard from "../components/DigimonCard";
import NoFoundCard from "../components/NoFoundCard";
import "../scss/Collection.scss";

function Collection() {
  const { token, user, editdigiP } = useContext(AuthContext);
  if (!user) {
    return <p className="Loading">Loading in progress...</p>;
  }
  if (!token) {
    const nav = useNavigate();
    setTimeout(() => {
      nav("/");
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
  const {
    setDatasDigimon,
    datasDigimon,
    originalDatasDigimon,
    postCollectedDigimon,
  } = useContext(DigimonsContext);

  const [dataCollected, setDataCollected] = useState(null);
  const [isCollectLoading, setIsCollectLoading] = useState(false);
  const [inputSearch, setInputSearch] = useState("");

  if (!user) {
    return <p className="Loading">Loading in progress...</p>;
  }

  useEffect(() => {
    const fetchCollectedDigimon = () => {
      setIsCollectLoading(true);

      axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/api/collected/${user.id}`)
        .then((res) => {
          setDataCollected(res.data);
          setIsCollectLoading(false);
        })
        .catch((err) => console.error(err));
    };
    fetchCollectedDigimon();
  }, []);

  if (!dataCollected || !datasDigimon || isCollectLoading) {
    return <p className="Loading">Loading in progress...</p>;
  }

  const isCollected = (digimonId) => {
    return dataCollected.some((data) => data.id === digimonId);
  };

  const numberCollectedDigimon = dataCollected.length;
  const numberTotalDigimon = originalDatasDigimon.length;

  const handleChange = (e) => {
    const inputValue = e.target.value
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

    setInputSearch(inputValue);

    const filteredDigimons = originalDatasDigimon.filter((data) => {
      return (
        String(data.name)
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .includes(inputValue) ||
        String(data.level)
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .includes(inputValue)
      );
    });

    setDatasDigimon(
      inputValue === "" ? originalDatasDigimon : filteredDigimons
    );
  };

  return (
    <section className="collect">
      <div className="collect-head">
        <input
          className="collect-search"
          type="text"
          value={inputSearch}
          placeholder="Rechercher un Digimon"
          onChange={handleChange}
        />
        <p className="collect-nub">
          You have
          <span className="collect-nub-c">
            &nbsp;
            {numberCollectedDigimon}/{numberTotalDigimon}&nbsp;
          </span>
          digimons.
        </p>
      </div>
      <section className="collect-card">
        {datasDigimon &&
          datasDigimon.map((digimon) => {
            return isCollected(digimon.id) ? (
              <DigimonCard key={digimon.id} digimon={digimon} />
            ) : (
              <NoFoundCard
                digimon={digimon}
                user={user}
                postCollectedDigimon={postCollectedDigimon}
                editdigiP={editdigiP}
              />
            );
          })}
      </section>
    </section>
  );
}

export default Collection;
