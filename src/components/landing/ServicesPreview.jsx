import { Link } from "react-router-dom";
import services from "../../data/services";

export default function ServicesPreview() {
  return (
    <section
      id="servicios"
      className="scroll-mt-24 mx-auto max-w-7xl px-4 py-16 md:px-6"
    >
      <div className="mb-8">
        <p className="text-sm uppercase tracking-[0.2em] text-(--accent-gold)">
          Servicios
        </p>

        <h2 className="mt-2 text-3xl font-semibold text-[var(--text-primary)]">
          Diseñamos tu mirada
        </h2>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <article
            key={service.id}
            className="
              rounded-3xl
              border border-[var(--border-subtle)]
              bg-[var(--bg-surface)]
              p-6
            "
          >
            <h3 className="text-xl font-semibold text-[var(--text-primary)]">
              {service.name}
            </h3>

            <p className="mt-3 text-sm text-[var(--text-secondary)]">
              {service.description}
            </p>

            <div className="mt-6">
              <span className="mr-2 text-sm text-[var(--text-secondary)] line-through">
                ${service.originalPrice.toLocaleString("es-AR")}
              </span>

              <strong className="text-xl text-[var(--accent-primary)]">
                ${service.promotionalPrice.toLocaleString("es-AR")}
              </strong>
            </div>
          </article>
        ))}
      </div>

      <Link
        to="/booking"
        className="
          mt-8 inline-flex rounded-full
          border border-[var(--accent-primary)]
          px-6 py-3
          text-[var(--accent-primary)]
          transition-colors duration-300
          hover:bg-[var(--accent-primary)]
          hover:text-black
        "
      >
        Elegir servicio
      </Link>
    </section>
  );
}