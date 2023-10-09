import React, { useEffect, useState } from "react";
import "./App.css";
import BarGraph from "./components/BarGraph";
import Counter from "./components/Counter";
import { Heading, TotalText } from "./components/Typography";
import Spacer from "./components/Spacer";
import Logo from "./components/Logo";
import {
  changeCountDB,
  getCurrentCountDataDB,
  signInWithEmail,
} from "./firebaseModel";
import styled from "styled-components";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { LogInButton, LogOutButton, ResetButton } from "./components/Buttons";
import Form from "./components/Form";
import LoginStatus from "./components/LoginStatus";

function App() {
  const [countMEDA, setCountMEDA] = useState<number>(0);
  const [countPlusOnes, setCountPlusOnes] = useState<number>(0);
  const [user, setUser] = useState<any>();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [authStatus, setAuthStatus] = useState<any>();

  function changeCountMEDA(count: number) {
    changeCountDB(count, countPlusOnes);
    setCountMEDA(count);
  }
  function changeCountPlusOnes(count: number) {
    changeCountDB(countMEDA, count);
    setCountPlusOnes(count);
  }

  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        setUser(user);
      } else {
        // User is signed out
        setUser(null);
      }
    });
    return getCurrentCountDataDB(setCountMEDA, setCountPlusOnes);
  }, []);
  return (
    <div className="App">
      <Spacer size={2} />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Logo size="medium" />
      </div>
      {user ? (
        <>
          <Spacer size={4} />
          <Spacer size={2} />
          <TotalText>{countMEDA + countPlusOnes}</TotalText>
          <Spacer size={3} />

          <p
            style={{
              color: countMEDA < countPlusOnes ? "#D10F0F" : "black",
              fontWeight: 500,
              textAlign: "center",
            }}
          >
            {countMEDA <= countPlusOnes
              ? "Helvete, 50/50 regeln överskriden!"
              : "Superhemligt meddelande"}
          </p>

          <Spacer size={2} />
          <BarGraph
            size1={countMEDA}
            size2={countPlusOnes}
            label1="Media / Data"
            label2="Plusettor"
          />
          <Spacer size={2} />
          <ScCountersWrap>
            <Counter
              name="Media / Data"
              count={countMEDA}
              changeCount={changeCountMEDA}
            />
            <Counter
              name="Plusettor"
              count={countPlusOnes}
              changeCount={changeCountPlusOnes}
            />
          </ScCountersWrap>
          <Spacer size={3} />
          <div style={{ display: "flex", justifyContent: "center", gap: 32 }}>
            <ResetButton
              action={() => {
                setCountMEDA(0);
                setCountPlusOnes(0);
                changeCountDB(0, 0);
              }}
            >
              Reset counter
            </ResetButton>
            <LogOutButton action={() => signOut(auth)}>Sign out</LogOutButton>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}></div>
          <Spacer size={2} />
          <Spacer size={1} />
          <p style={{ color: "#3D3D3D", textAlign: "center" }}>
            Developed by Paddan 2023
          </p>
        </>
      ) : (
        <>
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
            />
            <Spacer size={2} />
            <Form
              label="Password"
              stateHandler={[password, setPassword]}
              type="password"
            />

            <Spacer size={3} />
            <LoginStatus status={authStatus} />
            <Spacer size={2} />

            <div style={{ display: "flex", justifyContent: "center" }}>
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
            </div>
          </div>
          <Spacer size={3} />
          <p style={{ color: "#3D3D3D", textAlign: "center" }}>
            Developed by Paddan 2023
          </p>
        </>
      )}
    </div>
  );
}

const ScCountersWrap = styled.div`
  @media screen and (min-width: 768px) {
    justify-content: center;
    display: flex;
    flex: auto;
    gap: 100px;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex: auto;
    gap: 8px;
  }
`;

export default App;
