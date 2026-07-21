import React, { useEffect, useState } from 'react';
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute.js"; 
// import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext";

const Dashboard = () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    console.log("Current URL:", window.location.href);
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    console.log("Extracted token:", token);

    if (token) {
      localStorage.setItem("authToken", token);
      console.log("Token saved to localStorage");
      window.history.replaceState({}, document.title, "/");
    } else {
      console.log("No token found in URL");
    }
    setReady(true);
  }, []);

  if (!ready) return null;

  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>
      <div className="content">
        <Routes>
          <Route exact path="/" element={<ProtectedRoute><Summary /></ProtectedRoute>} />
          <Route path="/orders" element={<ProtectedRoute><Orders /></ProtectedRoute>} />
          <Route path="/holdings" element={<ProtectedRoute><Holdings /></ProtectedRoute>} />
          <Route path="/positions" element={<ProtectedRoute><Positions /></ProtectedRoute>} />
          <Route path="/funds" element={<ProtectedRoute><Funds /></ProtectedRoute>} />
          {/* <Route path="/apps" element={<ProtectedRoute><Apps /></ProtectedRoute>} /> */}
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;