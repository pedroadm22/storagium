// app/login/page.tsx
import { LoginCard } from "@/components/login/login-card";
import { BackgroundCircuits } from "@/components/login/background-circuits";
import { ThemeToggle } from "@/components/theme-toggle"; // Opcional, para testar a troca de temas

export default function LoginPage() {
  return (
    <main className="relative flex min-h-screen w-full items-center justify-center bg-slate-50 dark:bg-zinc-950 px-4 transition-colors duration-300">
      {/* Linhas de circuito do fundo */}
      <BackgroundCircuits />
      {/* O Card Central */}
      <LoginCard />
    </main>
  );
}