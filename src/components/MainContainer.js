import React from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer(stocks) {
  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks}/>
        </div>
        <div className="col-4">
          <PortfolioContainer />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
