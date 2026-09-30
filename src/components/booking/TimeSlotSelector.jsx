import { Clock } from "lucide-react";

const demoSlots = [
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
];

export default function TimeSlotSelector({
  booking,
  update,
  next,
  back,
}) {
  return (
    <div>
      <div className="mb-7">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--accent-gold)">
          Paso 4
        </p>

        <h2 className="mt-2 text-3xl font-medium text-(--text-primary)">
          Elegí tu horario
        </h2>

        <p className="mt-2 text-sm leading-6 text-(--text-secondary)">
          Seleccioná uno de los horarios disponibles.
        </p>
      </div>

      <div className="mb-5 flex items-center gap-2 rounded-2xl bg-(--bg-main) p-4 text-sm text-(--text-secondary)">
        <Clock size={17} className="text-(--accent-primary)" />

        <span>
          Horarios disponibles para el día{" "}
          <strong className="text-(--text-primary)">
            {booking.date}
          </strong>
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        {demoSlots.map((slot) => {
          const selected = booking.startTime === slot;

          return (
            <button
              key={slot}
              type="button"
              onClick={() => update({ startTime: slot })}
              className={`
                min-h-14 rounded-2xl border
                font-medium
                transition-all duration-200
                ${
                  selected
                    ? "border-(--accent-primary) bg-(--accent-primary) text-black shadow-(--shadow-accent)"
                    : "border-(--border-subtle) bg-(--bg-main) text-(--text-primary) hover:border-(--accent-primary)"
                }
              `}
            >
              {slot}
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
          disabled={!booking.startTime}
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