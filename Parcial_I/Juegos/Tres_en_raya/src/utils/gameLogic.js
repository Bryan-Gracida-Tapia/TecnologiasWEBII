// Funciones independientes de React

export const BOARD_SIZE = 9;

export const WINNING_LINES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export function calculateWinner(squares) {
  for (const [a, b, c] of WINNING_LINES) {
    if (
      squares[a] &&
      squares[a] === squares[b] &&
      squares[a] === squares[c]
    ) {
      return squares[a];
    }
  }

  return null;
}

export function isBoardFull(squares) {
  return squares.every((square) => square !== null);
}

export function getGameStatus(squares, xIsNext) {
  const winner = calculateWinner(squares);

  if (winner) {
    return {
      type: "winner",
      message: `Ganador: ${winner}`,
      winner,
    };
  }

  if (isBoardFull(squares)) {
    return {
      type: "draw",
      message: "Empate",
      winner: null,
    };
  }

  return {
    type: "playing",
    message: `Siguiente jugador: ${xIsNext ? "X" : "O"}`,
    winner: null,
  };
}