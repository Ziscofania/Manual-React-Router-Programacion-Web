import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import "../styles/Compra.css";

const productos = [
  { 
    id: 1, 
    nombre: "Zapatos Sport en Cuero para Hombre", 
    precio: 199900, 
    descripcion: "Zapatos de cuero elegantes y cómodos para cualquier ocasión.", 
    detalles: "Material: Cuero genuino. Suela antideslizante. Color: Negro.",
    recomendaciones: "Limpiar con paño húmedo. No exponer al sol por largos periodos.",
    imagen: "https://arturocalle.vtexassets.com/arquivos/ids/641774-1200-1600?v=638533179975100000&width=1200&height=1600&aspect=true" 
  },
  { 
    id: 2, 
    nombre: "Camisa Unicolor Manga Corta para Hombre", 
    precio: 149900, 
    descripcion: "Camisa fresca y cómoda ideal para climas cálidos.", 
    detalles: "Material: Algodón 100%. Corte regular fit. Manga corta.",
    recomendaciones: "Lavar a máquina con agua fría. No usar blanqueador.",
    imagen: "https://arturocalle.vtexassets.com/arquivos/ids/775475-1200-1600?v=638919268733670000&width=1200&height=1600&aspect=true" 
  },
  { 
    id: 3, 
    nombre: "Pantalón Unicolor Regular Fit para Hombre", 
    precio: 99900, 
    descripcion: "Pantalón versátil ideal para uso casual o formal.", 
    detalles: "Material: Algodón y poliéster. Corte regular fit. Bolsillos laterales.",
    recomendaciones: "Lavar a máquina en ciclo suave. Planchar a baja temperatura.",
    imagen: "https://arturocalle.vtexassets.com/arquivos/ids/660823-1200-1600?v=638630648356900000&width=1200&height=1600&aspect=true" 
  },
  { 
    id: 4, 
    nombre: "Camisa de Cuadros para Hombre", 
    precio: 89900, 
    descripcion: "Camisa casual con diseño de cuadros moderna y ligera.", 
    detalles: "Material: Algodón. Corte clásico. Manga larga.",
    recomendaciones: "Lavar a máquina con colores similares. Secar a la sombra.",
    imagen: "https://arturocalle.vtexassets.com/arquivos/ids/692908-1200-1600?v=638748101565170000&width=1200&height=1600&aspect=true" 
  },
  { 
    id: 5, 
    nombre: "Tenis para Hombre", 
    precio: 259900, 
    descripcion: "Tenis deportivos cómodos y resistentes para el uso diario.", 
    detalles: "Material: Sintético y malla transpirable. Suela antideslizante.",
    recomendaciones: "Limpiar con un cepillo suave y paño húmedo. No usar lavadora.",
    imagen: "https://arturocalle.vtexassets.com/arquivos/ids/752371-1200-1600?v=638859621221070000&width=1200&height=1600&aspect=true" 
  },
  { 
    id: 6, 
    nombre: "Polo Unicolor Básica para Hombre", 
    precio: 129900, 
    descripcion: "Polo básica de algodón perfecta para cualquier ocasión.", 
    detalles: "Material: Algodón 100%. Cuello tipo polo. Manga corta.",
    recomendaciones: "Lavar a máquina en agua fría. No usar blanqueador.",
    imagen: "https://arturocalle.vtexassets.com/arquivos/ids/762316-1200-1600?v=638888098434730000&width=1200&height=1600&aspect=true" 
  },
];

export default function Compra() {
  const { id } = useParams();
  const navigate = useNavigate();
  const producto = productos.find((p) => p.id === parseInt(id));

  const [open, setOpen] = useState(null);

  if (!producto) return <h2>Producto no encontrado</h2>;

  const toggleSection = (section) => {
    setOpen(open === section ? null : section);
  };

  const handleAddToCart = () => {
    // 🔑 Aquí en el futuro se puede integrar el contexto del carrito
    navigate("/carrito"); 
  };

  return (
    <div className="compraContainer">
      <div className="compraCard">
        <div className="compraImgWrapper">
          <img src={producto.imagen} alt={producto.nombre} className="compraImg" />
        </div>

        <div className="compraInfo">
          <h1 className="compraNombre">{producto.nombre}</h1>
          <p className="compraPrecio">${producto.precio.toLocaleString("es-CO")}</p>

          {/* ✅ Botón que redirige al carrito */}
          <button className="buyBtn" onClick={handleAddToCart}>
            Agregar al carrito
          </button>

          {/* 🔽 Secciones desplegables con iconos */}
          <div className="accordion">
            <div className="accordionItem" onClick={() => toggleSection("descripcion")}>
              <h3>
                Descripción {open === "descripcion" ? <FaMinus /> : <FaPlus />}
              </h3>
              {open === "descripcion" && <p>{producto.descripcion}</p>}
            </div>

            <div className="accordionItem" onClick={() => toggleSection("detalles")}>
              <h3>
                Detalles del producto {open === "detalles" ? <FaMinus /> : <FaPlus />}
              </h3>
              {open === "detalles" && <p>{producto.detalles}</p>}
            </div>

            <div className="accordionItem" onClick={() => toggleSection("recomendaciones")}>
              <h3>
                Recomendaciones de cuidado {open === "recomendaciones" ? <FaMinus /> : <FaPlus />}
              </h3>
              {open === "recomendaciones" && <p>{producto.recomendaciones}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
