
import { useState } from "react";
//import "../styles/ConditionalRendering.css";

// Componentes
function AdminPanel() {
  return <p className="success">Bienvenido al panel de administración.</p>;
}

function LoginForm() {
  return <p className="warning">Debes iniciar sesión para continuar.</p>;
}

export default function ConditionalRendering() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // EJEMPLO 1: Condicional if...else
  let content;

  if (isLoggedIn) {
    content = <AdminPanel />;
  } else {
    content = <LoginForm />;
  }

  return (
    <main className="conditional-container">
      <h1>Prueba de renderizado condicional</h1>

      <p>
        Estado actual:{" "}
        <strong>{isLoggedIn ? "Sesión iniciada" : "Sesión cerrada"}</strong>
      </p>

      <button
        className="toggle-button"
        onClick={() => setIsLoggedIn(!isLoggedIn)}
      >
        {isLoggedIn ? "Cerrar sesión" : "Iniciar sesión"}
      </button>


      <section className="example-card">
        <h2>1. Condicional </h2>
        <p>La variable content almacena el componente seleccionado.</p>
        <div>{content}</div>
      </section>

    </main>
  );
}
