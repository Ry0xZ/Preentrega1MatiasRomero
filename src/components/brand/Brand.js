import "./Brand.css";
import brand from "../brand/image/rxstore.png";
import { Link } from "react-router-dom";

const Brand = () => {
  return (
    <div>
      <Link to="/">
        <img src={brand} alt="logo de la tienda Rx Store" title="Rx Store" />
      </Link>
    </div>
  );
};

export default Brand;
