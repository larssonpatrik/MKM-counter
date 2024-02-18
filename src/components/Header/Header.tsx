import React from "react";
import Spacer from "../Spacer/Spacer";
import Logo from "../Logo/Logo";

export default function Header() {
  return (
    <>
      <Spacer size={2} />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Logo size="medium" />
      </div>
    </>
  );
}
