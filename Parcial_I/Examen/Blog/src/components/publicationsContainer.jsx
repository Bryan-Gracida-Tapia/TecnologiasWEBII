
import PublicationCard from "./publicationCard";

function PublicationContainer({ publicaciones, traducciones }) {
  return (
    <section className="publicaciones" id="publicaciones">
      <div className="seccion-encabezado">
        <span className="etiqueta">
          {traducciones.publicationsLabel}
        </span>

        <h2>{traducciones.publicationsTitle}</h2>

        {/*<p>{traducciones.publicationsDescription}</p>*/}
      </div>

      {publicaciones.length > 0 ? (
        <div className="publicaciones-grid">
          {publicaciones.map((publicacion) => (
            <PublicationCard
              key={publicacion.id}
              imagen={publicacion.imagen}
              titulo={
                traducciones.publicationTitles[publicacion.claveTitulo]
              }
              categoria={
                traducciones.categories[publicacion.claveCategoria]
              }
              destacada={publicacion.destacada}
              traducciones={traducciones}
            />
          ))}
        </div>
      ) : (
        <p className="sin-publicaciones">
          {traducciones.noPublications}
        </p>
      )}
    </section>
  );
}

export default PublicationContainer;
