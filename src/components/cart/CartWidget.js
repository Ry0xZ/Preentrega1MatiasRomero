import "./CartWidget.css";
import cart from "../cart/img/cart.png";

const Cart = () => {
  return (
    <li class="containerCart">
      <button id="botonCarrito">
        <img src={cart}></img>
        <span id="contadorCarrito">0</span>
      </button>
    </li>
  );
};

export default Cart;
