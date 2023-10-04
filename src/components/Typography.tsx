import React, { PropsWithChildren } from "react";
import styled from "styled-components";

export function TotalText({ children }: PropsWithChildren) {
  return <ScTotalText>{children}</ScTotalText>;
}

const ScTotalText = styled.div`
  text-align: center;
  font-size: 184px;
  font-weight: 700;
  line-height: 100px;
  color: white;
`;
