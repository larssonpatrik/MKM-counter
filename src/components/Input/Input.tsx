import React, { useEffect, useState } from "react";
import Spacer from "../Spacer/Spacer";
import { ScFormInput, ScErrorText } from "./Input.styled";

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
