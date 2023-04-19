import "./CartWidget.css";
import cart from "../cartwidget/image/cart.png";

const Cart = () => {
  return (
    <li className="containerCart">
      <button id="cartButton">
        <img src={cart} alt= "carrito de compras"></img>
        <span id="cartCounter">0</span>
      </button>
    </li>
  );
};

export default Cart;
