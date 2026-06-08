"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    // Alterado o defaultTheme de "light" ou "system" para "dark"
    <NextThemesProvider 
      attribute="class" 
      defaultTheme="dark" 
      enableSystem={false} // Evita que o sistema operacional do usuário mude para o light contra a vontade do app
    >
      {children}
    </NextThemesProvider>
  );
}