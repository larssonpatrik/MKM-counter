import React from "react";
import { ScStatusText } from "./LoginStatus.styled";

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
      {code.includes("invalid-login-credentials")
        ? "Invalid username/password!"
        : "Don't have an account? Too bad!"}
    </ScStatusText>
  );
}
