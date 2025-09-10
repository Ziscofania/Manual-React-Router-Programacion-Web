import { Link } from "react-router-dom";
import "../styles/Productos.css";

export default function Productos() {
  const productos = [
    { id: 1, nombre: "Zapatos Sport en Cuero para Hombre", precio: 199900, imagen: "https://arturocalle.vtexassets.com/arquivos/ids/641774-1200-1600?v=638533179975100000&width=1200&height=1600&aspect=true" },
    { id: 2, nombre: "Camisa Unicolor Manga Corta para Hombre", precio: 149900, imagen: "https://arturocalle.vtexassets.com/arquivos/ids/775475-1200-1600?v=638919268733670000&width=1200&height=1600&aspect=true" },
    { id: 3, nombre: "Pantalón Unicolor Regular Fit para Hombre", precio: 99900, imagen: "https://arturocalle.vtexassets.com/arquivos/ids/660823-1200-1600?v=638630648356900000&width=1200&height=1600&aspect=true" },
    { id: 4, nombre: "Camisa de Cuadros para Hombre", precio: 89900, imagen: "https://arturocalle.vtexassets.com/arquivos/ids/692908-1200-1600?v=638748101565170000&width=1200&height=1600&aspect=true" },
    { id: 5, nombre: "Tenis para Hombre", precio: 259900, imagen: "https://arturocalle.vtexassets.com/arquivos/ids/752371-1200-1600?v=638859621221070000&width=1200&height=1600&aspect=true" },
    { id: 6, nombre: "Polo Unicolor Básica para Hombre", precio: 129900, imagen: "https://arturocalle.vtexassets.com/arquivos/ids/762316-1200-1600?v=638888098434730000&width=1200&height=1600&aspect=true" },
    { id: 6, nombre: "Polo Unicolor Básica para Hombre", precio: 129900, imagen: "https://arturocalle.vtexassets.com/arquivos/ids/762316-1200-1600?v=638888098434730000&width=1200&height=1600&aspect=true" },
  ];
  

  return (
    <div className="productosContainer">
      <h1 className="productosTitle">Productos</h1>
      <div className="productosGrid">
        {productos.map((p) => (
          <Link to={`/compra/${p.id}`} key={p.id} className="productoCard">
            <img src={p.imagen} alt={p.nombre} className="productoImg" />
            <h3 className="productoNombre">{p.nombre}</h3>
            <p className="productoPrecio">${p.precio.toLocaleString("es-CO")}</p>
            <button className="addBtn">Ver más</button>
          </Link>
        ))}
      </div>
    </div>
  );
}
