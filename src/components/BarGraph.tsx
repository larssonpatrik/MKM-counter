import React from "react";
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
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <ScBarGraphContainer>
        <ScBarGraphItem
          color="#edc916"
          size={size1}
          style={{ borderRadius: "8px 0 0 8px" }}
          className="test"
        >
          <ScBarGraphText>
            {size1 > 0 && ((size1 / (size1 + size2)) * 100).toFixed(1) + "%"}
          </ScBarGraphText>
        </ScBarGraphItem>

        <ScBarGraphItem
          color="#c5c5c4"
          size={size2}
          style={{ borderRadius: "0 8px 8px 0" }}
        >
          <ScBarGraphText>
            {size2 > 0 && ((size2 / (size1 + size2)) * 100).toFixed(1) + "%"}
          </ScBarGraphText>
        </ScBarGraphItem>
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

const ScBarGraphItem = styled.div<{ color: string; size: number }>`
  flex: ${(props) => props.size} 1;
  background-color: ${(props) => props.color};
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
