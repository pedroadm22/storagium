// components/login/login-header.tsx
import Image from "next/image";
import { Container } from 'lucide-react';


export function LoginHeader() {
  return (
    <div className="flex flex-col items-center space-y-2 text-center">
      {/* Ícone ou Logo da sua marca */}
      {/* <Image
        src="@/assets/logo.svg" // Substitua pelo caminho do seu logo
        alt="Storagium Logo"
        width={5}
        height={5}
      /> */}
      <Container size={48} className="text-blue-600 color=#4e62c6" />

      <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
        Acessar o Storagium
      </h1>
      <p className="text-sm text-slate-500">
        Insira suas credenciais para gerenciar o inventário
      </p>
    </div>
  );
}