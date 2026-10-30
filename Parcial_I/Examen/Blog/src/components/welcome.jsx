
function Welcome({ traducciones }) {
  return (
    <section className="bienvenida" id="inicio">
      <span className="etiqueta">{traducciones.welcomeLabel}</span>

      <h1>{traducciones.welcomeTitle}</h1>
      <p>{traducciones.welcomeDescription}</p>

      <a href="#publicaciones" className="boton">
        {traducciones.exploreButton}
      </a>
    </section>
  );
}

export default Welcome;
