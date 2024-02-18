import styled from "styled-components";

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

const ScButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 32px;
`;

const ScStatusMessage = styled.p<{
  $countMEDA: number;
  $countPlusOnes: number;
}>`
  color: ${(props) =>
    props.$countMEDA < props.$countPlusOnes ? "#D10F0F" : "black"};
  font-weight: 500;
  text-align: center;
`;

export { ScCountersWrap, ScButtonsContainer, ScStatusMessage };
