  import { useNavigate } from "react-router-dom";
  import "../styles/Carrito.css";

  export default function Carrito() {
    const navigate = useNavigate();

    const items = [
      {
        id: 1,
        name: "Polo de Piqué con Cuello Tejido",
        price: 119900,
        image: "https://arturocalle.vtexassets.com/arquivos/ids/781774-1200-1600?v=638926923986330000&width=1200&height=1600&aspect=true",
        color: "Amarillo Desierto",
        size: "S",
        quantity: 1,
      },
    ];

    const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const handleCheckout = () => {
      // Simulamos datos de la orden
      const orderData = {
        orderId: Math.floor(Math.random() * 1000000),
        date: new Date().toLocaleDateString("es-CO"),
        paymentMethod: "credit",
      };

      // Redirigir a la página de confirmación pasando el estado
      navigate("/FinalizarCompraTicket", { state: orderData });
    };

    return (
      <div className="cartWrapper">
        <h1 className="cartTitle">Carrito</h1>

        <div className="itemsList">
          {items.map((item) => (
            <div key={item.id} className="cartCard">
              <img src={item.image} alt={item.name} className="itemImage" />

              <div className="itemDetails">
                <h3 className="itemName">{item.name}</h3>
                <p className="itemMeta">
                  <span>Color: {item.color}</span> | <span>Talla: {item.size}</span>
                </p>

                <div className="itemControls">
                  <button className="qtyBtn">−</button>
                  <span className="itemQty">{item.quantity}</span>
                  <button className="qtyBtn">+</button>
                </div>
              </div>

              <div className="itemPriceWrapper">
                <span className="itemPrice">
                  ${item.price.toLocaleString("es-CO")}
                </span>
                <button className="removeBtn">🗑</button>
              </div>
            </div>
          ))}
        </div>

        <div className="cartSummary">
          <div className="summaryRow">
            <span>SUBTOTAL</span>
            <span>${subtotal.toLocaleString("es-CO")}</span>
          </div>
          <div className="summaryRow totalRow">
            <span>TOTAL</span>
            <span>${subtotal.toLocaleString("es-CO")}</span>
          </div>
        </div>

        <button className="checkoutBtn" onClick={handleCheckout}>
          Finaliza tu compra
        </button>
      </div>
    );
  }
