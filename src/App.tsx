import React, { useState } from "react";
import "./App.css";
import BarGraph from "./components/BarGraph";
import Counter from "./components/Counter";
import { TotalText } from "./components/Typography";
import Spacer from "./components/Spacer";

function App() {
  const [countMEDA, setCountMEDA] = useState(0);
  const [countPlusOnes, setCountPlusOnes] = useState(0);

  return (
    <div className="App">
      <TotalText>{countMEDA + countPlusOnes}</TotalText>
      <Spacer size={2} />
      <BarGraph size1={countMEDA} size2={countPlusOnes} />
      <div style={{ display: "flex", flex: "auto", gap: 8 }}>
        <Counter
          name="Media / Dataloger"
          count={countMEDA}
          changeCount={setCountMEDA}
        />
        <Counter
          name="Plusettor"
          count={countPlusOnes}
          changeCount={setCountPlusOnes}
        />
      </div>
    </div>
  );
}

export default App;
