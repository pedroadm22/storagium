"use client";

import { IconType } from "react-icons";

interface SocialButtonProps {
  text: string;
  icon: IconType;
  onClick: () => void;
  iconColor?: string;
}

export function SocialButton({ text, icon: Icon, onClick, iconColor }: SocialButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative flex w-full items-center justify-center rounded-full border border-slate-200/80 bg-[#1e1f22] py-3.5 pl-3 pr-6 text-sm font-medium text-zinc-200 hover:bg-[#2b2d31] hover:text-white transition-all duration-200 active:scale-[0.99] dark:border-zinc-800/80 dark:bg-[#1a1b1e] dark:hover:bg-[#232428]"
    >
      {/* Círculo branco rígido na esquerda com o ícone centralizado */}
      <div className="absolute left-2.5 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md transition-transform group-hover:scale-105">
        <Icon className="h-5 w-5" style={{ color: iconColor }} />
      </div>

      {/* Texto do botão centralizado em relação ao card */}
      <span className="tracking-wide">{text}</span>
    </button>
  );
}