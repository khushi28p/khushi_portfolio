import React, { useEffect, useRef } from "react";
import { Particle } from "jparticles";
import { useTheme } from "../context/ThemeContext";

const ParticleBackground = React.memo(function ParticleBackground() {
  const { accentColor } = useTheme(); 
  const containerRef = useRef(null);
  const instanceRef = useRef(null);
  const recreateTimeoutRef = useRef(null);

  useEffect(() => {
    const readColors = () => {
      const style = getComputedStyle(document.documentElement);
      return {
        particleColor: style.getPropertyValue("--particle-color").trim(),
        particleLineColor: style.getPropertyValue("--particle-line-color").trim(),
      };
    };

    const createParticleInstance = () => {
      if (instanceRef.current) {
        try {
          instanceRef.current.destroy?.();
        } catch (e) {
          console.error("Failed to destroy jparticles instance:", e);
        }
        instanceRef.current = null;
      }
      
      if (!containerRef.current) return;

      const { particleColor, particleLineColor } = readColors();

      instanceRef.current = new Particle(containerRef.current, {
        color: [particleColor],
        lineColor: particleLineColor,
        lineShape: "cube",
        range: 2000,
        proximity: 100,
        parallax: true,
        opacity: 0.3,
      });
    };

    if (recreateTimeoutRef.current) {
      clearTimeout(recreateTimeoutRef.current);
    }
    recreateTimeoutRef.current = setTimeout(createParticleInstance, 120);

    return () => {
      if (recreateTimeoutRef.current) {
        clearTimeout(recreateTimeoutRef.current);
      }
      if (instanceRef.current) {
        try {
          instanceRef.current.destroy?.();
        } catch (e) {
          console.error("Failed to destroy jparticles instance on cleanup:", e);
        }
        instanceRef.current = null;
      }
    };
  }, [accentColor]);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: -1,
      }}
      aria-hidden="true"
    />
  );
});

export default ParticleBackground;