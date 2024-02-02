import { createContext, useState, useEffect, useMemo } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const DigimonsContext = createContext();

function DigimonsProvider({ children }) {
  const [datasDigimon, setDatasDigimon] = useState(null);
  const [originalDatasDigimon, setOriginalDatasDigimon] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [digimon, setDigimon] = useState(null);

  useEffect(() => {
    const fetchDatas = () => {
      setIsLoading(true);

      axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/api/digimons`)
        .then((res) => {
          setDatasDigimon(res.data);
          setOriginalDatasDigimon(res.data);
          setIsLoading(false);
        })
        .catch((err) => console.error(err));
    };
    fetchDatas();
  }, []);

  const postCollectedDigimon = (userId, digimonId) => {
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/api/collected`, {
        userId,
        digimonId,
      })
      .catch((err) => console.error(err));
  };
  const [dataCollected, setDataCollected] = useState(null);
  const value = useMemo(
    () => ({
      datasDigimon,
      setDatasDigimon,
      originalDatasDigimon,
      setOriginalDatasDigimon,
      isLoading,
      setIsLoading,
      setDigimon,
      digimon,
      postCollectedDigimon,
      setDataCollected,
      dataCollected,
    }),
    [
      datasDigimon,
      originalDatasDigimon,
      isLoading,
      digimon,
      setDigimon,
      setIsLoading,
      setDatasDigimon,
      setOriginalDatasDigimon,
      postCollectedDigimon,
      setDataCollected,
      dataCollected,
    ]
  );

  return (
    <DigimonsContext.Provider value={value}>
      {children}
    </DigimonsContext.Provider>
  );
}

DigimonsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { DigimonsContext, DigimonsProvider };
