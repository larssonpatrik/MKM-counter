import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <ScText>
      Developed by{" "}
      <a
        href="https://github.com/larssonpatrik"
        target="_blank"
        rel="noreferrer"
        style={{ color: "#5e5e5e" }}
      >
        Paddan 2023
      </a>
    </ScText>
  );
}

const ScText = styled.p`
  color: #3d3d3d;
  text-align: center;
`;
