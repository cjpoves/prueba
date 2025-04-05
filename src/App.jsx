
import { IslandAnimated } from "./components/IslandAnimated";
import { MiHistoria } from "./components/MiHistoria";
import { TecnologiasYProyectos } from "./components/TecnologiasYProyectos";
function App() {
  


  return (
    <>
    <nav className="barraNavgeacion">
      <a className="centerText" > Navegacion</a>
    </nav>
    <header>
      <div>
      <h1>Hola</h1>
      <h1>Hola</h1>
      <h1>Hola</h1>

      </div>
    

      <IslandAnimated/>
    </header>
    <TecnologiasYProyectos/>
      
      <MiHistoria/>
     
    </>
  );
}

export default App;
