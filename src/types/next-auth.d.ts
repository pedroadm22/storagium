// src/types/next-auth.d.ts
import NextAuth, { type DefaultSession } from "next-auth";

declare module "next-auth" {
  // Estende o objeto de Usuário retornado pelo banco
  interface User {
    id?: string;
    role?: string; // Adiciona a Role no modelo de usuário
  }

  // Estende o objeto de Sessão que o Next.js lê no frontend/backend
  interface Session {
    user: {
      id: string;
      role: string; // Garante que a Role apareça no autocomplete da Session
    } & DefaultSession["user"];
  }
}