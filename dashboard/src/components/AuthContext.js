import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("authToken");
      if (!token) {
        setLoading(false);
        return;
      }
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/me`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(res.data);
      } catch (err) {
        localStorage.removeItem("authToken");
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);


  // frontend url
  const logout = () => {
    localStorage.removeItem("authToken");
    // window.location.href = "http://localhost:3000";
    window.location.href = process.env.REACT_APP_FRONTEND_URL;
  };

  return (
    <AuthContext.Provider value={{ user, loading, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);