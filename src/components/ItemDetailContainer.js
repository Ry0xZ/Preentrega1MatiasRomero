import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/Firebase";

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const queryDoc = doc(db, 'items', id)
    getDoc(queryDoc)
    .then(res=>setItem({id: res.id, ...res.data()}))
  }, [id]);

  return (
    <div className="container">
      <ItemDetail item={item} />
    </div>
  );
};

export default ItemDetailContainer;
