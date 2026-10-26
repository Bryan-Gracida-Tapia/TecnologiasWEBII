// src/pages/Game.jsx

import useTicTacToe from "../hooks/useTicTacToe";
import Board from "../components/game/Board";
import GameStatus from "../components/game/GameStatus";
import GameHistory from "../components/game/GameHistory";

export default function Game() {
  const {
    history,
    currentMove,
    currentSquares,
    status,
    handlePlay,
    jumpTo,
    resetGame,
  } = useTicTacToe();

  return (
    <main className="game">
      <h1>Tres en raya</h1>

      <section className="game-board">
        <GameStatus status={status} />

        <Board
          squares={currentSquares}
          onSquareClick={handlePlay}
        />

        <button type="button" onClick={resetGame}>
          Reiniciar partida
        </button>
      </section>

      <aside className="game-info">
        <GameHistory
          history={history}
          currentMove={currentMove}
          onJumpTo={jumpTo}
        />
      </aside>
    </main>
  );
}