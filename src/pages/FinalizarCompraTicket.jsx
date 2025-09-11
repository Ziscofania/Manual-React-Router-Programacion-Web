import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import "../styles/ReceiptCard.css";

export default function FinalizarCompraTicket() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const audioRef = useRef(null);
  const [flipped, setFlipped] = useState(false);

  // redirige si no hay state (efecto seguro)
  useEffect(() => {
    if (!state) {
      navigate("/carrito");
    }
  }, [state, navigate]);

  if (!state) return null;

  const {
    orderId,
    date,
    paymentMethod,
    productImage,
    productDesc,
    productPrice,
    productId, // opcional, si lo mandas desde el carrito
  } = state;

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {});
    }
  };

  const toggleFlip = () => {
    setFlipped((s) => !s);
    playSound();
  };

  const handleViewProduct = (e) => {
    e.stopPropagation();
    if (productId) navigate(`/compra/${productId}`);
    else navigate("/productos");
  };

  const handleGoHome = (e) => {
    e.stopPropagation();
    navigate("/");
  };

  const formattedPrice = productPrice
    ? `$${Number(productPrice).toLocaleString("es-CO")}`
    : null;

  return (
    <div className="page-container">
      <div className="card-container">
        {/* wrapper que recibe la rotación */}
        <div
          className={`receipt-card ${flipped ? "flipped" : ""}`}
          onClick={toggleFlip}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              toggleFlip();
            }
          }}
        >
          {/* inner animado por framer (no compite con la rotación del wrapper) */}
          <motion.div
            className="card-inner"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            {/* FRONTAL */}
            <div className="card-face card-front">
              <div className="card-top">
                <div className="card-chip" aria-hidden="true" />
                <div className="card-icon" aria-hidden="true">
                  <CheckCircle size={28} />
                </div>
              </div>

              <div className="card-center">
                <h2 className="card-title">COMPRA EXITOSA</h2>
                <p className="order-id">#{orderId}</p>

                <div className="info-row">
                  <div className="info">
                    <p className="label">Fecha</p>
                    <p className="value">{date}</p>
                  </div>
                  <div className="info">
                    <p className="label">Pago</p>
                    <p className="value">
                      {paymentMethod === "credit"
                        ? "Tarjeta de Crédito 💳"
                        : paymentMethod === "debit"
                        ? "Tarjeta Débito 🏦"
                        : "Otro"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="card-footer small-hint">Haz click para ver el producto</div>
            </div>

            {/* TRASERA */}
            <div className="card-face card-back">
              {productImage ? (
                <img
                  src={productImage}
                  alt={productDesc || "Producto"}
                  className="product-img large"
                />
              ) : (
                <div className="no-image">Sin imagen</div>
              )}

              <div className="back-info">
                <p className="product-desc">
                  {productDesc || "Descripción no disponible"}
                </p>
                <p className="product-price">
                  {formattedPrice || "Precio no disponible"}
                </p>
              </div>

              <div className="back-actions">
                <button
                  className="btn btn-primary"
                  onClick={handleViewProduct}
                  type="button"
                >
                  Ver producto
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={handleGoHome}
                  type="button"
                >
                  Volver a la tienda
                </button>
              </div>

              <div className="card-footer small-hint">Haz click para volver</div>
            </div>
          </motion.div>
        </div>
      </div>

      <audio ref={audioRef} src="/sounds/flip.mp3" preload="auto" />
    </div>
  );
}
