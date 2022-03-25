import React, { FC } from "react";

interface IProps {
  handleRestartScore: () => void;
}

const RestartScoreButton: FC<IProps> = ({ handleRestartScore }) => {
  return (
    <button className="restart-button" onClick={handleRestartScore}>
      Restart Score
    </button>
  );
};

export default RestartScoreButton;
