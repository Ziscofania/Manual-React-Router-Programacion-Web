import { Routes, Route, Link } from "react-router-dom";
import { FaHome, FaUser, FaBoxOpen, FaShoppingCart } from "react-icons/fa";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Productos from "./pages/Productos";
import Carrito from "./pages/Carrito";
import Compra from "./pages/Compra";
import ReceiptConfirmation from "./pages/FinalizarCompraTicket";
import NotFound from "./pages/NotFound"; // ✅ Importar NotFound
import "./styles/global.css";

function App() {
  return (
    <div>
      {/* Navbar minimalista */}
      <nav className="navbar">
        <Link to="/" className="nav-item" title="Home">
          <FaHome />
        </Link>
        <Link to="/login" className="nav-item" title="Login">
          <FaUser />
        </Link>
        <Link to="/productos" className="nav-item" title="Productos">
          <FaBoxOpen />
        </Link>
        <Link to="/carrito" className="nav-item" title="Carrito">
          <FaShoppingCart />
        </Link>
      </nav>

      {/* Rutas */}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/compra/:id" element={<Compra />} />
          <Route path="/FinalizarCompraTicket" element={<ReceiptConfirmation />} />
          <Route path="*" element={<NotFound />} /> {/* ✅ Ruta 404 */}
        </Routes>
      </main>
    </div>
  );
}

export default App;
