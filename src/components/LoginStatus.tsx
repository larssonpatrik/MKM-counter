import React, { PropsWithChildren } from "react";
import styled from "styled-components";

interface LoginStatusProps {
  status: any;
}

export default function LoginStatus({ status }: LoginStatusProps) {
  let code = "";
  if (typeof status === "object" && status !== null) {
    code = status.code;
  }
  return (
    <ScStatusText>
      {code.includes("invalid-email")
        ? "Please enter a valid username!"
        : code.includes("missing-password")
        ? "Please enter a password!"
        : code.includes("invalid-login-credentials")
        ? "Invalid username/password!"
        : "Don't have an account? Too bad!"}
    </ScStatusText>
  );
}

const ScStatusText = styled.p`
  color: white;
  text-align: center;
`;
