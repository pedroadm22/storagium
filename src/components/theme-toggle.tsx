// src/components/theme-toggle.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Garante que o componente só renderize os ícones após o cliente carregar 
  // (Evita erros de Hydration no Next.js)
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      type="button"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-4 text-xs font-medium text-foreground shadow-sm hover:opacity-90 active:scale-[0.98] transition-all duration-200"
    >
      {theme === "dark" ? (
        <>
          {/* Ícone Sol - Cores adaptadas ao novo Azul Neon/Elétrico do seu Dark mode */}
          <FaSun className="text-primary text-sm filter drop-shadow-[0_0_6px_var(--color-primary)]" />
        </>
      ) : (
        <>
          {/* Ícone Lua - Se adapta ao azul profissional do seu Light mode */}
          <FaMoon className="text-primary text-sm" />
        </>
      )}
    </button>
  );
}