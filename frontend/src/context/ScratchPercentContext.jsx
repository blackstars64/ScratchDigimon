import { createContext, useMemo, useState } from "react";
import PropTypes from "prop-types";

const scratchedPercentContext = createContext();

function ScratchPercentProvider({ children }) {
  const [scrPercent, setScrPercent] = useState(0);

  const value = useMemo(
    () => ({ scrPercent, setScrPercent }),
    [scrPercent, setScrPercent]
  );

  return (
    <scratchedPercentContext.Provider value={value}>
      {children}
    </scratchedPercentContext.Provider>
  );
}

ScratchPercentProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { scratchedPercentContext, ScratchPercentProvider };
