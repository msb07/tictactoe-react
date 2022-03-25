import React, { FC } from "react";

const Board: FC = ({ children }) => {
  return <div className="ticTacToe">{children}</div>;
};

export default Board;
