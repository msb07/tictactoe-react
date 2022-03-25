import React, { FC } from "react";

interface IProps {
  handleRestart: () => void;
}

const RestartButton: FC<IProps> = ({ handleRestart }) => {
  return (
    <button className="restart-button" onClick={handleRestart}>
      Restart Game
    </button>
  );
};

export default RestartButton;
