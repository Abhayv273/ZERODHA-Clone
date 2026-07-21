import React, { useState, useContext } from "react";



import GeneralContext from "./GeneralContext";

import { Tooltip, Grow } from "@mui/material";

import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";

import { watchlist } from "../data/data";
import { DoughnutChart } from "./DoughnutChart";

const labels = watchlist.map((subArray) => subArray["name"]);
const WatchList = () => {
  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: watchlist.map((stock) => stock.price),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
          "rgba(26, 188, 156, 0.7)",   // Teal
          "rgba(52, 152, 219, 0.7)",   // Sky Blue
          "rgba(155, 89, 182, 0.7)",   // Violet
          "rgba(241, 196, 15, 0.7)",   // Yellow
          "rgba(230, 126, 34, 0.7)",   // Orange
          "rgba(231, 76, 60, 0.7)", 
          "rgba(0, 184, 148, 0.7)",    // Emerald
          "rgba(9, 132, 227, 0.7)",    // Blue
          "rgba(253, 121, 168, 0.7)",  // Pink
          "rgba(253, 203, 110, 0.7)",  // Gold
          "rgba(108, 92, 231, 0.7)",   // Purple
          "rgba(0, 206, 201, 0.7)",    // Turquoise

        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "#1ABC9C",
          "#3498DB",
          "#9B59B6",
          "#F1C40F",
          "#E67E22",
          "#E74C3C",
          "rgba(0, 184, 148, 1)",
          "rgba(9, 132, 227, 1)",
          "rgba(253, 121, 168, 1)",
          "rgba(253, 203, 110, 1)",
          "rgba(108, 92, 231, 1)",
          "rgba(0, 206, 201, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock, index) => {
          return <WatchListItem stock={stock} key={index} />;
        })}
      </ul>

      <DoughnutChart data={data}/>
    </div>
  );
};

export default WatchList;

const WatchListItem = ({ stock }) => {
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);

  const handleMouseEnter = (e) => {
    setShowWatchlistActions(true);
  };

  const handleMouseLeave = (e) => {
    setShowWatchlistActions(false);
  };

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="down" />
          )}
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {showWatchlistActions && <WatchListActions uid={stock.name} />}
    </li>
  );
};

const WatchListActions = ({ uid }) => {
  const generalContext = useContext(GeneralContext);

  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid);
    
  };
   const handleSellClick = () => {
    generalContext.openSellWindow(uid);
    
  };
    const handleAnalyticsClick = () => {
  generalContext.openAnalyticsWindow(uid);
};

  return (
   
    <span className="actions-row">
      <span>
        <Tooltip
          title="Buy (B)"
          placement="top"
          arrow
          TransitionComponent={Grow}
          // onClick={handleBuyClick}
        >
    
          {/* <button  className="buy" style={{height:'20px'}}>Buy</button> */}
           <button className="buy" onClick={handleBuyClick} style={{ height: "20px",}}>
                 Buy
               </button>
        
        </Tooltip>
        <Tooltip
          title="Sell (S)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
           <button className="sell" onClick={handleSellClick} style={{ height: "20px" }}>
                 Sell
               </button>
         
        </Tooltip>

        <Tooltip
          title="Analytics (A)"
             placement="top"
               arrow
               TransitionComponent={Grow}>
               <button className="action" style={{ height: "20px" }} onClick={handleAnalyticsClick}>
                <BarChartOutlined className="icon" />
                </button>
            </Tooltip>

        <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
          <button className="action"style={{height:'20px'}}>
            <MoreHoriz className="icon" />
          </button>
        </Tooltip>
      </span>
    </span>

   
   
  );
};