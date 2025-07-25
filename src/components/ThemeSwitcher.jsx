    import React, { useState } from "react";
    import { useTheme } from "../context/ThemeContext";
    import { div } from "framer-motion/client";
    import { HexColorPicker } from "react-colorful";

    const ThemeSwitcher = () => {
    const { accentColor, setAccentColor } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="fixed bottom-8 right-8 z-50">
        <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-14 h-14 rounded-full bg-[var(--portfolio-accent)] shadow-lg flex items-center justify-center text-[var(--portfolio-text-on-accent)] text-2xl font-bold cursor-pointer hover:scale-110 transition-transform duration-200 focus:outline-none focus:ring-4 focus:ring-[var(--portfolio-accent)] focus:ring-opacity-50"
            aria-label="Theme Switcher"
            style={{
            backgroundColor: accentColor,
            color: document.documentElement.style.getPropertyValue(
                "--portfolio-text-on-accent"
            ),
            }}
        >
            🎨
        </button>

        {isOpen && (
            <div className="absolute bottom-16 right-0 p-4 bg-neutral-800 rounded-lg shadow-lg border border-neutral-700">
            <HexColorPicker color={accentColor} onChange={setAccentColor} />
            </div>
        )}
        </div>
    );
    };

    export default ThemeSwitcher;
