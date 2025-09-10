import { useEffect, useRef } from "react";
import "../styles/Background.css";

export default function Background() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];

    // Crear partículas
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: 2,
        dx: (Math.random() - 0.5) * 1.5,
        dy: (Math.random() - 0.5) * 1.5,
      });
    }

    let mouse = { x: null, y: null };

    // Detectar movimiento del mouse
    window.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = "#fff";
        ctx.fill();

        // Movimiento
        p.x += p.dx;
        p.y += p.dy;

        // Rebote en bordes
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

        // Atracción al mouse
        const dist = Math.hypot(mouse.x - p.x, mouse.y - p.y);
        if (dist < 100) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = "rgba(255,255,255,0.3)";
          ctx.stroke();
        }
      });

      requestAnimationFrame(animate);
    }

    animate();

    // Ajustar al tamaño de la ventana
    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
  }, []);

  return <canvas ref={canvasRef} className="background-canvas"></canvas>;
}
