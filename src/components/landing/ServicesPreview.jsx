import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

import services from "../../data/services";

export default function ServicesPreview() {
  return (
    <section
      id="servicios"
      className="scroll-mt-24 mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-24"
    >
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-(--accent-gold)">
          Servicios
        </p>

        <h2 className="mt-3 text-4xl font-medium text-(--text-primary) sm:text-5xl">
          Diseñamos tu mirada
        </h2>

        <p className="mt-5 leading-7 text-(--text-secondary)">
          Tratamientos pensados para realzar tu belleza natural y lograr una
          mirada definida, elegante y armoniosa.
        </p>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services
          .filter((service) => service.active)
          .map((service) => (
            <article
              key={service.id}
              className="
                group relative rounded-3xl
                border border-(--border-subtle)
                bg-(--bg-surface)
                p-6
                shadow-(--shadow-elevation)
                transition-all duration-300
                hover:-translate-y-1
                hover:border-(--accent-primary)
              "
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-(--accent-primary)/10 text-(--accent-primary)">
                  <Sparkles size={20} />
                </div>

                <span className="rounded-full bg-(--accent-primary)/10 px-3 py-1 text-xs font-semibold text-(--accent-primary)">
                  Promo
                </span>
              </div>

              <h3 className="mt-6 text-2xl font-medium text-(--text-primary)">
                {service.name}
              </h3>

              <p className="mt-3 min-h-12 text-sm leading-6 text-(--text-secondary)">
                {service.description}
              </p>

              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-sm text-(--text-secondary) line-through">
                  ${service.originalPrice.toLocaleString("es-AR")}
                </span>

                <strong className="text-2xl font-semibold text-(--accent-primary)">
                  ${service.promotionalPrice.toLocaleString("es-AR")}
                </strong>
              </div>

              <p className="mt-2 text-xs text-(--text-secondary)">
                Duración aproximada: {service.duration} min
              </p>
            </article>
          ))}
      </div>

      <Link
        to="/booking"
        className="
          mt-10 inline-flex min-h-12 items-center justify-center
          rounded-full
          bg-(--accent-primary)
          px-7 py-3.5
          font-semibold text-black
          transition-all duration-300
          hover:-translate-y-0.5
          hover:bg-(--accent-primary-hover)
        "
      >
        Elegir servicio
      </Link>
    </section>
  );
}