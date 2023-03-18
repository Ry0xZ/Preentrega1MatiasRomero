import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navbar/NavBar";
import ItemListContainer from "./components/itemlistcontainer/ItemListContainer";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Procesadores from './components/Procesadores'
import MemoriaRam from './components/MemoriaRam'
import PlacasDeVideo from './components/PlacasDeVideo'
import Motherboards from './components/Motherboards'
import Fuentes from './components/Fuentes'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/procesador" exact element={<Procesadores/>}/>
        <Route path="/memoria" exact element={<MemoriaRam/>}/>
        <Route path="/placa" exact element={<PlacasDeVideo/>}/>
        <Route path="/motherboard" exact element={<Motherboards/>}/>
        <Route path="/fuente" exact element={<Fuentes/>}/>
      </Routes>
      </BrowserRouter>
      <ItemListContainer greeting="No hay productos en Stock" />
    </div>
  );
}

export default App;
