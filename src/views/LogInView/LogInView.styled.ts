import { styled } from "styled-components";

const ScLogInWrap = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 35vw;
  }
`;

const ScLogInContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;

export { ScLogInWrap, ScLogInContainer };
