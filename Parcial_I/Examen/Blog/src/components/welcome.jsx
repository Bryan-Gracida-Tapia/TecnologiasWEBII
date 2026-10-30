
function Welcome({ traducciones }) {
  return (
    <section className="bienvenida" id="inicio">
      <span className="etiqueta">{traducciones.etiquetaBienvenida}</span>

      <h1>{traducciones.tituloBienvenida}</h1>

      <p>{traducciones.descripcionBienvenida}</p>

      <a href="#publicaciones" className="boton">
        {traducciones.botonExplorar}
      </a>
    </section>
  );
}

export default Welcome;
