import React from "react";
import Stock from "./Stock";
// need to import the uuid and pass in the key here to have different keys if clicked twice
import uuid from "react-uuid";

function PortfolioContainer({ stocks, onHandleClick }) {
  const allStocks = stocks.map((stock) => (
    <Stock stock={stock} key={uuid()} onHandleClick={onHandleClick} />
  ));

  return (
    <div>
      <h2>My Portfolio</h2>
      {allStocks}
    </div>
  );
}

export default PortfolioContainer;
