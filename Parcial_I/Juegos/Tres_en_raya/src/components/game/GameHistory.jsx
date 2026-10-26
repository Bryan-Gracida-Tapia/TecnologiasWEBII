// src/components/game/GameHistory.jsx

export default function GameHistory({ history, currentMove, onJumpTo }) {
  return (
    <section className="game-history">
      <h2>Historial de movimientos</h2>

      <ol>
        {history.map((squares, move) => (
          <li key={move}>
            <button
              type="button"
              onClick={() => onJumpTo(move)}
              disabled={move === currentMove}
              aria-current={move === currentMove ? "step" : undefined}
            >
              {move === 0
                ? "Ir al inicio del juego"
                : `Ir al movimiento #${move}`}
            </button>
          </li>
        ))}
      </ol>
    </section>
  );
}