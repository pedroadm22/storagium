// components/login/login-form.tsx
"use client";

import { useState, FormEvent } from "react";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setIsLoading(true);

    // Aqui entrará a lógica de autenticação futuramente (NextAuth, JWT, etc.)
    console.log("Tentando logar com:", { email, password });

    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-1">
        <label htmlFor="email" className="text-xs font-medium text-slate-700">
          E-mail institucional
        </label>
        <input
          id="email"
          type="email"
          placeholder="nome@empresa.com"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
          disabled={isLoading}
        />
      </div>

      <div className="space-y-1">
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="text-xs font-medium text-slate-700">
            Senha
          </label>
          <a href="#" className="text-xs text-blue-600 hover:underline">
            Esqueceu a senha?
          </a>
        </div>
        <input
          id="password"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
          disabled={isLoading}
        />
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full rounded-lg bg-slate-900 py-2.5 text-sm font-medium text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900/20 active:bg-slate-950 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? "Autenticando..." : "Entrar no sistema"}
      </button>
    </form>
  );
}