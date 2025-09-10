import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que recargue la página
    // Aquí podrías validar usuario y contraseña si quieres
    navigate("/"); // Redirige al Home
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">Iniciar Sesión</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Usuario" className="login-input" />
          <input type="password" placeholder="Contraseña" className="login-input" />
          <button type="submit" className="login-btn">Ingresar</button>
        </form>
      </div>
    </div>
  );
}
