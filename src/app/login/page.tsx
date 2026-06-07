// app/login/page.tsx
import { LoginCard } from "@/components/login/login-card";

export default function LoginPage() {
  return (
    // Fundo da tela inteira (cinza claro para destacar o card branco)
    <main className="flex min-h-screen w-full items-center justify-center bg-slate-50 px-4">
      {/* O card que concentra todos os pedaços do login */}
      <LoginCard />
    </main>
  );
}