import React from "react";

interface Props {
  height: number;
  width: number;
}

const Grid: React.FC<Props> = ({ children, height, width }) => (
  <svg viewBox={`0 0 ${width} ${height}`} height={height} width={width}>
    {children}
  </svg>
);

export default Grid;
