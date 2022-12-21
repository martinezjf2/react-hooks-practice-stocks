import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, onHandleClick }) {
  const allStocks = stocks.map((stock) => (
    <Stock stock={stock} key={stock.id} onHandleClick={onHandleClick} />
  ));
  return (
    <div>
      <h2>Stocks</h2>
      {allStocks}
    </div>
  );
}

export default StockContainer;
