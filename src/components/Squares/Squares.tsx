import React, { FC } from "react";

interface IProps {
  click: (row: number, col: number) => void; // tipagem?
  row: number;
  col: number;
  board: string[][];
}

const Squares: FC<IProps> = ({ row, col, click, board }) => {
  return (
    <span onClick={() => click(row, col)} className="square">
      {board[col][row]}
    </span>
  );
};

export default Squares;
