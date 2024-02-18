import React, { PropsWithChildren } from "react";
import { ScTotalText, ScH1, ScH2 } from "./Typography.styled";

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
