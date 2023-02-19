//Importe la libreria para la rutas que voy a utilizar 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DocuPdf from "./components/DocuPdf";
import Inicio from "./components/Inicio";
import Personaje from "./components/Personaje";


//Coloco el componente browserRouter como padre de todo
//Dentro un Routes y por cada directorio que vamos a necesitar ponemos route 
// el primero devuelva los personajes y el otro la imagen
// En la ruta personaje y con el id nos devuelve un personaje
function App() {
  return (
    <div className="contenedor">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Inicio></Inicio>}> </Route>
          <Route path='/personaje/:id' element={<Personaje></Personaje>}> </Route>
          <Route exact path="/docupdf" component={DocuPdf} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
