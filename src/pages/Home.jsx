import "../styles/Home.css";
import Background from "../components/Background";

export default function Home() {
  return (
    <div className="home-container">
      <Background />
      <div className="hero-content">
        <h1>Bienvenido a la tienda de ropa</h1>
        <p>Explora los productos más recientes</p>
        <button className="explore-btn">Explorar productos</button>
      </div>
    </div>
  );
}
