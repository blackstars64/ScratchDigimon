import { createContext, useState, useEffect, useMemo } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const DigimonsContext = createContext();

function DigimonsProvider({ children }) {
  const [datasDigimon, setDatasDigimon] = useState(null);
  const [originalDatasDigimon, setOriginalDatasDigimon] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

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

  const value = useMemo(
    () => ({
      datasDigimon,
      setDatasDigimon,
      originalDatasDigimon,
      setOriginalDatasDigimon,
      isLoading,
      setIsLoading,
    }),
    [datasDigimon, originalDatasDigimon, isLoading]
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
