import { createContext, useState, useEffect, useMemo, useContext } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { AuthContext } from "./AuthContext";

const DigimonsContext = createContext();

function DigimonsProvider({ children }) {
  const [datasDigimon, setDatasDigimon] = useState(null);
  const [originalDatasDigimon, setOriginalDatasDigimon] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [dataCollected, setDataCollected] = useState(null);

  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchDatasDigimon = () => {
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

    const fetchCollectedDigimon = () => {
      axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/api/collected/${user.id}`)
        .then((res) => {
          setDataCollected(res.data);
        })
        .catch((err) => console.error(err));
    };

    fetchDatasDigimon();
    fetchCollectedDigimon();
  }, []);

  const postCollectedDigimon = (userId, digimonId) => {
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/api/collected`, {
        userId,
        digimonId,
      })
      .catch((err) => console.error(err));
  };

  const value = useMemo(
    () => ({
      datasDigimon,
      setDatasDigimon,
      originalDatasDigimon,
      setOriginalDatasDigimon,
      isLoading,
      setIsLoading,
      dataCollected,
      postCollectedDigimon,
    }),
    [
      datasDigimon,
      originalDatasDigimon,
      isLoading,
      dataCollected,
      postCollectedDigimon,
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
