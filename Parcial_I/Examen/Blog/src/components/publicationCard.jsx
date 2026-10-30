
function PublicationCard({
  imagen,
  titulo,
  categoria,
  destacada,
  traducciones
}) {
  return (
    <article className="tarjeta">
      <img src={imagen} alt={titulo} className="tarjeta-imagen" />

      <div className="tarjeta-contenido">
        {destacada && (
          <span className="destacada">{traducciones.featured}</span>
        )}

        <span className="categoria">{categoria}</span>

        <h3>{titulo}</h3>

        <a href="#publicaciones" className="leer-mas">
          {traducciones.readPublication} →
        </a>
      </div>
    </article>
  );
}

export default PublicationCard;
