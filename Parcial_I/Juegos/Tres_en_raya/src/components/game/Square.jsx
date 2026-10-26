// src/components/game/Square.jsx

export default function Square({ value, onSquareClick }) {
  return (
    <button
      type="button"
      className="square"
      onClick={onSquareClick}
      aria-label={`Casilla: ${value ?? "vacía"}`}
    >
      {value}
    </button>
  );
}