import { useNavigate } from "react-router-dom";
import "../styles/NotFound.css";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="notfound-container">
      <h1 className="notfound-title">404</h1>
      <p className="notfound-message">Oops... Página no encontrada</p>
      <button className="notfound-btn" onClick={() => navigate("/")}>
        Volver al inicio
      </button>
    </div>
  );
}
