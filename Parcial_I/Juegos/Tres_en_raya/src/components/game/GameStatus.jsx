// src/components/game/GameStatus.jsx

export default function GameStatus({ status }) {
  return (
    <div
      className="status"
      role="status"
      aria-live="polite"
    >
      {status.message}
    </div>
  );
}