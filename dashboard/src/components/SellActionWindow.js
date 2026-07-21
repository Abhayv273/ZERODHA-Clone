import React, { useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import GeneralContext from "./GeneralContext";

import "./SellActionWindow.css";

const SellActionWindow = ({ uid }) => {
  // read data by user
  const [stockQuantity, setStockQuantity] = useState("");
  const [stockPrice, setStockPrice] = useState("");

  // form read
const handleSellClick = () => {
  axios.post(
    `${process.env.REACT_APP_API_URL}/newOrder`,
    { name: uid, qty: stockQuantity, price: stockPrice, mode: "SELL" },
    { headers: { Authorization: `Bearer ${localStorage.getItem("authToken")}` } }
  );

  GeneralContext.closeSellWindow();
};
  const handleCancelClick = () => {
    GeneralContext.closeSellWindow();
  };

  return (
    <div className="container" id="Sell-window" draggable="true">
      <div className="regular-order">
        <p><b>{(uid)}</b></p>
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
               onInput={(e)=>{
                if(e.target.value<0)e.target.value="0"
              }}
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend style={{color:"#000"}}>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
               onInput={(e)=>{
                if(e.target.value<0)e.target.value="0"
              }}
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <Link className="btn btn-red" onClick={handleSellClick}>
            Sell
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;