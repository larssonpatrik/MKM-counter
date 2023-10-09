import React, { PropsWithChildren } from "react";
import styled from "styled-components";

interface ButtonProps {
  children: string;
  action: () => void;
}

export function LogInButton({
  children,
  action,
}: PropsWithChildren<ButtonProps>) {
  return (
    <ScAuthButton onClick={action} type="login">
      {children}
    </ScAuthButton>
  );
}

export function LogOutButton({
  children,
  action,
}: PropsWithChildren<ButtonProps>) {
  return (
    <ScAuthButton onClick={action} type="logout">
      {children}
    </ScAuthButton>
  );
}

export function ResetButton({
  children,
  action,
}: PropsWithChildren<ButtonProps>) {
  return <ScResetButton onClick={action}>{children}</ScResetButton>;
}

const ScResetButton = styled.button`
  padding: 16px 32px;
  background-color: red;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
`;

const ScAuthButton = styled.button<{ type: "login" | "logout" }>`
  ${(props) =>
    props.type === "login"
      ? { backgroundColor: "#edc916", padding: "8px 32px", borderRadius: "8px" }
      : props.type === "logout"
      ? { color: "white" }
      : null}

  font-weight: 500;
  cursor: pointer;
`;
