import React, { useState, useEffect } from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";

function App() {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then((data) => data.json)
      .then((json) => setStocks(json));
  }, []);


  console.log(stocks);
  
  return (
    <div>
      <Header />
      <MainContainer stocks={stocks}/>
    </div>
  );
}

export default App;