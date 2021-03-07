import React from "react";
import { HeightProperty } from "csstype";
import "./Background.css";

interface BackgroundProps {
  background: NodeRequire;
  height: HeightProperty<string>;
}

export default (props: BackgroundProps) => {
  return (
    <div
      className="background-comp"
      style={{
        backgroundImage: `url(${props.background})`,
        height: props.height,
      }}
    />
  );
};
