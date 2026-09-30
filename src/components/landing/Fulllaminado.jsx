import { motion } from "framer-motion";
import { Check, Clock3, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

import services from "../../data/services";
import fullLaminadoImage from "../../assets/images/brand/gallery/barbara-trabajo6.jpg";
import fullLaminadoDetail from "../../assets/images/brand/gallery/barbara-trabajo5.jpg";

export default function FullLaminado() {
  const service = services.find((item) => item.id === "srv_003");

  if (!service) return null;

  const benefits = [
    "Lifting de pestañas con tinte",
    "Laminado de cejas",
    "Perfilado de cejas",
    "Resultado natural y armonioso",
  ];

  return (
    <section
      id="full-laminado"
      className="scroll-mt-24 bg-(--bg-surface) px-4 py-20 sm:px-6 md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2rem] border border-(--border-subtle) bg-(--bg-main) shadow-(--shadow-elevation)">
          {/* Detalle decorativo */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-(--accent-primary)/10 blur-3xl" />

          <div className="grid items-center gap-10 p-7 sm:p-10 md:p-14 lg:grid-cols-2 lg:gap-16 lg:p-16">
            {/* Contenido */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-(--accent-primary)/10 text-(--accent-primary)">
                  <Sparkles size={20} strokeWidth={1.8} />
                </span>

                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-(--accent-gold)">
                  Servicio destacado
                </p>
              </div>

              <h2 className="mt-6 text-4xl font-medium leading-tight text-(--text-primary) sm:text-5xl">
                Full Laminado
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-(--text-secondary)">
                Una experiencia completa para realzar tu mirada combinando
                lifting de pestañas, tinte, laminado y perfilado de cejas.
              </p>

              {/* Beneficios */}
              <ul className="mt-7 space-y-3">
                {benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-center gap-3 text-sm text-(--text-secondary)"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-(--accent-primary)/10 text-(--accent-primary)">
                      <Check size={14} strokeWidth={2.5} />
                    </span>

                    {benefit}
                  </li>
                ))}
              </ul>

              {/* Información */}
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-(--border-subtle) pt-6">
                <div>
                  <p className="text-xs uppercase tracking-wide text-(--text-secondary)">
                    Precio
                  </p>

                  <div className="mt-1 flex items-baseline gap-2">
                    <span className="text-sm text-(--text-secondary) line-through">
                      ${service.originalPrice.toLocaleString("es-AR")}
                    </span>

                    <strong className="text-3xl font-semibold text-(--accent-primary)">
                      ${service.promotionalPrice.toLocaleString("es-AR")}
                    </strong>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-(--text-secondary)">
                  <Clock3 size={16} />

                  <span>{service.duration} minutos aprox.</span>
                </div>
              </div>

              {/* CTA */}
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
                  hover:shadow-lg
                  focus-visible:outline-2
                  focus-visible:outline-offset-4
                  focus-visible:outline-(--accent-primary)
                "
              >
                Reservar Full Laminado
              </Link>
            </motion.div>

            {/* Panel visual */}
            {/* Panel visual */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-(--border-subtle)">
                <img
                  src={fullLaminadoImage}
                  alt="Resultado de Full Laminado realizado por Barbara Quintero"
                  loading="lazy"
                  className="
        h-full
        w-full
        object-cover
        object-center
        transition-transform
        duration-700
        group-hover:scale-105
      "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--accent-gold)">
                    Resultado
                  </p>

                  <p className="mt-1 text-lg font-medium text-white">
                    Una mirada definida y elegante
                  </p>
                </div>
              </div>

              {/* Imagen secundaria */}
              <div className="absolute -bottom-6 -right-4 hidden w-32 overflow-hidden rounded-2xl border-4 border-(--bg-main) shadow-(--shadow-elevation) sm:block sm:w-40">
                <img
                  src={fullLaminadoDetail}
                  alt="Detalle del trabajo de pestañas"
                  loading="lazy"
                  className="aspect-square w-full object-cover"
                />
              </div>

              {/* Badge */}
              <div className="absolute -left-3 top-6 rounded-2xl border border-(--border-subtle) bg-(--bg-main)/95 px-4 py-3 shadow-(--shadow-elevation) backdrop-blur sm:-left-5 sm:px-5">
                <p className="text-xs uppercase tracking-wide text-(--text-secondary)">
                  Barbara Quintero
                </p>

                <p className="mt-1 text-sm font-medium text-(--text-primary)">
                  Full Laminado
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
