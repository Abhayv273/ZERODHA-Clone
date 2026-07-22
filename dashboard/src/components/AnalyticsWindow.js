import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import stockNameMap from "../data/stockNameMap";

const AnalyticsWindow = ({ uid, onClose }) => {
  const [chartData, setChartData] = useState([]);
  const [stockInfo, setStockInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchChartData = async () => {
      setLoading(true);
      setError(null);
      setChartData([]);
      setStockInfo(null);

      try {
        const companyName = stockNameMap[uid] || uid;
              //  api website url 
        const res = await axios.get(
          "https://indian-stock-exchange-api2.p.rapidapi.com/stock",
          {
            params: { name: companyName },
            headers: {
              "x-rapidapi-key": process.env.REACT_APP_RAPIDAPI_KEY,
              "x-rapidapi-host": "indian-stock-exchange-api2.p.rapidapi.com",
            },
          }
        );

        const data = res.data;

        if (!data || !data.stockTechnicalData) {
          setError("No chart data available for this stock.");
        } else {
          const formatted = data.stockTechnicalData
            .map((point) => ({
              label: `${point.days}d avg`,
              price: parseFloat(point.nsePrice || point.bsePrice),
            }))
            .reverse();

          const currentPrice = parseFloat(
            data.currentPrice?.NSE || data.currentPrice?.BSE
          );
          formatted.push({ label: "Today", price: currentPrice });

          setChartData(formatted);
          setStockInfo({
            companyName: data.companyName,
            currentPrice,
            percentChange: data.stockDetailsReusableData?.percentChange,
            high: data.stockDetailsReusableData?.high,
            low: data.stockDetailsReusableData?.low,
            yearHigh: data.stockDetailsReusableData?.yhigh,
            yearLow: data.stockDetailsReusableData?.ylow,
          });
        }
      } catch (err) {
        console.log("API Error:", err.response ? err.response.data : err.message);
        setError("Failed to fetch live data.");
      } finally {
        setLoading(false);
      }
    };

    if (uid) fetchChartData();
  }, [uid]);

  return (
    <> 
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          background: "rgba(0,0,0,0.3)",
          zIndex: 998,
        }}
      />

      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          width: "420px",
          height: "100vh",
          background: "#fff",
          boxShadow: "-2px 0 12px rgba(0,0,0,0.15)",
          zIndex: 999,
          padding: "24px",
          boxSizing: "border-box",
          overflowY: "auto",
        }}
      >
        <button
          onClick={onClose}
          style={{
            background: "none",
            border: "none",
            fontSize: "20px",
            cursor: "pointer",
            float: "right",
          }}
        >
          ✕
        </button>
       
        <h3 style={{ margin: "0 0 8px 0", clear: "both" }}>
          {stockInfo?.companyName || uid} — Price Trend
        </h3>

        {loading && <p>Loading chart...</p>}
        {!loading && error && <p style={{ color: "#e74c3c" }}>{error}</p>}

        {!loading && !error && stockInfo && (
          <div style={{ marginBottom: "16px", fontSize: "14px" }}>
            <p style={{ margin: "4px 0" }}>
              <strong>Current:</strong> ₹{stockInfo.currentPrice}{" "}
              <span
                style={{
                  color: parseFloat(stockInfo.percentChange) >= 0 ? "#27ae60" : "#e74c3c",
                }}
              >
                ({stockInfo.percentChange}%)
              </span>
            </p>
            <p style={{ margin: "4px 0" }}>
              Day Range: ₹{stockInfo.low} - ₹{stockInfo.high}
            </p>
            <p style={{ margin: "4px 0" }}>
              Year Range: ₹{stockInfo.yearLow} - ₹{stockInfo.yearHigh}
            </p>
          </div>
        )}

        {!loading && !error && chartData.length > 0 && (
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="label" tick={{ fontSize: 10 }} />
              <YAxis domain={["auto", "auto"]} tick={{ fontSize: 10 }} />
              <Tooltip />
              <Line type="monotone" dataKey="price" stroke="#4a90d9" strokeWidth={2} dot={{ r: 3 }} />
            </LineChart>
          </ResponsiveContainer>
        )}
         <p style={{color:"red"}}>Disclaimer:This stats data comes from a live API 
          (short-term access for me) and might not be 100% accurate. Strictly for development practice! </p>
      </div>
    </>
  );
};

export default AnalyticsWindow;