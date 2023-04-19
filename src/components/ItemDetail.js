import ItemCount from "../components/ItemCount";

const ItemDetail = ({ item }) => {
  return (
    <div>
    <div className="row m-5" id="itemdetail">
      <div className="card bg-warning">
      <div className="p-5 col-md-4 offset-md-4">
        <img src={item.image} className="img-fluid img-product" alt={item.name} />
        <h2 className="text-danger">{item.name}</h2>
        <hr/>
        <h3>descripcion:</h3>
        <p>{item.description}</p>
        <p>Precio: ${item.price} </p>
      </div>
      <div>
        <ItemCount stockItems={10} item={item} />
      </div>
      </div>
    </div>
    </div>
  );
};

export default ItemDetail;
