import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import { getGuestDataDB } from "../../firebaseModel";
import { TotalText } from "../../components/Typography/Typography";
import Spacer from "../../components/Spacer/Spacer";
import BarGraph from "../../components/BarGraph/BarGraph";
import Footer from "../../components/Footer/Footer";
import {
  ScMainContainer,
  ScDescriptionText,
  ScTimeText,
} from "./GuestView.styled";

export default function GuestView() {
  const [countMEDA, setCountMEDA] = useState<number>(0);
  const [countPlusOnes, setCountPlusOnes] = useState<number>(0);
  const [time, setTime] = useState("");

  useEffect(() => {
    return getGuestDataDB(setCountMEDA, setCountPlusOnes, setTime);
  }, []);
  return (
    <ScMainContainer>
      <Header />
      <Spacer size={3} />

      <ScDescriptionText>There are</ScDescriptionText>
      <Spacer size={3} />
      <Spacer size={1} />
      <TotalText>{countMEDA + countPlusOnes}</TotalText>
      <Spacer size={3} />
      <Spacer size={1} />
      <ScDescriptionText>people in META right now!</ScDescriptionText>

      <Spacer size={2} />
      <BarGraph
        size1={countMEDA}
        size2={countPlusOnes}
        label1="Media / Data"
        label2="Plusettor"
      />

      <ScTimeText>Last updated: {time}</ScTimeText>

      <Spacer size={3} />
      <Footer />
    </ScMainContainer>
  );
}
