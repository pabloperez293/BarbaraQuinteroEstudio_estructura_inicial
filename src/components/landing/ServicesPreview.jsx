
import { motion } from "framer-motion";
import { Clock3, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

import services from "../../data/services";

export default function ServicesPreview() {
  const activeServices = services.filter((service) => service.active);

  return (
    <section
      id="servicios"
      className="scroll-mt-24 bg-(--bg-main) px-4 py-20 sm:px-6 md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-(--accent-gold)">
            Servicios
          </p>

          <h2 className="mt-3 text-4xl font-medium leading-tight text-(--text-primary) sm:text-5xl">
            Diseñamos tu mirada
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-(--text-secondary) sm:text-base">
            Tratamientos pensados para realzar tu belleza natural y lograr una
            mirada definida, elegante y armoniosa.
          </p>
        </motion.div>

        {/* Tarjetas */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {activeServices.map((service, index) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className="
                group relative flex h-full flex-col
                overflow-hidden rounded-3xl
                border border-(--border-subtle)
                bg-(--bg-surface)
                p-6
                shadow-(--shadow-elevation)
                transition-all duration-300
                hover:-translate-y-1
                hover:border-(--accent-primary)
                hover:shadow-(--shadow-accent)
              "
            >
              {/* Línea decorativa superior */}
              <div
                className="
                  absolute inset-x-0 top-0 h-0.5
                  origin-left scale-x-0
                  bg-(--accent-primary)
                  transition-transform duration-300
                  group-hover:scale-x-100
                "
              />

              {/* Icono + promoción */}
              <div className="flex items-start justify-between gap-4">
                <div
                  className="
                    flex h-12 w-12 shrink-0
                    items-center justify-center
                    rounded-2xl
                    bg-(--accent-primary)/10
                    text-(--accent-primary)
                    transition-transform duration-300
                    group-hover:scale-105
                  "
                >
                  <Sparkles size={21} strokeWidth={1.8} />
                </div>

                <span
                  className="
                    rounded-full
                    border border-(--accent-primary)/20
                    bg-(--accent-primary)/10
                    px-3 py-1
                    text-[11px] font-semibold uppercase tracking-wide
                    text-(--accent-primary)
                  "
                >
                  Promo
                </span>
              </div>

              {/* Información */}
              <div className="mt-6 flex-1">
                <h3 className="text-2xl font-medium leading-tight text-(--text-primary)">
                  {service.name}
                </h3>

                <p className="mt-3 text-sm leading-6 text-(--text-secondary)">
                  {service.description}
                </p>
              </div>

              {/* Precio */}
              <div className="mt-7 border-t border-(--border-subtle) pt-5">
                <p className="text-xs uppercase tracking-[0.14em] text-(--text-secondary)">
                  Precio promocional
                </p>

                <div className="mt-2 flex flex-wrap items-baseline gap-2">
                  <span className="text-sm text-(--text-secondary) line-through">
                    ${service.originalPrice.toLocaleString("es-AR")}
                  </span>

                  <strong className="text-2xl font-semibold text-(--accent-primary)">
                    ${service.promotionalPrice.toLocaleString("es-AR")}
                  </strong>
                </div>

                {/* Duración */}
                <div className="mt-4 flex items-center gap-2 text-xs text-(--text-secondary)">
                  <Clock3 size={15} />
                  <span>{service.duration} minutos aproximadamente</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 flex justify-center"
        >
          <Link
            to="/booking"
            className="
              inline-flex min-h-12 items-center justify-center
              rounded-full
              bg-(--accent-primary)
              px-8 py-3.5
              font-semibold text-black
              shadow-(--shadow-accent)
              transition-all duration-300
              hover:-translate-y-0.5
              hover:bg-(--accent-primary-hover)
              hover:shadow-lg
              focus-visible:outline-2
              focus-visible:outline-offset-4
              focus-visible:outline-(--accent-primary)
              active:translate-y-0
            "
          >
            Elegir servicio
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

