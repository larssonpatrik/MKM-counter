import React from "react";
import Spacer from "../Spacer/Spacer";
import { Heading } from "../Typography/Typography";
import Input from "../Input/Input";
import { ScFormContainer } from "./Form.styled";

interface FormProps {
  label: string;
  type: string;
  stateHandler: [string, Function];
  errorStatus: number | null;
  signIn?: Function;
}

export default function Form({
  label,
  stateHandler,
  type,
  signIn,
  errorStatus,
}: FormProps) {
  const [input, setInput] = stateHandler;

  function handleEnterPress(e: any) {
    if (signIn) {
      if (e.key === "Enter") {
        signIn();
      }
    }
  }

  return (
    <ScFormContainer>
      <Heading size={2}>{label}</Heading>
      <Spacer size={0} />
      <Input
        label={label}
        inputHandler={[input, setInput]}
        keyPressHandler={handleEnterPress}
        type={type}
        errorStatus={errorStatus}
      />
    </ScFormContainer>
  );
}
