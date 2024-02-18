import React from "react";
import {
  ScBarGraphContainer,
  ScBarGraphItemMeda,
  ScBarGraphText,
  ScBarGraphItemPlusOnes,
  ScBarGraphTextContainer,
  ScBarGraphTextItem,
  ScBarGraphLabelSquare,
  ScBarGraphLabel,
} from "./BarGraph.styled";

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
