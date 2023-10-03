import React from "react";
import styled from "styled-components";
import { BsArrowUp, BsArrowDown } from "react-icons/bs";

export default function Counter() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "red",
        }}
      >
        <div
          style={{
            display: "flex",
            flex: "1 1",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <BsArrowUp size={36} />
        </div>
        <p style={{ fontSize: 22 }}>100</p>
        <div
          style={{
            display: "flex",
            flex: "1 1",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <BsArrowDown size={36} />
        </div>
      </div>
      <p style={{ textAlign: "center" }}>Media / Dataloger</p>
    </div>
  );
}
