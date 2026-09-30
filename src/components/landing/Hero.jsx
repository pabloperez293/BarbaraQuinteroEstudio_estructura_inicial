import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import heroImage from "../../assets/images/brand/gallery/barbara-trabajo1.jpg";

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:py-16 md:grid-cols-2 md:px-6 md:py-24">
      {/* Contenido */}
      <div>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-(--accent-gold) sm:text-sm"
        >
          Lash Artist & Beauty Studio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-2xl text-5xl font-medium leading-[0.95] tracking-tight text-(--text-primary) sm:text-6xl md:text-7xl"
        >
          BARBARA
          <br />
          QUINTERO
          <br />
          ESTUDIO
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-base text-(--text-secondary) sm:text-lg"
        >
          Lujo • Precisión • Elegancia
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link
            to="/booking"
            className="
              mt-8 inline-flex min-h-12 items-center justify-center
              rounded-full bg-(--accent-primary)
              px-7 py-3.5
              font-semibold text-black
              shadow-(--shadow-accent)
              transition-all duration-300
              hover:bg-(--accent-primary-hover)
              hover:-translate-y-0.5
            "
          >
            Reservar turno
          </Link>
        </motion.div>
      </div>

      {/* Imagen */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="
          relative mx-auto w-full max-w-lg
          overflow-hidden rounded-4xl
          border border-(--border-subtle)
          bg-(--bg-surface)
          shadow-(--shadow-elevation)
        "
      >
        <div className="aspect-4/5">
          <img
            src={heroImage}
            alt="Trabajo de belleza realizado por Barbara Quintero"
            className="image-dark-mode h-full w-full object-cover"
          />
        </div>

        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent" />
      </motion.div>
    </section>
  );
}