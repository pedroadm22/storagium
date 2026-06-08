// src/components/login/background-circuits.tsx
export function BackgroundCircuits() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden transition-opacity duration-300">
      {/* Nó Superior Esquerdo */}
      <div className="absolute top-10 left-10 flex items-center gap-3">
        <div className="h-8 w-16 rounded border border-border bg-card shadow-sm" />
        <div className="h-2 w-2 rounded-full bg-border animate-pulse" />
        {/* Usando text-border diretamente para as linhas ficarem nítidas */}
        <svg className="absolute top-4 left-20 w-[40vw] h-[30vh] text-border" fill="none" viewBox="0 0 400 300">
          <path d="M0,4 H150 L250,250 H400" stroke="currentColor" strokeWidth="1.2" />
        </svg>
      </div>

      {/* Nó Superior Direito */}
      <div className="absolute top-10 right-10 flex items-center gap-3 flex-row-reverse">
        <div className="h-8 w-16 rounded border border-border bg-card shadow-sm" />
        <div className="h-2 w-2 rounded-full bg-border animate-pulse" />
        <svg className="absolute top-4 right-20 w-[40vw] h-[30vh] text-border scale-x-[-1]" fill="none" viewBox="0 0 400 300">
          <path d="M0,4 H150 L250,250 H400" stroke="currentColor" strokeWidth="1.2" />
        </svg>
      </div>

      {/* Nó Inferior Esquerdo */}
      <div className="absolute bottom-10 left-10 flex items-center gap-3">
        <div className="h-8 w-16 rounded border border-border bg-card shadow-sm" />
        <div className="h-2 w-2 rounded-full bg-border animate-pulse" />
        <svg className="absolute bottom-4 left-20 w-[40vw] h-[30vh] text-border scale-y-[-1]" fill="none" viewBox="0 0 400 300">
          <path d="M0,4 H150 L250,250 H400" stroke="currentColor" strokeWidth="1.2" />
        </svg>
      </div>

      {/* Nó Inferior Direito */}
      <div className="absolute bottom-10 right-10 flex items-center gap-3 flex-row-reverse">
        <div className="h-8 w-16 rounded border border-border bg-card shadow-sm" />
        <div className="h-2 w-2 rounded-full bg-border animate-pulse" />
        <svg className="absolute bottom-4 right-20 w-[40vw] h-[30vh] text-border scale-x-[-1] scale-y-[-1]" fill="none" viewBox="0 0 400 300">
          <path d="M0,4 H150 L250,250 H400" stroke="currentColor" strokeWidth="1.2" />
        </svg>
      </div>
    </div>
  );
}