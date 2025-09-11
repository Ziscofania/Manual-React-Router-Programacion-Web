import "../styles/Home.css";
import Background from "../components/Background";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate("/productos"); // Redirige a la página de productos
  };

  return (
    <div className="home-container">
      <Background />
      <div className="hero-content">
        <h1>Bienvenido a la tienda de ropa</h1>
        <p>Explora los productos más recientes</p>
        <button className="explore-btn" onClick={handleExplore}>
          Explorar productos
        </button>
      </div>
    </div>
  );
}
