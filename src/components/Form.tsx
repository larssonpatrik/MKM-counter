import React from "react";
import styled from "styled-components";
import "./Form.css";
import Spacer from "./Spacer";
import { Heading } from "./Typography";

interface FormProps {
  label: string;
  type: string;
  stateHandler: [string, Function];
}

export default function Form({ label, stateHandler, type }: FormProps) {
  const [input, setInput] = stateHandler;
  return (
    <ScFormContainer>
      <Heading size={2}>{label}</Heading>
      <Spacer size={0} />
      <ScFormInput
        placeholder={"Enter " + label.toLocaleLowerCase()}
        className="form"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type={type}
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
`;
