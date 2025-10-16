export default function POSPage() {
  return (
    <div className="p-4">
      <div className="mb-4">
        <h1 className="text-2xl font-bold">Punto de Venta</h1>
        <p className="text-sm opacity-70">Interfaz rápida para registrar ventas</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="h-24 rounded-xl bg-gradient-to-br from-sky-500/20 to-fuchsia-500/20 backdrop-blur border border-white/10" />
        ))}
      </div>
    </div>
  );
}

