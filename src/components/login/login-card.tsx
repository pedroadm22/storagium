// components/login/login-card.tsx
import { LoginHeader } from "./login-header";
import { LoginForm } from "./login-form";

export function LoginCard() {
  return (
    <div className="w-full max-w-md rounded-2xl border border-slate-100 bg-white p-8 shadow-xl shadow-slate-100/50 space-y-6">
      {/* Componente do topo */}
      <LoginHeader />
      
      {/* Componente do formulário */}
      <LoginForm />
      
      <div className="text-center text-xs text-slate-400">
        Storagium &copy; {new Date().getFullYear()} - Todos os direitos reservados.
      </div>
    </div>
  );
}