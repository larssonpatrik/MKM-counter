import React, { useEffect, useState } from "react";
import "./App.css";
import BarGraph from "./components/BarGraph";
import Counter from "./components/Counter";
import { TotalText } from "./components/Typography";
import Spacer from "./components/Spacer";
import Logo from "./components/Logo";
import Button from "./components/Button";
import { changeCountDB, getCurrentCountDataDB } from "./firebaseModel";
import styled from "styled-components";

function App() {
  const [countMEDA, setCountMEDA] = useState<number>(0);
  const [countPlusOnes, setCountPlusOnes] = useState<number>(0);

  function changeCountMEDA(count: number) {
    changeCountDB(count, countPlusOnes);
    setCountMEDA(count);
  }
  function changeCountPlusOnes(count: number) {
    changeCountDB(countMEDA, count);
    setCountPlusOnes(count);
  }

  useEffect(() => {
    return getCurrentCountDataDB(setCountMEDA, setCountPlusOnes);
  }, []);

  return (
    <div className="App">
      <Spacer size={2} />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Logo size="medium" />
      </div>
      <Spacer size={1} />
      <Spacer size={5} />
      <TotalText>{countMEDA + countPlusOnes}</TotalText>
      <Spacer size={3} />

      <p
        style={{
          color: countMEDA < countPlusOnes ? "#D10F0F" : "black",
          fontWeight: 500,
          textAlign: "center",
        }}
      >
        {countMEDA <= countPlusOnes
          ? "Helvete, 50/50 regeln överskriden!"
          : "Superhemligt meddelande"}
      </p>

      <Spacer size={2} />
      <BarGraph
        size1={countMEDA}
        size2={countPlusOnes}
        label1="Media / Data"
        label2="Plusettor"
      />
      <Spacer size={2} />
      <ScCountersWrap>
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
      </ScCountersWrap>
      <Spacer size={1} />
      <Spacer size={3} />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          label="Reset counter"
          action={() => {
            setCountMEDA(0);
            setCountPlusOnes(0);
            changeCountDB(0, 0);
          }}
        />
      </div>
      <Spacer size={2} />
      <p style={{ color: "#3D3D3D", textAlign: "center" }}>
        Developed by Paddan 2023
      </p>
    </div>
  );
}

const ScCountersWrap = styled.div`
  @media screen and (min-width: 768px) {
    justify-content: center;
    display: flex;
    flex: auto;
    gap: 100px;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex: auto;
    gap: 8px;
  }
`;

export default App;
