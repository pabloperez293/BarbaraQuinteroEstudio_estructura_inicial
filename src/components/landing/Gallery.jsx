export default function Gallery() {
  return (
    <section id="galeria" className="mx-auto max-w-7xl px-4 py-16 md:px-6">
      <p className="text-sm uppercase tracking-[0.2em] text-[var(--color-gold)]">Galería</p>
      <h2 className="mt-2 text-3xl font-semibold">Resultados que hablan por sí solos</h2>
      <div className="mt-8 flex snap-x gap-4 overflow-x-auto pb-4">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="flex min-w-[78vw] snap-center items-center justify-center rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] aspect-[4/5] sm:min-w-[280px]"
          >
            <span className="text-sm text-[var(--color-muted)]">Placeholder de imagen {item}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
