import React, { useState } from "react";
import styled from "styled-components";
import "./BarGraph.css";

interface BarGraphProps {
  size1: number;
  size2: number;
  label1: string;
  label2: string;
}

export default function BarGraph({
  size1,
  size2,
  label1,
  label2,
}: BarGraphProps) {
  let value;
  let className = "";
  const percentageMEDA = (size1 / (size1 + size2)) * 100;
  const percentagePlusOnes = (size2 / (size1 + size2)) * 100;
  const delta40 = percentagePlusOnes - 40;

  if (10 >= delta40 && delta40 > 0) {
    value = 50 - delta40 * 5;
  } else if (delta40 > 10) {
    value = 0;
    className = "pulse";
  } else if (delta40 <= 0) {
    value = 50;
  }

  console.log("VALUE:", value);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <ScBarGraphContainer>
        <ScBarGraphItemMeda
          value={value}
          size={size1}
          style={{ borderRadius: "8px 0 0 8px" }}
          className={className}
        >
          <ScBarGraphText>
            {size1 > 0 && percentageMEDA.toFixed(1) + "%"}
          </ScBarGraphText>
        </ScBarGraphItemMeda>

        <ScBarGraphItemPlusOnes
          size={size2}
          style={{ borderRadius: "0 8px 8px 0" }}
        >
          <ScBarGraphText>
            {size2 > 0 && percentagePlusOnes.toFixed(1) + "%"}
          </ScBarGraphText>
        </ScBarGraphItemPlusOnes>
      </ScBarGraphContainer>

      <ScBarGraphTextContainer>
        <ScBarGraphTextItem>
          <ScBarGraphLabelSquare color="#edc916" />
          <ScBarGraphLabel>{label1}</ScBarGraphLabel>
        </ScBarGraphTextItem>

        <ScBarGraphTextItem>
          <ScBarGraphLabelSquare color="#c5c5c4" />
          <ScBarGraphLabel>{label2}</ScBarGraphLabel>
        </ScBarGraphTextItem>
      </ScBarGraphTextContainer>
    </div>
  );
}

const ScBarGraphContainer = styled.div`
  @media screen and (min-width: 768px) {
    width: 40vw;
  }
  height: 40px;
  width: 100%;
  background-color: #323232;
  display: flex;
  border-radius: 8px;
`;

const ScBarGraphItemPlusOnes = styled.div<{ size: number }>`
  flex: ${(props) => props.size} 1;
  background-color: #c5c5c4;
  transition: 250ms;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ScBarGraphItemMeda = styled.div<{
  size: number;
  value: number | undefined;
}>`
  background-color: ${(props) => "hsl(" + props.value + ", 91%, 51%)"};

  flex: ${(props) => props.size} 1;
  transition: 250ms;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ScBarGraphTextContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  padding: 16px 0;
`;

const ScBarGraphTextItem = styled.div`
  display: flex;
  align-items: center;
`;

const ScBarGraphLabelSquare = styled.div<{ color: string }>`
  height: 12px;
  width: 12px;
  background-color: ${(props) => props.color};
  margin-right: 8px;
`;

const ScBarGraphLabel = styled.p`
  color: white;
`;

const ScBarGraphText = styled.p`
  font-weight: 700;
`;
