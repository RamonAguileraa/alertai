export default function InventoryPage() {
  return (
    <div className="p-4">
      <div className="mb-4">
        <h1 className="text-2xl font-bold">Inventario</h1>
        <p className="text-sm opacity-70">Stock en tiempo real y alertas</p>
      </div>
      <div className="rounded-xl border border-white/10 overflow-hidden">
        <div className="p-3 text-xs uppercase tracking-wide bg-white/5">Productos</div>
        <div className="divide-y divide-white/5">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="grid grid-cols-4 p-3 text-sm">
              <div className="truncate">Producto {i + 1}</div>
              <div className="text-right">$ {(i + 1) * 25}</div>
              <div className="text-right">{20 - i}</div>
              <div className="text-right">
                <span className="px-2 py-1 text-xs rounded bg-emerald-500/20 text-emerald-300">OK</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

