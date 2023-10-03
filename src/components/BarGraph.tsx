import React from "react";
import styled from "styled-components";

interface BarGraphProps {
  size1: number;
  size2: number;
}

export default function BarGraph({ size1, size2 }: BarGraphProps) {
  return (
    <div style={{}}>
      <ScBarGraphContainer>
        <ScBarGraphItem color="red" size={size1}>
          {size1 > 0 && ((size1 / (size1 + size2)) * 100).toFixed(1) + "%"}
        </ScBarGraphItem>
        <ScBarGraphItem color="green" size={size2}>
          {size2 > 0 && ((size2 / (size1 + size2)) * 100).toFixed(1) + "%"}
        </ScBarGraphItem>
      </ScBarGraphContainer>
      <div
        style={{
          padding: "16px 0",
          display: "flex",
          justifyContent: "center",
          gap: 16,
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              height: 12,
              width: 12,
              backgroundColor: "red",
              marginRight: 8,
            }}
          ></div>
          <p>Media / Dataloger</p>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              height: 12,
              width: 12,
              backgroundColor: "green",
              marginRight: 8,
            }}
          ></div>
          <p>Plusettor</p>
        </div>
      </div>
    </div>
  );
}

const ScBarGraphContainer = styled.div`
  height: 80px;
  width: 100%;
  background-color: gray;
  display: flex;
`;

const ScBarGraphItem = styled.div<{ color: string; size: number }>`
  flex: ${(props) => props.size} 1;
  background-color: ${(props) => props.color};
  transition: 250ms;
  display: flex;
  align-items: center;
  justify-content: center;
`;
