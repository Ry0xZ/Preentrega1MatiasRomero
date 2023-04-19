import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import ItemList from "../ItemList";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/Firebase";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [item, setItem] = useState([]);
  const {id} = useParams()

  useEffect(() => {
    const queryCollection = collection (db, 'items');
    if(id){
      const queryFilter = query(queryCollection, where ('category', '==', id))
      getDocs(queryFilter)
      .then(res=>setItem(res.docs.map(i=>({id: i.id, ...i.data()}))))
    }else {
      getDocs(queryCollection)
      .then(res=>setItem(res.docs.map(i=>({id: i.id, ...i.data()}))))
    }
  }, [id]);

  return (
    <>
      <div className="container d-flex justify-content-center h-100 aling-items-center">
        <ItemList item={item} />
      </div>
    </>
  );
};

export default ItemListContainer;
