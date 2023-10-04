import React from "react";

interface SpacerProps {
  size: number;
}
const SIZE = [4, 8, 16, 32, 64];
export default function Spacer({ size }: SpacerProps) {
  return <div style={{ height: SIZE[size], width: SIZE[size] }}></div>;
}
