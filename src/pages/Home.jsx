import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import heroBackground from "../assets/images/brand/logo-barbara.jpg";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Imagen de fondo */}
      <img
        src={heroBackground}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Contenido */}
      <div className="relative mx-auto flex min-h-[calc(100vh-73px)] max-w-7xl items-center px-4 py-20 sm:px-6 md:min-h-[calc(100vh-81px)] md:py-24">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-(--accent-gold) sm:text-sm"
          >
            Lash Artist & Beauty Studio
          </motion.p>

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

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-7 text-base text-(--text-secondary) sm:text-lg"
          >
            Lujo  •  Precisión  •  Elegancia
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
                rounded-full
                bg-(--accent-primary)
                px-7 py-3.5
                font-semibold text-black
                shadow-(--shadow-accent)
                transition-all duration-300
                hover:-translate-y-0.5
                hover:bg-(--accent-primary-hover)
              "
            >
              Reservar turno
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Degradado inferior */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-(--bg-main) to-transparent" />
    </section>
  );
}