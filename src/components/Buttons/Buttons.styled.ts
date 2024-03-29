import styled from "styled-components";

const ScResetButton = styled.button`
  padding: 16px 32px;
  background-color: red;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
`;

const ScAuthButton = styled.button<{ type: "login" | "logout" }>`
  ${(props) =>
    props.type === "login"
      ? { backgroundColor: "#edc916", padding: "8px 32px", borderRadius: "8px" }
      : props.type === "logout"
      ? { color: "white" }
      : null}

  font-weight: 500;
  cursor: pointer;
`;

export { ScResetButton, ScAuthButton };
