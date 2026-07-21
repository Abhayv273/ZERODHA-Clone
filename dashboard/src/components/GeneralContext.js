import React, { useState } from "react";

import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow";

import AnalyticsWindow from "./AnalyticsWindow";
const GeneralContext = React.createContext({
  openBuyWindow: (uid) => {},
  openSellWindow: (uid) => {},
  closeBuyWindow: () => {},

  openAnalyticsWindow: (uid) => {},
  closeAnalyticsWindow: () => {},
});

export const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [isSellWindowOpen,setIsSellWindowOpen] = useState(false);
    const [isAnalyticsWindowOpen, setIsAnalyticsWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");

  const handleOpenBuyWindow = (uid) => {
    setIsBuyWindowOpen(true);
    setSelectedStockUID(uid);
  };
  const handleOpenSellWindow = (uid) => {
    setIsSellWindowOpen(true);
    setSelectedStockUID(uid);
  };

   const handleOpenAnalyticsWindow = (uid) => {
    setIsAnalyticsWindowOpen(true);
    setSelectedStockUID(uid);
  };

  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
  };
  const handleCloseSellWindow = () => {
    setIsSellWindowOpen(false);
    setSelectedStockUID("");
  };
  
    const handleCloseAnalyticsWindow = () => {
    setIsAnalyticsWindowOpen(false);
    setSelectedStockUID("");
  };


  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        openSellWindow: handleOpenSellWindow,
        closeBuyWindow: handleCloseBuyWindow,
        closeSellWindow: handleCloseSellWindow,

         openAnalyticsWindow: handleOpenAnalyticsWindow,
        closeAnalyticsWindow: handleCloseAnalyticsWindow,
        
       
      }}
    >
      {props.children}
      {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}
      {isSellWindowOpen && <SellActionWindow uid={selectedStockUID} />}

       {isAnalyticsWindowOpen && (
        <AnalyticsWindow uid={selectedStockUID} onClose={handleCloseAnalyticsWindow} />
       )}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;