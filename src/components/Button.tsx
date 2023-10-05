import React from "react";
import styled from "styled-components";

interface ButtonProps {
  label: string;
  action: () => void;
}
export default function Button({ label, action }: ButtonProps) {
  return <ScButton onClick={action}>{label}</ScButton>;
}

const ScButton = styled.button`
  padding: 16px 32px;
  background-color: red;
  border-radius: 8px;
  font-weight: 500;
`;
