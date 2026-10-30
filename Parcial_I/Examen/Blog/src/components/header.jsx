
import LenguajeSelector from "./lenguajeSelector";

function Header({
  autor,
  traducciones,
  idioma,
  alCambiarIdioma
}) {
  return (
    <header className="encabezado">
      <a href="#inicio" className="logo">
        {/*<span className="logo-icono">B</span>*/}
        <span>{autor}</span>
      </a>

      <nav className="menu">
        <a href="#inicio">{traducciones.home}</a>
        <a href="#publicaciones">{traducciones.publications}</a>
        <a href="#acerca">{traducciones.about}</a>
      </nav>

      <LenguajeSelector
        idioma={idioma}
        traducciones={traducciones}
        alCambiarIdioma={alCambiarIdioma}
      />
    </header>
  );
}

export default Header;
