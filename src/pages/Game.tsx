import React, { useEffect, useState } from "react";
import Board from "../components/Board/Board";
import Column from "../components/Column/Column";
import PageContainer from "../components/PageContainer/PageContainer";
import RestartScoreButton from "../components/RestartScoreButton/RestartScoreButton";
import RestartButton from "../components/RestartButton/RestartButton";
import Score from "../components/Score/Score";
import Squares from "../components/Squares/Squares";
import WinnerAnnounce from "../components/WinnerAnnounce/WinnerAnnounce";
import Footer from "../components/Footer/Footer";

const Game = () => {
  const [isFisrtPlayer, setIsFirstPlayer] = useState(true);
  const [board, setBoard] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  const [winX, setWinX] = useState(0);
  const [winO, setWinO] = useState(0);
  const winner: string | false = checkWin(board);

  function handleClick(row: number, col: number) {
    let newBoard = [...board];
    if (newBoard[col][row] !== "" || winner) {
      return;
    }
    newBoard[col][row] = isFisrtPlayer ? "X" : "O";
    setIsFirstPlayer(!isFisrtPlayer);
    setBoard(newBoard);
  }

  function checkWin(board: string[][]) {
    for (let i = 0; i < board.length; i++) {
      if (board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
        return board[i][0];
      }
    }
    for (let i = 0; i < board.length; i++) {
      if (board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
        return board[0][i];
      }
    }
    if (board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
      return board[0][0];
    }
    if (board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
      return board[0][2];
    }
    return false;
  }
  useEffect(() => {
    if (winner === "X") {
      setWinX((win) => win + 1);
    } else if (winner === "O") {
      setWinO((win) => win + 1);
    }
  }, [winner]);

  function handleRestart() {
    setBoard([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);
    setIsFirstPlayer(true);
  }

  function handleRestartScore() {
    setWinX(0);
    setWinO(0);
  }

  return (
    <PageContainer>
      {winner && <WinnerAnnounce winner={winner} />}
      <Score winX={winX} winO={winO} />
      <Board>
        <Column>
          <Squares row={0} col={0} board={board} click={handleClick} />
          <Squares row={0} col={1} board={board} click={handleClick} />
          <Squares row={0} col={2} board={board} click={handleClick} />
        </Column>
        <Column>
          <Squares row={1} col={0} board={board} click={handleClick} />
          <Squares row={1} col={1} board={board} click={handleClick} />
          <Squares row={1} col={2} board={board} click={handleClick} />
        </Column>
        <Column>
          <Squares row={2} col={0} board={board} click={handleClick} />
          <Squares row={2} col={1} board={board} click={handleClick} />
          <Squares row={2} col={2} board={board} click={handleClick} />
        </Column>
      </Board>
      <Footer>
        <RestartScoreButton handleRestartScore={handleRestartScore} />
        <RestartButton handleRestart={handleRestart} />
      </Footer>
    </PageContainer>
  );
};

export default Game;
