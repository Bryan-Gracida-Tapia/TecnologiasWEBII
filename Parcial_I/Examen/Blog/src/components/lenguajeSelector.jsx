
function LenguajeSelector({ idioma, traducciones, alCambiarIdioma }) {
  return (
    <label className="selector-idioma">
      <span>{traducciones.language}</span>

      <select
        value={idioma}
        onChange={(evento) => alCambiarIdioma(evento.target.value)}
        aria-label={traducciones.language}
      >
        <option value="es">{traducciones.spanish}</option>
        <option value="en">{traducciones.english}</option>
      </select>
    </label>
  );
}

export default LenguajeSelector;
