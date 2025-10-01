import React, { useRef, useEffect } from "react";

export default function StarsCanvas({ count = 200 }) {
  const canvasRef = useRef(null);
  const starsRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    function initStars() {
      const stars = [];
      if (count === 0){
        count = w*h/5000; // density of stars
      };


      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r: Math.random() * 1.5 + 0.3,
          baseAlpha: Math.random() * 0.8 + 0.2,
          speed: Math.random() * 5 * 0.001 ,
          phase: Math.random() * Math.PI * 2,
        });
      }
      starsRef.current = stars;
    }

    function onResize() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      initStars();
    }

    function draw(t) {
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = "#030317";
      ctx.fillRect(0, 0, w, h);

      const stars = starsRef.current;
      if (!stars) return;
      for (const s of stars) {
        const alpha = Math.max(
          0,
          Math.min(1, s.baseAlpha + Math.sin(t * s.speed + s.phase) * 0.6)
        );
        ctx.beginPath();
        ctx.globalAlpha = alpha;
        ctx.fillStyle = "#fff";
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      rafRef.current = requestAnimationFrame(draw);
    }

    initStars();
    rafRef.current = requestAnimationFrame(draw);

    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [count]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -10,
        pointerEvents: "none",
        display: "block",
      }}
    />
  );
}