
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

import aboutImage from "../../assets/images/brand/gallery/barbara-trabajo4.jpg";

const values = [
  {
    title: "Lujo",
    description: "Una experiencia cuidada en cada detalle.",
  },
  {
    title: "Precisión",
    description: "Trabajo dedicado a conseguir un resultado armonioso.",
  },
  {
    title: "Elegancia",
    description: "Realzar tu belleza natural sin perder tu esencia.",
  },
];

export default function About() {
  return (
    <section
sobre      id="-mi"
      className="scroll-mt-24 border-y border-(--border-subtle) bg-(--bg-surface) px-4 py-20 sm:px-6 md:py-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Imagen */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-(--border-subtle)">
            <img
              src={aboutImage}
              alt="Trabajo realizado por Barbara Quintero"
              loading="lazy"
              className="
                aspect-[4/5]
                h-full
                w-full
                object-cover
                object-center
                transition-transform
                duration-700
                hover:scale-105
              "
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
          </div>

          {/* Detalle decorativo */}
          <div
            className="
              absolute
              -bottom-4
              -right-4
              hidden
              h-24
              w-24
              rounded-2xl
              border
              border-(--accent-gold)/30
              bg-(--accent-gold)/5
              sm:block
            "
          />

          {/* Badge */}
          <div
            className="
              absolute
              bottom-5
              left-5
              rounded-2xl
              border
              border-white/20
              bg-black/40
              px-5
              py-3
              backdrop-blur-md
            "
          >
            <p className="text-xs uppercase tracking-[0.18em] text-(--accent-gold)">
              Barbara Quintero
            </p>

            <p className="mt-1 text-sm font-medium text-white">
              Beauty Studio
            </p>
          </div>
        </motion.div>

        {/* Contenido */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-(--accent-primary)/10 text-(--accent-primary)">
              <Sparkles size={18} strokeWidth={1.8} />
            </span>

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-(--accent-gold)">
              Sobre mi
            </p>
          </div>

          <h2 className="mt-6 text-4xl font-medium leading-tight text-(--text-primary) sm:text-5xl">
            Trabajo con amor, pasión y propósito.
          </h2>

          <div className="mt-7 space-y-5 text-base leading-8 text-(--text-secondary)">
            <p>
              Cada diseño de cejas y cada mirada realzada buscan que cada mujer
              se sienta aún más hermosa.
            </p>

            <p>
              Este espacio nació para cuidar cada detalle y convertir una
              sesión de belleza en una experiencia donde el resultado y el
              bienestar van de la mano.
            </p>

            <p>
              Lujo, precisión y elegancia son parte de una forma de trabajar:
              realzar la belleza natural sin perder la esencia de cada persona.
            </p>
          </div>

          {/* Valores */}
          <div className="mt-9 grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="
                  rounded-2xl
                  border
                  border-(--border-subtle)
                  bg-(--bg-main)
                  p-4
                "
              >
                <p className="text-sm font-semibold text-(--accent-gold)">
                  {value.title}
                </p>

                <p className="mt-2 text-xs leading-5 text-(--text-secondary)">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

