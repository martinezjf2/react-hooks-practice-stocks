import React, { useState, useEffect } from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";

function App() {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then((data) => data.json())
      .then(setStocks);
  }, []);

  return (
    <div>
      <Header />
      <MainContainer stocks={stocks} setStocks={setStocks} />
    </div>
  );
}

export default App;
