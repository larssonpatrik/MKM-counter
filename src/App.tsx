import React, { useEffect, useState } from "react";
import "./App.css";
import { getCurrentCountDataDB } from "./firebaseModel";
import styled from "styled-components";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import LogInView from "./views/LogInView/LogInView";
import Header from "./components/Header/Header";
import CounterView from "./views/CounterView/CounterView";

function App() {
  const [user, setUser] = useState<any>();
  const [countMEDA, setCountMEDA] = useState<number>(0);
  const [countPlusOnes, setCountPlusOnes] = useState<number>(0);

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
      <Header />
      {user ? (
        <CounterView
          auth={auth}
          countMEDAState={[countMEDA, setCountMEDA]}
          countPlusOnesState={[countPlusOnes, setCountPlusOnes]}
        />
      ) : (
        <LogInView />
      )}
    </div>
  );
}

export default App;
