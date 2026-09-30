import { Clock, Sparkles } from "lucide-react";

import services from "../../data/services";

export default function ServiceSelector({ booking, update, next }) {
  const activeServices = services.filter((service) => service.active);

  return (
    <div>
      <div className="mb-7">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--accent-gold)">
          Paso 1
        </p>

        <h2 className="mt-2 text-3xl font-medium text-(--text-primary)">
          ¿Qué tratamiento querés realizarte?
        </h2>

        <p className="mt-2 text-sm leading-6 text-(--text-secondary)">
          Elegí uno de nuestros servicios para continuar.
        </p>
      </div>

      <div className="grid gap-4">
        {activeServices.map((service) => {
          const selected = booking.serviceId === service.id;

          return (
            <button
              key={service.id}
              type="button"
              onClick={() => update({ serviceId: service.id })}
              className={`
                relative w-full rounded-2xl border p-5 text-left
                transition-all duration-300
                ${
                  selected
                    ? "border-(--accent-primary) bg-(--accent-primary)/5 shadow-(--shadow-accent)"
                    : "border-(--border-subtle) bg-(--bg-main) hover:border-(--accent-primary)/60"
                }
              `}
            >
              {selected && (
                <span className="absolute right-4 top-4 flex h-6 w-6 items-center justify-center rounded-full bg-(--accent-primary) text-black">
                  <Sparkles size={13} />
                </span>
              )}

              <div className="pr-8">
                <h3 className="text-xl font-medium text-(--text-primary)">
                  {service.name}
                </h3>

                <p className="mt-2 text-sm leading-6 text-(--text-secondary)">
                  {service.description}
                </p>

                <div className="mt-4 flex flex-wrap items-center gap-4">
                  <span className="flex items-center gap-1.5 text-xs text-(--text-secondary)">
                    <Clock size={14} />
                    {service.duration} min
                  </span>

                  <span className="text-sm text-(--text-secondary) line-through">
                    ${service.originalPrice.toLocaleString("es-AR")}
                  </span>

                  <span className="text-lg font-semibold text-(--accent-primary)">
                    ${service.promotionalPrice.toLocaleString("es-AR")}
                  </span>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <div className="mt-7 flex justify-end">
        <button
          type="button"
          disabled={!booking.serviceId}
          onClick={next}
          className="
            min-h-12 rounded-full
            bg-(--accent-primary)
            px-7 py-3.5
            font-semibold text-black
            transition-all duration-300
            hover:-translate-y-0.5
            hover:bg-(--accent-primary-hover)
            disabled:cursor-not-allowed
            disabled:opacity-40
          "
        >
          Continuar
        </button>
      </div>
    </div>
  );
}