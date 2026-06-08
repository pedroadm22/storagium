// src/components/login/login-form.tsx
"use client";

import { useState, SubmitEvent } from "react";
import { LoginSocial } from "./login-social";
import { FaEnvelope, FaLock } from "react-icons/fa"; // Ícones para os campos idênticos à foto

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event: SubmitEvent) {
    event.preventDefault();
    console.log("Tentando logar com:", { email, password });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Input de E-mail */}
      <div className="relative flex items-center">
        <FaEnvelope className="absolute left-4 text-muted-foreground text-sm pointer-events-none" />
        <input
          type="email"
          placeholder="Email address"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          /* bg-secondary/50 dá o tom cinza perfeito e discreto que você pediu */
          className="w-full rounded-xl border border-border bg-secondary/50 pl-11 pr-4 py-3 text-sm text-foreground placeholder-muted-foreground focus:border-primary/80 focus:bg-card focus:outline-none transition-all duration-200"
        />
      </div>

      {/* Input de Senha */}
      <div className="relative flex items-center">
        <FaLock className="absolute left-4 text-muted-foreground text-sm pointer-events-none" />
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-xl border border-border bg-secondary/50 pl-11 pr-4 py-3 text-sm text-foreground placeholder-muted-foreground focus:border-primary/80 focus:bg-card focus:outline-none transition-all duration-200"
        />
      </div>

      {/* Botão de Login */}
      <button
        type="submit"
        className="w-full rounded-xl bg-primary py-3 text-sm font-medium text-primary-foreground hover:opacity-95 shadow-lg shadow-primary/10 active:scale-[0.99] transition-all duration-200 cursor-pointer"
      >
        Login
      </button>

      {/* Divisor OR */}
      <div className="relative flex py-2 items-center justify-center text-xs uppercase">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-border"></div>
        </div>
        <span className="relative bg-card px-3 text-muted-foreground">OR</span>
      </div>

      <LoginSocial />
    </form>
  );
}
