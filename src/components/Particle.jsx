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
        particleLineColor: style
          .getPropertyValue("--particle-line-color")
          .trim(),
      };
    };

    const create = () => {
      const { particleColor, particleLineColor } = readColors();
      if (instanceRef.current) {
        try {
          instanceRef.current.destroy?.();
        } catch (e) {
        }
        instanceRef.current = null;
      }
      if (!containerRef.current) return;
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

    if (recreateTimeoutRef.current) clearTimeout(recreateTimeoutRef.current);
    recreateTimeoutRef.current = setTimeout(create, 120);

    return () => {
      if (recreateTimeoutRef.current) clearTimeout(recreateTimeoutRef.current);
    };
  }, [accentColor]);

  useEffect(() => {
    return () => {
      if (instanceRef.current) {
        try {
          instanceRef.current.destroy?.();
        } catch (e) {
        }
        instanceRef.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ width: "100%", height: "100%" }}
      aria-hidden="true"
    />
  );
});

export default ParticleBackground;