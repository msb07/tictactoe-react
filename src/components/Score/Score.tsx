import React, { FC } from "react";

interface IProps {
  winX: number;
  winO: number;
}

const Score: FC<IProps> = ({ winX, winO }) => {
  return (
    <div className="score">
      <div className="score-players">
        <div className="score-playerX">Player X</div>
        <div className="score-vs">vs</div>
        <div className="score-playerO">Player O</div>
      </div>
      <div className="score-points">
        <div className="score-playerX">{winX}</div>
        <div className="score-playerO">{winO}</div>
      </div>
    </div>
  );
};

export default Score;
