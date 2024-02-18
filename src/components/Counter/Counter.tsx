import React from "react";
import { BsArrowUp, BsArrowDown } from "react-icons/bs";
import {
  ScComponentContainer,
  ScCounterContainer,
  ScArrowCointainer,
  ScCountContainer,
  ScCountText,
  ScNameContainer,
  ScNameText,
} from "./Counter.styled";

interface CounterProps {
  name: string;
  count: number;
  changeCount: Function;
}

export default function Counter({ name, count, changeCount }: CounterProps) {
  function handleInputChange(e: any) {
    const newValue = e.target.value.replace(/\D/g, "");
    changeCount(newValue === "" ? 0 : parseInt(newValue));
  }

  function countDown() {
    return count === 0 ? changeCount(count) : changeCount(count - 1);
  }
  return (
    <ScComponentContainer>
      <ScCounterContainer>
        <ScArrowCointainer onClick={() => changeCount(count + 1)}>
          <BsArrowUp size={48} color="white" />
        </ScArrowCointainer>

        <ScCountContainer>
          <ScCountText value={count} onChange={handleInputChange}></ScCountText>
        </ScCountContainer>

        <ScArrowCointainer onClick={() => countDown()}>
          <BsArrowDown size={48} color="white" />
        </ScArrowCointainer>
      </ScCounterContainer>

      <ScNameContainer>
        <ScNameText>{name}</ScNameText>
      </ScNameContainer>
    </ScComponentContainer>
  );
}
