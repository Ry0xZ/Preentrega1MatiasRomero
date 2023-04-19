import { Link } from "react-router-dom";
import "./item.css"

const Item = ({ item }) => {
  return (
    <Link to={"/item/" + item.id} className="text-decoration-none">
      <div className="card h-100 ">
        <div className=" card-body container-fluid bg-warning ">
          <img src={item.image} className="img-product img-card-top img-thumbnail " alt={item.name} />
          <div className="card-body text-center">
            <p className="card-title ">{item.name} </p>
          </div>
          <p className="card-text text-secundary">{item.category}</p>
          <p className=" card-text text-secundary ">Precio: ${item.price}</p>
          <button type="button" className="btn btn-secondary">Mas info</button>
        </div>
      </div>
    </Link>
  );
};

export default Item;
