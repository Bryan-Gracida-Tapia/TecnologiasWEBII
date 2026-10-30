
import { useState } from "react";
import Header from "./components/header";
import Welcome from "./components/welcome";
import PublicationsContainer from "./components/publicationsContainer";
import Footer from "./components/footer";
import Publications from "./data/Publications";
import traduccionesEspanol from "./traductions/es.json";
import traduccionesIngles from "./traductions/en.json";
import "./styles/global.css";

function App() {
  const [idioma, establecerIdioma] = useState("es");

  const traducciones = idioma === "es"
    ? traduccionesEspanol
    : traduccionesIngles;

  const autor = traducciones.author;
  const anio = new Date().getFullYear();

  return (
    <>
      <Header
        autor={autor}
        traducciones={traducciones}
        idioma={idioma}
        alCambiarIdioma={establecerIdioma}
      />

      <main>
        <Welcome traducciones={traducciones} />

        <PublicationsContainer
          publicaciones={Publications}
          traducciones={traducciones}
        />
      </main>

      <Footer
        autor={autor}
        anio={anio}
        traducciones={traducciones}
      />
    </>
  );
}

export default App;
