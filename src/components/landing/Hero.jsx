import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:px-6 md:py-24">
      <div>
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-[var(--color-gold)]">
          Lash Artist & Beauty Studio
        </p>
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-semibold leading-tight md:text-6xl"
        >
          BARBARA QUINTERO ESTUDIO
        </motion.h1>
        <p className="mt-5 max-w-xl text-lg text-[var(--color-muted)]">
          Lujo • Precisión • Elegancia
        </p>
        <Link
          to="/booking"
          className="mt-8 inline-flex rounded-full bg-[var(--color-primary)] px-7 py-3.5 font-semibold text-black"
        >
          Reservar turno
        </Link>
      </div>
      <div className="aspect-[4/5] overflow-hidden rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="flex h-full items-center justify-center p-8 text-center text-sm text-[var(--color-muted)]">
          Placeholder de fotografía real de Barbara
        </div>
      </div>
    </section>
  );
}
