import React, { useState } from "react";
import "./App.css";
import BarGraph from "./components/BarGraph";
import Counter from "./components/Counter";
import { TotalText } from "./components/Typography";
import Spacer from "./components/Spacer";
import Logo from "./components/Logo";
import Button from "./components/Button";
import { addDataTEST } from "./firebaseModel";

function App() {
  const [countMEDA, setCountMEDA] = useState(0);
  const [countPlusOnes, setCountPlusOnes] = useState(0);

  function changeCountMEDA(count: number) {
    addDataTEST(count + countPlusOnes);
    setCountMEDA(count);
  }
  function changeCountPlusOnes(count: number) {
    addDataTEST(count + countMEDA);
    setCountPlusOnes(count);
  }

  return (
    <div className="App">
      <Spacer size={2} />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Logo size="medium" />
      </div>
      <Spacer size={1} />
      <Spacer size={5} />
      <TotalText>{countMEDA + countPlusOnes}</TotalText>
      <Spacer size={5} />
      <BarGraph
        size1={countMEDA}
        size2={countPlusOnes}
        label1="Media / Data"
        label2="Plusettor"
      />
      <Spacer size={2} />
      <div style={{ display: "flex", flex: "auto", gap: 8 }}>
        <Counter
          name="Media / Data"
          count={countMEDA}
          changeCount={changeCountMEDA}
        />
        <Counter
          name="Plusettor"
          count={countPlusOnes}
          changeCount={changeCountPlusOnes}
        />
      </div>
      <Spacer size={1} />
      <Spacer size={3} />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          label="Reset counter"
          action={() => {
            setCountMEDA(0);
            setCountPlusOnes(0);
            addDataTEST(0);
          }}
        />
      </div>
    </div>
  );
}

export default App;
