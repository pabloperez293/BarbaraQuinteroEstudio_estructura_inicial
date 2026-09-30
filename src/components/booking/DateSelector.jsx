import { CalendarDays } from "lucide-react";

function getTodayString() {
  const today = new Date();

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function isSunday(dateString) {
  if (!dateString) return false;

  const [year, month, day] = dateString.split("-").map(Number);
  const date = new Date(year, month - 1, day);

  return date.getDay() === 0;
}

export default function DateSelector({
  booking,
  update,
  next,
  back,
}) {
  const today = getTodayString();
  const sunday = isSunday(booking.date);

  const handleDateChange = (event) => {
    const date = event.target.value;

    update({
      date,
      startTime: "",
    });
  };

  return (
    <div>
      <div className="mb-7">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--accent-gold)">
          Paso 3
        </p>

        <h2 className="mt-2 text-3xl font-medium text-(--text-primary)">
          ¿Qué día te gustaría venir?
        </h2>

        <p className="mt-2 text-sm leading-6 text-(--text-secondary)">
          Elegí una fecha disponible para continuar.
        </p>
      </div>

      <div className="mx-auto max-w-xl">
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-(--text-primary)">
            Fecha del turno
          </span>

          <div className="relative">
            <CalendarDays
              size={20}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 "
            />

            <input
              type="date"
              min={today}
              value={booking.date}
              onChange={handleDateChange}
              className="
                min-h-14 w-full rounded-2xl
                border border-(--border-subtle)
                bg)
                pl-12 pr-4
                text-(--text-primary)
                outline-none
                transition-colors
                focus:border-(--accent-primary)
              "
            />
          </div>
        </label>

        <div
          className={`
            mt-4 rounded-2xl border p-4 text-sm
            ${
              sunday
                ? "border-red-500/30 bg-red-500/5 text-red-400"
                : "border-(--border-subtle) bg-(--bg-main) text-(--text-secondary)"
            }
          `}
        >
          {sunday
            ? "Los domingos el estudio permanece cerrado. Elegí otra fecha."
            : "El estudio trabaja de lunes a sábado."}
        </div>
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
          disabled={!booking.date || sunday}
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
          Ver horarios
        </button>
      </div>
    </div>
  );
}