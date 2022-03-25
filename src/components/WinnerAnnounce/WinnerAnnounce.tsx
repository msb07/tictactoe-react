import React, { FC } from "react";

interface IProps {
  winner: string;
}

const WinnerAnnounce: FC<IProps> = ({ winner }) => {
  return <div className="match-winner">Player {winner} won the match</div>;
};

export default WinnerAnnounce;
