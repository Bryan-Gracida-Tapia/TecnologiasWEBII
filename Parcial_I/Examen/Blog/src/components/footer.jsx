
function Footer({ autor, anio, traducciones }) {
  return (
    <footer className="pie-pagina" id="acerca">
      <p>
        © {anio} {autor}. {traducciones.allRightsReserved}
      </p>

      <p>{traducciones.footerMessage}</p>
    </footer>
  );
}

export default Footer;
