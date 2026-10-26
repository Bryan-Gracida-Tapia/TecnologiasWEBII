// src/hooks/useTicTacToe.js

import { useState } from "react";
import {
  BOARD_SIZE,
  calculateWinner,
  getGameStatus,
} from "../utils/gameLogic";

export default function useTicTacToe() {
  const [history, setHistory] = useState([
    Array(BOARD_SIZE).fill(null),
  ]);

  const [currentMove, setCurrentMove] = useState(0);

  const currentSquares = history[currentMove];
  const xIsNext = currentMove % 2 === 0;

  const winner = calculateWinner(currentSquares);
  const status = getGameStatus(currentSquares, xIsNext);

  function handlePlay(index) {
    if (winner || currentSquares[index] !== null) {
      return;
    }

    const nextSquares = [...currentSquares];
    nextSquares[index] = xIsNext ? "X" : "O";

    // Conserva solo el historial hasta el movimiento actual.
    const nextHistory = [
      ...history.slice(0, currentMove + 1),
      nextSquares,
    ];

    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    if (nextMove < 0 || nextMove >= history.length) {
      return;
    }

    setCurrentMove(nextMove);
  }

  function resetGame() {
    setHistory([Array(BOARD_SIZE).fill(null)]);
    setCurrentMove(0);
  }

  return {
    history,
    currentMove,
    currentSquares,
    xIsNext,
    status,
    handlePlay,
    jumpTo,
    resetGame,
  };
}