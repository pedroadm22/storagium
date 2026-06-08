import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/database/prisma"; // Caminho para o seu arquivo prisma.ts

export const { handlers, auth, signIn, signOut } = NextAuth({
  // 1. Conecta o sistema de login ao seu banco de dados do Neon
  adapter: PrismaAdapter(prisma),
  secret: process.env.AUTH_SECRET,
  // 2. Configura as opções de entrada (Provedores)
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  
  // 3. Redireciona o usuário para a sua tela caso ele tente acessar algo protegido sem logar
  pages: {
    signIn: "/login", 
  },
  
  // 4. Modifica os dados da sessão (Opcional, mas muito útil)
  callbacks: {
    async session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
        // @ts-ignore
        session.user.role = user.role; // Permite que você saiba a permissão do usuário (ADMIN/EMPLOYEE)
      }
      return session;
    },
  },

  cookies: {
    sessionToken: {
      name: process.env.NODE_ENV === "production" ? "__Secure-next-auth.session-token" : "next-auth.session-token",
      options: {
        httpOnly: true,     // Impede que scripts maliciosos (XSS) leiam o cookie de sessão
        sameSite: "lax",    // Protege contra ataques CSRF (Falsificação de Solicitação Cross-Site)
        path: "/",
        secure: process.env.NODE_ENV === "production", // Só transmite o cookie em conexões HTTPS criptografadas
      },
    },
  },
});