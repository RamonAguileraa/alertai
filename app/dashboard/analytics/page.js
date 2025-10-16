export default function AnalyticsPage() {
  return (
    <div className="p-4">
      <div className="mb-4">
        <h1 className="text-2xl font-bold">Analytics</h1>
        <p className="text-sm opacity-70">Métricas en tiempo real y tendencias</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="h-48 rounded-xl bg-white/5 border border-white/10" />
        <div className="h-48 rounded-xl bg-white/5 border border-white/10" />
        <div className="h-64 rounded-xl bg-white/5 border border-white/10" />
        <div className="h-64 rounded-xl bg-white/5 border border-white/10" />
      </div>
    </div>
  );
}

