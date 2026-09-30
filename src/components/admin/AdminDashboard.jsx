export default function AdminDashboard() {
  return (
    <main className="min-h-screen p-4 md:p-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm uppercase tracking-[0.2em] text-[var(--color-gold)]">Administración</p>
        <h1 className="mt-2 text-3xl font-semibold">Barbara Quintero Estudio</h1>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {["Agenda", "Reservas", "Servicios", "Profesionales"].map((item) => (
            <div key={item} className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
              <p className="text-sm text-[var(--color-muted)]">{item}</p>
              <p className="mt-2 text-2xl font-semibold">—</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
