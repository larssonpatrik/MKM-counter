import React from "react";
import { signOut } from "firebase/auth";
import BarGraph from "../../components/BarGraph/BarGraph";
import { ResetButton, LogOutButton } from "../../components/Buttons/Buttons";
import Counter from "../../components/Counter/Counter";
import Spacer from "../../components/Spacer/Spacer";
import { TotalText } from "../../components/Typography/Typography";
import { changeCountDB } from "../../firebaseModel";
import Footer from "../../components/Footer/Footer";
import {
  ScStatusMessage,
  ScCountersWrap,
  ScButtonsContainer,
} from "./CounterView.styled";

interface CounterViewProps {
  countMEDAState: [number, Function];
  countPlusOnesState: [number, Function];
  auth: any;
}

export default function CounterView({
  auth,
  countMEDAState,
  countPlusOnesState,
}: CounterViewProps) {
  const [countMEDA, setCountMEDA] = countMEDAState;
  const [countPlusOnes, setCountPlusOnes] = countPlusOnesState;

  function changeCountMEDA(count: number) {
    changeCountDB(count, countPlusOnes);
    setCountMEDA(count);
  }
  function changeCountPlusOnes(count: number) {
    changeCountDB(countMEDA, count);
    setCountPlusOnes(count);
  }

  function resetCounter() {
    setCountMEDA(0);
    setCountPlusOnes(0);
    changeCountDB(0, 0);
  }

  function logOut() {
    signOut(auth);
  }

  return (
    <>
      <Spacer size={4} />
      <Spacer size={2} />
      <TotalText>{countMEDA + countPlusOnes}</TotalText>
      <Spacer size={3} />

      <ScStatusMessage $countMEDA={countMEDA} $countPlusOnes={countPlusOnes}>
        {countMEDA < countPlusOnes
          ? "Helvete, 50/50 regeln överskriden!"
          : "superhemligt meddelande"}
      </ScStatusMessage>

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

      <Spacer size={3} />
      <ScButtonsContainer>
        <ResetButton action={resetCounter}>Reset counter</ResetButton>
        <LogOutButton action={logOut}>Sign out</LogOutButton>
      </ScButtonsContainer>

      <Spacer size={2} />
      <Spacer size={1} />
      <Footer />
    </>
  );
}
