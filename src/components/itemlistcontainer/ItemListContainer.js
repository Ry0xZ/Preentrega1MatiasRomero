import "./ItemListContainer.css";
import stock from "../../stock/stock.json";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList";

const ItemListContainer = () => {
  const [item, setItem] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const promesa = new Promise((resolve) => {
      setTimeout(() => {
        resolve(id ? stock.filter((item) => item.categoria === id) : stock);
      }, 1000);
    });

    promesa.then((data) => {
      setItem(data);
    });
  }, [id]);

  return (
    <>
      <div class="container d-flex justify-content-center h-100 aling-items-center">
        <ItemList item={item} />
      </div>
    </>
  );
};

export default ItemListContainer;
