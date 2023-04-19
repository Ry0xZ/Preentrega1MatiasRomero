import "./App.css";
import NavBar from "./components/navbar/NavBar";
import ItemListContainer from "./components/itemlistcontainer/ItemListContainer";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Error404 from "./components/Error404";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
        <Route exact path='/' element={<ItemListContainer />} />
          <Route exact path={'/category/:id'} element={<ItemListContainer />} />
          <Route exact path={'/item/:id'} element={<ItemDetailContainer />} />
          <Route path={'*'} element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
