import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ stocks }) {
  const allStocks = stocks.map((stock) => (
    <Stock stock={stock} key={stock.id} />
  ));
  return (
    <div>
      <h2>My Portfolio</h2>
      {allStocks}
    </div>
  );
}

export default PortfolioContainer;