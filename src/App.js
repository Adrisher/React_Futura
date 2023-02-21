import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./components/Inicio";
import Pdf from "./components/Pdf";
import Personaje from "./components/Personaje";

function App() {
  return (
    <div className="contenedor">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Inicio></Inicio>}> </Route>
          <Route path='/personaje/:id' element={<Personaje></Personaje>}> </Route>
          <Route path='/pdf' element={<Pdf></Pdf>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
