import React, { useState } from "react";
import "./App.css";
import BarGraph from "./components/BarGraph";
import Counter from "./components/Counter";

function App() {
  const [countMEDA, setCountMEDA] = useState(0);
  const [countPlusOnes, setCountPlusOnes] = useState(0);

  return (
    <div className="App">
      <BarGraph size1={countMEDA} size2={countPlusOnes} />
      <div style={{ display: "flex" }}>
        <Counter />
      </div>
    </div>
  );
}

export default App;
