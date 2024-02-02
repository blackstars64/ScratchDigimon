import { useState, useEffect, useMemo, createContext } from "react";
import axios from "axios";
import { useSessionStorage } from "usehooks-ts";
import { jwtDecode } from "jwt-decode";
import PropTypes from "prop-types";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useSessionStorage("token", "");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [digiPoint, setDigiPoint] = useState(0);
  const [usernames, setUsername] = useState("");

  const login = async (email, password) => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/login`,
        {
          email,
          password,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      if (res.status === 200) {
        const data = await res.data;
        setToken(data.token);
      } else {
        throw new Error("Unauthorized");
      }
    } catch (err) {
      setError(err);
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
    if (decodedToken.exp * 1000 < Date.now()) {
      setToken(null);
      return null;
    }
    if (token) {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/users/${decodedToken.id}`
        );

        if (res.status !== 200) {
          throw new Error("Unauthorized");
        }

        const [data] = await res.data;
        return setUser(data);
      } catch (err) {
        setError(err);
        return null;
      }
    }

    return null;
  };

  const register = async (username, email, password) => {
    try {
      setLoading(true);
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/users`,
        {
          username,
          email,
          password,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (res.status === 200) {
        setLoading(false);
      }
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    auth();
  }, [token]);

  const editdigiP = async (digipoint) => {
    try {
      const res = await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/api/users/${user.id}`,
        {
          digiPoint: digipoint,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      if (res.status === 200) {
        const data = await res.data.user;
        setUser(data);
      } else {
        throw new Error("Unauthorized");
      }
    } catch (err) {
      setError(err);
    }
  };

  const value = useMemo(
    () => ({
      user,
      token,
      loading,
      error,
      login,
      logout,
      register,
      editdigiP,
      setDigiPoint,
      digiPoint,
      setUsername,
      usernames,
    }),
    [
      user,
      token,
      loading,
      error,
      login,
      logout,
      register,
      editdigiP,
      setDigiPoint,
      digiPoint,
      setUsername,
      usernames,
    ]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AuthContext, AuthProvider };
