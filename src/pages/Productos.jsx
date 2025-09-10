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
    { id: 7, nombre: "Tenis Nike para Hombre", precio: 300000, imagen: "https://i.pinimg.com/originals/f6/4f/37/f64f37acf21e27867009bdaa06c8b0ac.jpg" },
    { id: 8, nombre: "Tenis Nike para Mujer", precio: 299000, imagen: "https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwa3c9e3c1/products/NIDM9538-600/NIDM9538-600-6.JPG" },
    { id: 9, nombre: "Gorra Para Hombre", precio: 50000, imagen: "https://media.gq.com.mx/photos/68bf486a3442a5e77f0d196e/master/w_1600%2Cc_limit/gorras-para-verte-como-un-experto-en-estilo-a-cualquier-edad-otono-2025-adidas-y-3.png" },
    { id: 10, nombre: "Gorra Para Mujer", precio: 50000, imagen: "https://i.pinimg.com/originals/5c/d6/7f/5cd67f158ae1e55ac749571b0d32e66f.jpg" },
    { id: 11, nombre: "Reloj Digital Hombre", precio: 35000, imagen: "https://img.pccomponentes.com/articles/1058/10581449/1695-apple-watch-se-gps-2a-generacion-44mm-aluminio-midnight-con-correa-sport-negra.jpg" },
    { id: 12, nombre: "Reloj Digital Dama", precio: 35000, imagen: "https://ak-asset.jarir.com/akeneo-prod/asset/m1/delta/558304.jpg" },
    { id: 13, nombre: "Collar", precio: 850000, imagen: "https://a.1stdibscdn.com/1250-carats-diamonds-cuban-link-necklace-chain-14-karats-rose-gold-for-sale/j_16571/j_144311221641840649224/j_14431122_1641840649415_bg_processed.jpg" },
    { id: 14, nombre: "Collar Dama", precio: 500000, imagen: "https://cdn.caratlane.com/media/catalog/product/U/T/UT00793-1Y0000_6_lar.jpg" },
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
