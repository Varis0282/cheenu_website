"use client";

import { useEffect, useRef } from "react";
import createGlobe, { type Marker } from "cobe";

// India = the departure point; the rest are our four destinations.
const markers: Marker[] = [
  { location: [28.6139, 77.209], size: 0.11 }, // India (origin)
  { location: [21.0285, 105.8542], size: 0.08 }, // Vietnam
  { location: [-8.6705, 115.2126], size: 0.08 }, // Bali
  { location: [1.3521, 103.8198], size: 0.08 }, // Singapore
  { location: [25.2048, 55.2708], size: 0.08 }, // Dubai
];

export default function Globe({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerMovement = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let phi = 0;
    let width = canvas.offsetWidth;
    let lastWidth = 0;
    let raf = 0;

    const onResize = () => {
      width = canvas.offsetWidth;
    };
    window.addEventListener("resize", onResize, { passive: true });

    const globe = createGlobe(canvas, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.28,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 18000,
      mapBrightness: 5.2,
      baseColor: [0.16, 0.22, 0.4],
      markerColor: [0.96, 0.74, 0.18],
      glowColor: [0.13, 0.18, 0.34],
      markers,
    });

    // cobe v2 renders per `update()` call — drive our own animation loop.
    const render = () => {
      if (pointerInteracting.current === null) phi += 0.0035;
      const state: Parameters<typeof globe.update>[0] = {
        phi: phi + pointerMovement.current,
      };
      // Only push width/height when it actually changes (avoids reset churn).
      if (width !== lastWidth) {
        state.width = width * 2;
        state.height = width * 2;
        lastWidth = width;
      }
      globe.update(state);
      raf = requestAnimationFrame(render);
    };
    raf = requestAnimationFrame(render);

    // Fade in once painting begins.
    requestAnimationFrame(() => {
      canvas.style.opacity = "1";
    });

    return () => {
      cancelAnimationFrame(raf);
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      onPointerDown={(e) => {
        pointerInteracting.current = e.clientX - pointerMovement.current * 100;
        if (canvasRef.current) canvasRef.current.style.cursor = "grabbing";
      }}
      onPointerUp={() => {
        pointerInteracting.current = null;
        if (canvasRef.current) canvasRef.current.style.cursor = "grab";
      }}
      onPointerOut={() => {
        pointerInteracting.current = null;
        if (canvasRef.current) canvasRef.current.style.cursor = "grab";
      }}
      onPointerMove={(e) => {
        if (pointerInteracting.current !== null) {
          const delta = e.clientX - pointerInteracting.current;
          pointerMovement.current = delta / 100;
        }
      }}
      className={className}
      style={{
        width: "100%",
        height: "100%",
        aspectRatio: "1",
        cursor: "grab",
        contain: "layout paint size",
        opacity: 0,
        transition: "opacity 1s ease",
      }}
    />
  );
}
