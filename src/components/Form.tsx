import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "./Form.css";
import Spacer from "./Spacer";
import { Heading } from "./Typography";
import Input from "./Input";

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

const ScFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1;
`;

const ScFormInput = styled.input`
  padding: 8px 16px;
  background-color: #323232;
  border-radius: 8px;
  color: white;
  caret-color: white;
  border: 2px solid black;
`;
