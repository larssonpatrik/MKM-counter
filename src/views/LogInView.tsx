import React, { useEffect, useState } from "react";
import { LogInButton, LogOutButton } from "../components/Buttons";
import Form from "../components/Form";
import LoginStatus from "../components/LoginStatus";
import Spacer from "../components/Spacer";
import { Heading } from "../components/Typography";
import { signInWithEmail } from "../firebaseModel";
import styled from "styled-components";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function LogInView() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [authStatus, setAuthStatus] = useState<any>();
  const [error, setError] = useState<number | null>(null);

  useEffect(() => {
    authStatus?.code.includes("auth/invalid-email")
      ? setError(0)
      : authStatus?.code.includes("auth/missing-password")
      ? setError(1)
      : authStatus?.code.includes("auth/invalid-login-credentials)")
      ? setError(2)
      : setError(null);
  }, [authStatus, error]);

  return (
    <>
      <ScLogInContainer>
        <ScLogInWrap>
          <Spacer size={4} />
          <Heading size={1}>Sign in</Heading>
          <Spacer size={2} />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Form
              label="Username"
              stateHandler={[username, setUsername]}
              type="username"
              signIn={() =>
                signInWithEmail(username + "@mail.com", password, setAuthStatus)
              }
              errorStatus={error}
            />
            <Spacer size={2} />
            <Form
              label="Password"
              stateHandler={[password, setPassword]}
              type="password"
              signIn={() =>
                signInWithEmail(username + "@mail.com", password, setAuthStatus)
              }
              errorStatus={error}
            />

            <Spacer size={2} />
            <LoginStatus status={authStatus} />
            <Spacer size={2} />

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 16,
              }}
            >
              <LogInButton
                action={() =>
                  signInWithEmail(
                    username + "@mail.com",
                    password,
                    setAuthStatus
                  )
                }
              >
                Sign in
              </LogInButton>
              <p style={{ color: "white" }}>or</p>
              <Link to="guest">
                <LogOutButton action={() => null}>
                  Go to guest page
                </LogOutButton>
              </Link>
            </div>
          </div>
          <Spacer size={3} />
          <Footer />
        </ScLogInWrap>
      </ScLogInContainer>
    </>
  );
}

const ScLogInWrap = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 35vw;
  }
`;

const ScLogInContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;
