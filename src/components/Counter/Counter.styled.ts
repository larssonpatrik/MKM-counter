import styled from "styled-components";

const ScComponentContainer = styled.div`
  @media screen and (max-width: 768px) {
    flex: auto;
    display: flex;
    flex-direction: column;
  }

  @media screen and (min-width: 768px) {
    width: 20vw;
    display: flex;
    flex-direction: column;
  }
`;

const ScCounterContainer = styled.div`
  display: flex;
`;

const ScArrowCointainer = styled.div`
  display: flex;
  flex: 1 1;
  justify-content: center;
  align-items: center;
`;

const ScCountContainer = styled.div`
  display: flex;
  flex: 1 1;
  justify-content: center;
  align-items: center;
  padding: 0 8px;
`;

const ScCountText = styled.input.attrs({ inputMode: "numeric" })`
  @media screen and (max-width: 768px) {
    max-width: 50px;
  }

  @media screen and (min-width: 768px) {
    max-width: 75px;
  }

  text-align: center;
  font-size: 42px;
  font-weight: 700;
  color: white;
`;

const ScNameContainer = styled.div`
  text-align: center;
`;

const ScNameText = styled.p`
  font-size: 13px;
  color: white;
`;

export {
  ScComponentContainer,
  ScCounterContainer,
  ScArrowCointainer,
  ScCountContainer,
  ScCountText,
  ScNameContainer,
  ScNameText,
};
