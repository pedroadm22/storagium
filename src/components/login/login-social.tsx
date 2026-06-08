// src/components/login/login-social.tsx
"use client";

import { signIn } from "next-auth/react";
import { FaGoogle, FaApple, FaGithub } from "react-icons/fa"; // Já importei os futuros para você ver
import { SocialButton } from "./social-button";

export function LoginSocial() {
  // Configuração dos botões. Para adicionar novos, basta inserir um novo objeto neste array!
  const providers = [
    {
      id: "google",
      text: "Continue with Google",
      icon: FaGoogle,
      iconColor: "#4285F4", // Cor oficial do Google para o ícone
    },
    /* Quando quiser ativar o Apple ou GitHub no futuro, basta tirar o comentário daqui:
    {
      id: "apple",
      text: "Continue with Apple",
      icon: FaApple,
      iconColor: "#000000",
    },
    {
      id: "github",
      text: "Continue with GitHub",
      icon: FaGithub,
      iconColor: "#24292e",
    }
    */
  ];

  return (
    <div className="flex w-full flex-col gap-3">
      {providers.map((provider) => (
        <SocialButton
          key={provider.id}
          text={provider.text}
          icon={provider.icon}
          iconColor={provider.iconColor}
          onClick={() => signIn(provider.id, { redirectTo: "/dashboard" })}
        />
      ))}
    </div>
  );
}