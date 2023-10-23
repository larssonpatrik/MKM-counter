import React from "react";
import styled from "styled-components";

interface CountDisplayerProps {
  count: number;
}

export default function CountDisplayer({ count }: CountDisplayerProps) {
  return (
    <ScCountContainer>
      <ScCountText>{count}</ScCountText>
    </ScCountContainer>
  );
}

const ScCountContainer = styled.div`
  display: flex;
  flex: 1 1;
  justify-content: center;
  align-items: center;
  padding: 0 8px;
`;

const ScCountText = styled.p`
  font-size: 42px;
  font-weight: 700;
  color: white;
`;
