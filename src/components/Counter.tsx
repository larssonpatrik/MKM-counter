import React from "react";
import styled from "styled-components";
import { BsArrowUp, BsArrowDown } from "react-icons/bs";

interface CounterProps {
  name: string;
  count: number;
  changeCount: Function;
}

export default function Counter({ name, count, changeCount }: CounterProps) {
  function countDown() {
    return count === 0 ? changeCount(count) : changeCount(count - 1);
  }
  return (
    <ScComponentContainer>
      <ScCounterContainer>
        <ScArrowCointainer onClick={() => changeCount(count + 1)}>
          <BsArrowUp size={48} />
        </ScArrowCointainer>

        <ScCountContainer>
          <ScCountText>{count}</ScCountText>
        </ScCountContainer>

        <ScArrowCointainer onClick={() => countDown()}>
          <BsArrowDown size={48} />
        </ScArrowCointainer>
      </ScCounterContainer>

      <ScNameContainer>
        <ScNameText>{name}</ScNameText>
      </ScNameContainer>
    </ScComponentContainer>
  );
}

const ScComponentContainer = styled.div`
  flex: auto;
  display: flex;
  flex-direction: column;
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

const ScCountText = styled.p`
  font-size: 42px;
  font-weight: 700;
`;

const ScNameContainer = styled.div`
  text-align: center;
`;

const ScNameText = styled.p`
  font-size: 13px;
`;
