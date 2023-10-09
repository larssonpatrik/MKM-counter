import React, { PropsWithChildren } from "react";
import styled from "styled-components";

export function TotalText({ children }: PropsWithChildren) {
  return <ScTotalText>{children}</ScTotalText>;
}

interface HeadingProps {
  size: 1 | 2;
  children: string;
}

export function Heading({ children, size }: PropsWithChildren<HeadingProps>) {
  return size === 1 ? (
    <ScH1>{children}</ScH1>
  ) : size === 2 ? (
    <ScH2>{children}</ScH2>
  ) : null;
}

const ScTotalText = styled.div`
  text-align: center;
  font-size: 184px;
  font-weight: 700;
  line-height: 100px;
  color: white;
`;

const ScH1 = styled.h1`
  color: white;
  font-size: 36px;
  font-weight: 700;
`;

const ScH2 = styled.h2`
  color: white;
  font-size: 18px;
`;
