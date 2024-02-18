import React, { PropsWithChildren } from "react";
import { ScAuthButton, ScResetButton } from "./Buttons.styled";

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
