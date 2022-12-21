import React, { useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer({ stocks, setStocks }) {
  const [portfolio, setPortfolio] = useState([]);

  const addToPortfolio = (stock) => {
    setPortfolio([...portfolio, stock]);
  };

  const removeFromPortfolio = (clickedStock) => {
    const newPortfolio = portfolio.filter((stock) => {
      return stock.id !== clickedStock.id;
    });
    setPortfolio(newPortfolio);
  };

  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks} onHandleClick={addToPortfolio} />
        </div>
        <div className="col-4">
          <PortfolioContainer
            stocks={portfolio}
            onHandleClick={removeFromPortfolio}
          />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
