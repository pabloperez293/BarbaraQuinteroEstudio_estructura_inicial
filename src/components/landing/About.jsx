export default function About() {
  return (
    <section
      id="sobre-mi"
      className="scroll-mt-24 border-y border-(--border-subtle) bg-(--bg-surface) "
    >
      <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 md:py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-(--accent-gold)">
          Sobre Barbara
        </p>

        <h2 className="mt-3 text-4xl font-medium text-(--text-primary) sm:text-5xl">
          Trabajo con amor, pasión y propósito.
        </h2>

        <div className="mt-8 space-y-5 text-base leading-8 text-(--text-secondary)">
          <p>
            Cada diseño de cejas y cada mirada realzada buscan que cada mujer
            se sienta aún más hermosa.
          </p>

          <p>
            Este espacio nació para cuidar cada detalle y convertir una sesión
            de belleza en una experiencia donde el resultado y el bienestar
            van de la mano.
          </p>

          <p>
            Lujo, precisión y elegancia son parte de una forma de trabajar:
            realzar la belleza natural sin perder la esencia de cada persona.
          </p>
        </div>
      </div>
    </section>
  );
}