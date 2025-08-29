import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext(null);

function hexToRgb(hex) {
  const bigInt = parseInt(hex.slice(1), 16);
  const r = (bigInt >> 16) & 255;
  const g = (bigInt >> 8) & 255;
  const b = bigInt & 255;

  return `${r}, ${g}, ${b}`;
}

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};

export const ThemeProvider = ({ children }) => {
  const [accentColor, setAccentColor] = useState(() => {
    try {
      const storedColor = localStorage.getItem("portfolioAccentColor");
      return storedColor ? storedColor : "#FFD401";
    } catch (error) {
      console.error("Failed to load accent color from localStorage", error);
      return "#FFD401";
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("portfolioAccentColor", accentColor);
    } catch (error) {
      console.error("Failed to save accent color to localStorage", error);
    }

    document.documentElement.style.setProperty(
      "--portfolio-accent",
      accentColor
    );
    document.documentElement.style.setProperty(
      "--portfolio-accent-rgb",
      hexToRgb(accentColor)
    );

    const r = parseInt(accentColor.slice(1, 3), 16);
    const g = parseInt(accentColor.slice(3, 5), 16);
    const b = parseInt(accentColor.slice(5, 7), 16);

    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    const textColorOnAccent = brightness > 180 ? "#000000" : "#FFFFFF";

    document.documentElement.style.setProperty(
      "--portfolio-text-on-accent",
      textColorOnAccent
    );
    
    let calculatedBgColor;
    let calculatedTextColor;
    let calculatedCardBgPrimary;
    let calculatedSubtleCardBg;
    let calculatedSecondaryText;
    let calculatedTertiaryText;
    let calculatedInputBg;
    let calculatedInputBorder;
    let calculatedPlaceholderText;
    let calculatedLineColor;
    let calculatedBgPrimaryRgb;
    let calculatedTextPrimaryRgb;
    let calculatedParticleColor;
    let calculatedParticleLineColor;

    if (brightness < 120) {
      calculatedBgColor = "#F3F4F6";
      calculatedTextColor = "#1F2937";
      calculatedCardBgPrimary = "#FFFFFF";
      calculatedSubtleCardBg = "#E5E7EB";
      calculatedSecondaryText = "#4B5563";
      calculatedTertiaryText = "#374151";
      calculatedInputBg = "#E5E7EB";
      calculatedInputBorder = "#D1D5DB";
      calculatedPlaceholderText = "#9CA3AF";
      calculatedLineColor = "#D1D5DB";
      calculatedBgPrimaryRgb = "243, 244, 246";
      calculatedTextPrimaryRgb = "31, 41, 55";
      calculatedParticleColor = "#000000";
      calculatedParticleLineColor = "#000000";
    } else {
      calculatedBgColor = "#000000";
      calculatedTextColor = "#FFFFFF";
      calculatedCardBgPrimary = "#1F2937";
      calculatedSubtleCardBg = "#111827";
      calculatedSecondaryText = "#9CA3AF";
      calculatedTertiaryText = "#D1D5DB";
      calculatedInputBg = "#374151";
      calculatedInputBorder = "#4B5563";
      calculatedPlaceholderText = "#6B7280";
      calculatedLineColor = "#4B5563";
      calculatedBgPrimaryRgb = "0, 0, 0";
      calculatedTextPrimaryRgb = "255, 255, 255";
      calculatedParticleColor = "#FFFFFF";
      calculatedParticleLineColor = "#FFFFFF";
    }

    document.documentElement.style.setProperty(
      "--bg-primary",
      calculatedBgColor
    );
    document.documentElement.style.setProperty(
      "--text-primary",
      calculatedTextColor
    );
    document.documentElement.style.setProperty(
      "--card-bg-primary",
      calculatedCardBgPrimary
    );
    document.documentElement.style.setProperty(
      "--subtle-card-bg",
      calculatedSubtleCardBg
    );
    document.documentElement.style.setProperty(
      "--secondary-text",
      calculatedSecondaryText
    );
    document.documentElement.style.setProperty(
      "--tertiary-text",
      calculatedTertiaryText
    );
    document.documentElement.style.setProperty("--input-bg", calculatedInputBg);
    document.documentElement.style.setProperty(
      "--input-border",
      calculatedInputBorder
    );
    document.documentElement.style.setProperty(
      "--placeholder-text",
      calculatedPlaceholderText
    );
    document.documentElement.style.setProperty(
      "--line-color",
      calculatedLineColor
    );
    document.documentElement.style.setProperty(
      "--bg-primary-rgb",
      calculatedBgPrimaryRgb
    );
    document.documentElement.style.setProperty(
      "--text-primary-rgb",
      calculatedTextPrimaryRgb
    );

    document.documentElement.style.setProperty(
      "--particle-color",
      calculatedParticleColor
    );
    document.documentElement.style.setProperty(
      "--particle-line-color",
      calculatedParticleLineColor
    );
  }, [accentColor]);

  const value = { accentColor, setAccentColor };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
