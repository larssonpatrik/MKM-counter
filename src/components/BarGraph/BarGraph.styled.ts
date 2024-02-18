import styled, { keyframes } from "styled-components";

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

const pulseAnimation = keyframes`
  0% {
    background-color: hsl(0, 91%, 51%);
  }
  50% {
    background-color: hsl(0, 93%, 40%);
  }
  100% {
    background-color: hsl(0, 91%, 51%);
  }
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
  &.pulse {
    animation-name: ${pulseAnimation};
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
  }
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

export {
  ScBarGraphContainer,
  ScBarGraphItemPlusOnes,
  ScBarGraphItemMeda,
  ScBarGraphTextContainer,
  ScBarGraphTextItem,
  ScBarGraphLabelSquare,
  ScBarGraphLabel,
  ScBarGraphText,
};
