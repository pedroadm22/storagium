// src/components/login/login-card.tsx
import { LoginForm } from "./login-form";
import { Container } from "lucide-react"; 
import { ThemeToggle } from "@/components/theme-toggle";

export function LoginCard() {
  return (
    <div className="w-full max-w-[400px] z-10 rounded-2xl border border-border bg-card/80 p-8 shadow-2xl backdrop-blur-md space-y-6">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      {/* Cabeçalho com Ícone Neon Dinâmico */}
      <div className="flex flex-col items-center space-y-3 text-center">
        
        {/* Container do ícone com brilho suave baseado na cor primária */}
        <div className="relative flex h-14 w-14 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 shadow-[0_0_20px_rgba(var(--color-primary),0.2)]">
          {/* Efeito Neon adaptável ao Tema do Tailwind v4 */}
          <Container size={28} 
            className="h-7 w-7 text-primary filter drop-shadow-[0_0_8px_var(--color-primary)]" 
            strokeWidth={1.5}
          />
        </div>
        
        <h1 className="text-2xl font-medium tracking-tight text-foreground">
          Welcome Back
        </h1>
        <p className="text-xs text-muted-foreground">
          Don't have an account yet? <a href="#" className="text-primary hover:underline">Sign up</a>
        </p>
      </div>

      {/* Formulário Interno */}
      <LoginForm />
    </div>
  );
}