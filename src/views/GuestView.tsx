import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { getGuestDataDB } from "../firebaseModel";
import { TotalText } from "../components/Typography";
import Spacer from "../components/Spacer";
import { styled } from "styled-components";
import BarGraph from "../components/BarGraph";
import Footer from "../components/Footer";

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

const ScMainContainer = styled.div`
  padding: 0 16px;
`;

const ScDescriptionText = styled.p`
  color: white;
  text-align: center;
`;

const ScTimeText = styled.p`
  color: rgb(61, 61, 61);
  text-align: center;
`;
