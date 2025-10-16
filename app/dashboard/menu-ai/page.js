"use client";

import { useState } from "react";

export default function MenuAIPage() {
  const [file, setFile] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [items, setItems] = useState([]);

  function onUpload(e) {
    const f = e.target.files?.[0];
    if (!f) return;
    setFile(f);
    setProcessing(true);
    // Simulación de IA
    setTimeout(() => {
      setItems([
        { name: "Hamburguesa Clásica", price: 99, category: "Platos Fuertes" },
        { name: "Limonada", price: 35, category: "Bebidas" },
        { name: "Brownie", price: 49, category: "Postres" },
      ]);
      setProcessing(false);
    }, 1500);
  }

  return (
    <div className="p-4 space-y-4">
      <div>
        <h1 className="text-2xl font-bold">Digitalización de Menú con IA</h1>
        <p className="text-sm opacity-70">Sube una foto de tu menú físico</p>
      </div>

      <label className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 cursor-pointer">
        <input type="file" accept="image/*" className="hidden" onChange={onUpload} />
        <span>Subir foto</span>
      </label>

      {processing && (
        <div className="h-32 rounded-xl bg-gradient-to-r from-sky-500/20 via-fuchsia-500/20 to-emerald-500/20 animate-pulse" />
      )}

      {items.length > 0 && (
        <div className="rounded-xl border border-white/10 overflow-hidden">
          <div className="p-3 text-xs uppercase tracking-wide bg-white/5">Resultados detectados</div>
          <div className="divide-y divide-white/5">
            {items.map((it, idx) => (
              <div key={idx} className="grid grid-cols-3 p-3 text-sm">
                <input defaultValue={it.name} className="bg-transparent outline-none" />
                <input defaultValue={it.price} className="bg-transparent outline-none text-right" />
                <input defaultValue={it.category} className="bg-transparent outline-none text-right" />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

