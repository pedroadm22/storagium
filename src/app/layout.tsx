// src/app/layout.tsx
import { Providers } from "./providers";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // O atributo abaixo avisa ao React/Next.js para ignorar as pequenas 
    // diferenças de atributos geradas pelo script do tema no primeiro carregamento
    <html lang="pt-BR" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}