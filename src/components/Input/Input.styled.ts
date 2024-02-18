import styled from "styled-components";

const ScFormInput = styled.input`
  padding: 8px 16px;
  background-color: #323232;
  border-radius: 8px;
  color: white;
  caret-color: white;
  border: 2px solid black;
  const ScFormInput = styled.input &::placeholder {
    color: #696969;
  }

  &:hover,
  &:focus {
    border: 2px solid #696969;
  }
`;

const ScErrorText = styled.p`
  color: red;
  font-size: 13px;
  margin-left: 4px;
`;

export { ScFormInput, ScErrorText };
