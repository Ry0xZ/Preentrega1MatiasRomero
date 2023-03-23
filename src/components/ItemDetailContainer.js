import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import stock from "./../stock/stock.json";

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const promesa = new Promise((resolve) => {
      setTimeout(() => {
        resolve(stock.find((item) => item.id === parseInt(id)));
      }, 500);
    }, []);
    console.log(item);
    promesa.then((data) => {
      setItem(data);
    });
  }, [id]);

  return (
    <div className="container">
      <ItemDetail item={item} />
    </div>
  );
};

export default ItemDetailContainer;
