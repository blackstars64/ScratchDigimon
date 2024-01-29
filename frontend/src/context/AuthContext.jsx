import { useState, useEffect, useMemo, createContext } from "react";
import axios from "axios";
import { useSessionStorage } from "usehooks-ts";
import { jwtDecode } from "jwt-decode";
import PropTypes from "prop-types";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useSessionStorage("token", null); // JWT
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async (username, email, password) => {
    try {
      setLoading(true);
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/login`,
        {
          headers: { "Content-Type": "application/json" },
          body: {
            username,
            email,
            password,
          },
        }
      );
      if (res.status === 200) {
        const data = await res.json();
        setToken(data.token);
        setLoading(false);
      }
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
  };

  const auth = async () => {
    if (!token) {
      return null;
    }

    const decodedToken = jwtDecode(token);

    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/users/${decodedToken.id}`,
        {
          headers: { "Content-Type": "application/json", Authorization: token },
        }
      );
      if (!res.ok) {
        throw new Error("Unauthorized");
      }
      const data = await res.json();
      setUser(data);
      return data;
    } catch (err) {
      setError(err);
      return null;
    }
  };

  useEffect(() => {
    auth();
  }, [token]);

  const value = useMemo(
    () => ({ user, token, loading, error, login, logout }),
    [user, token, loading, error]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AuthContext, AuthProvider };
