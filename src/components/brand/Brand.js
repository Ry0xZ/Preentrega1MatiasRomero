import "./Brand.css";
import brand from "../brand/image/rxstore.png";

const Brand = () => {
  return (
    <div>
      <a href="#">
        <img src={brand} alt="Rx Store" title="Rx Store"></img>
      </a>
    </div>
  );
};

export default Brand;
