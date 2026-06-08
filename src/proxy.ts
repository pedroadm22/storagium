// src/proxy.ts
import { auth } from "@/auth";

export const proxy = auth((req) => {
  // Mudamos aqui: Só considera logado se existir a session E o objeto de user lá dentro
  const isLoggedIn = !!req.auth?.user; 
  
  const isAuthPage = req.nextUrl.pathname.startsWith("/login");
  const isDashboardPage = req.nextUrl.pathname.startsWith("/dashboard");

  // 1. Se tentar acessar a dashboard SEM estar de fato logado -> vai pro Login
  if (isDashboardPage && !isLoggedIn) {
    return Response.redirect(new URL("/login", req.nextUrl));
  }

  // 2. Se JÁ ESTIVER logado e tentar ir pro login -> vai pra Dashboard
  if (isAuthPage && isLoggedIn) {
    return Response.redirect(new URL("/dashboard", req.nextUrl));
  }
  
  // Se não cair em nenhuma regra (ex: acessando a home ou assets), deixa passar normal
  return;
});

export const runtime = "nodejs"; 

export const config = {
  matcher: ["/dashboard/:path*", "/login"],
};