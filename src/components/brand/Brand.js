import "./Brand.css";
import brand from "../brand/image/rxstore.png";

const Brand = () => {
  return (
    <div>
      <a href="#">
        <img src={brand} alt="logo de la tienda Rx Store" title="Rx Store"/>
      </a>
    </div>
  );
};

export default Brand;
