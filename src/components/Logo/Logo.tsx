import React from "react";

interface LogoProps {
  size: "small" | "medium" | "large";
}

export default function Logo({ size }: LogoProps) {
  const logo = require("../../assets/MKM_LOGO.png");
  return (
    <img
      src={logo}
      alt="logo"
      style={{
        height:
          size === "small"
            ? 64
            : size === "medium"
            ? 128
            : size === "large"
            ? 256
            : 0,
      }}
    ></img>
  );
}
