import React, { useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import GeneralContext from "./GeneralContext";

import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  // read data by user
  const [stockQuantity, setStockQuantity] = useState('0');
  const [stockPrice, setStockPrice] = useState('0');

  // form read
 const handleBuyClick = () => {
  axios.post(
    `${process.env.REACT_APP_API_URL}/newOrder`,
    { name: uid, qty: stockQuantity, price: stockPrice, mode: "BUY" },
    { headers: { Authorization: `Bearer ${localStorage.getItem("authToken")}` } }
  )
   GeneralContext.closeBuyWindow();
};
 const handleCancelClick = () => {
    GeneralContext.closeBuyWindow();
  };
   

 return (
    <div className="container" id="buy-window" draggable="true">
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
          <Link className="btn btn-blue" onClick={handleBuyClick}>
            Buy
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;