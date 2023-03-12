import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navbar/NavBar";
import ItemListContainer from "./components/itemlistcontainer/ItemListContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="No hay productos en Stock" />
    </div>
  );
}

export default App;
