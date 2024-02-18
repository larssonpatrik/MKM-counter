import React from "react";
import { ScText } from "./Footer.styled";

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
