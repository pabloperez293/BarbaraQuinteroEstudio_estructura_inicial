import { Check, UserRound } from "lucide-react";

import professionals from "../../data/professionals";

export default function ProfessionalSelector({
  booking,
  update,
  next,
  back,
}) {
  const activeProfessionals = professionals.filter(
    (professional) => professional.active
  );

  return (
    <div>
      <div className="mb-7">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--accent-gold)">
          Paso 2
        </p>

        <h2 className="mt-2 text-3xl font-medium text-(--text-primary)">
          Elegí quién te va a atender
        </h2>

        <p className="mt-2 text-sm leading-6 text-(--text-secondary)">
          Seleccioná tu profesional preferida.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {activeProfessionals.map((professional) => {
          const selected = booking.professionalId === professional.id;

          return (
            <button
              key={professional.id}
              type="button"
              onClick={() =>
                update({
                  professionalId: professional.id,
                })
              }
              className={`
                relative rounded-3xl border p-5 text-left
                transition-all duration-300
                ${
                  selected
                    ? "border-(--accent-primary) bg-(--accent-primary)/5 shadow-(--shadow-accent)"
                    : "border-(--border-subtle) bg-(--bg-main) hover:border-(--accent-primary)/60"
                }
              `}
            >
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full bg-(--bg-surface-hover)">
                  {professional.image ? (
                    <img
                      src={professional.image}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <UserRound
                      size={24}
                      className="text-(--text-secondary)"
                    />
                  )}
                </div>

                <div className="min-w-0">
                  <h3 className="text-xl font-medium text-(--text-primary)">
                    {professional.firstName} {professional.lastName}
                  </h3>

                  <p className="mt-1 text-sm text-(--text-secondary)">
                    {professional.specialty}
                  </p>
                </div>
              </div>

              {selected && (
                <span className="absolute right-4 top-4 flex h-7 w-7 items-center justify-center rounded-full bg-(--accent-primary) text-black">
                  <Check size={15} />
                </span>
              )}
            </button>
          );
        })}
      </div>

      <div className="mt-7 flex justify-between gap-3">
        <button
          type="button"
          onClick={back}
          className="
            min-h-12 rounded-full
            border border-(--border-subtle)
            px-6 py-3
            text-(--text-primary)
            transition-colors
            hover:bg-(--bg-surface-hover)
          "
        >
          Atrás
        </button>

        <button
          type="button"
          disabled={!booking.professionalId}
          onClick={next}
          className="
            min-h-12 rounded-full
            bg-(--accent-primary)
            px-7 py-3
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