
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import heroBackground from "../../assets/images/brand/logo-barbara.jpg";

export default function Hero() {
  return (
    <section className="relative isolate min-h-[78svh] overflow-hidden md:min-h-[calc(100vh-81px)]">
      {/* Imagen de fondo */}
      <img
        src={heroBackground}
        alt=""
        aria-hidden="true"
        loading="eager"
        fetchPriority="high"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 -z-10 bg-black/70" />

      {/* Degradado inferior */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-(--bg-main) to-transparent" />

      {/* Contenido */}
      <div className="mx-auto flex min-h-[78svh] max-w-7xl items-center px-4 py-20 sm:px-6 md:min-h-[calc(100vh-81px)] md:py-24">
        <div className="max-w-3xl">
          {/* Subtítulo */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-(--accent-gold) sm:text-sm"
          >
            Lash Artist & Beauty Studio
          </motion.p>

          {/* Título */}
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl font-medium leading-[0.9] tracking-tight text-(--text-primary) sm:text-6xl md:text-7xl lg:text-8xl"
          >
            BARBARA
            <br />
            QUINTERO
            <br />
            ESTUDIO
          </motion.h1>

          {/* Frase */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-7 text-base text-(--text-secondary) sm:text-lg"
          >
            Lujo • Precisión • Elegancia
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link
              to="/booking"
              className="
                mt-8 inline-flex min-h-12 items-center justify-center
                rounded-full
                bg-(--accent-primary)
                px-7 py-3.5
                font-semibold text-black
                shadow-(--shadow-accent)
                transition-all duration-300
                hover:-translate-y-0.5
                hover:bg-(--accent-primary-hover)
                focus-visible:outline-2
                focus-visible:outline-offset-4
                focus-visible:outline-(--accent-primary)
                active:translate-y-0
              "
            >
              Reservar turno
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

