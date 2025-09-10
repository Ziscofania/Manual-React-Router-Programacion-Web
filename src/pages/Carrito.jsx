import { Link } from "react-router-dom";

export default function Carrito() {
  return (
    <div>
      <h1>Carrito de Compras</h1>
      <p>Tienes 2 productos en tu carrito.</p>
      <Link to="/compra">
        <button>Proceder a la Compra</button>
      </Link>
    </div>
  );
}
