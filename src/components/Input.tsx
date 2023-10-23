import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Spacer from "./Spacer";

interface InputProps {
  label: string;
  inputHandler: [string, Function];
  keyPressHandler: (e: any) => void;
  type: string;
  errorStatus: number | null;
}

export default function Input({
  label,
  inputHandler,
  keyPressHandler,
  type,
  errorStatus,
}: InputProps) {
  const [input, setInput] = inputHandler;
  const [inputError, setInputError] = useState(false);
  let errorMsg = "Please enter a valid " + type + ".";

  function handleTextChange(e: any) {
    setInput(e.target.value);
  }

  useEffect(() => {
    if (!input) {
      if (typeof errorStatus === typeof 2) {
        setInputError(true);
      }
    } else {
      setInputError(false);
    }
  }, [errorStatus, input]);

  return (
    <>
      <ScFormInput
        placeholder={"Enter " + label.toLocaleLowerCase()}
        className="form"
        value={input}
        onChange={handleTextChange}
        onKeyDown={keyPressHandler}
        type={type}
      />
      <Spacer size={0} />
      {inputError && <ScErrorText>{errorMsg}</ScErrorText>}
    </>
  );
}

const ScFormInput = styled.input`
  padding: 8px 16px;
  background-color: #323232;
  border-radius: 8px;
  color: white;
  caret-color: white;
  border: 2px solid black;
`;

const ScErrorText = styled.p`
  color: red;
  font-size: 13px;
  margin-left: 4px;
`;
