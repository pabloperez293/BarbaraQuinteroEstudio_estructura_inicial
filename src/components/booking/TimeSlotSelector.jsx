const demoSlots = ["10:00", "10:30", "11:00", "11:30", "12:00", "12:30"];

export default function TimeSlotSelector({ booking, update, next, back }) {
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {demoSlots.map((slot) => (
          <button
            key={slot}
            type="button"
            onClick={() => update({ startTime: slot })}
            className={`rounded-2xl border p-4 ${booking.startTime === slot ? "border-[var(--color-primary)] bg-[var(--color-primary)]/10" : "border-[var(--color-border)]"}`}
          >
            {slot}
          </button>
        ))}
      </div>
      <div className="flex gap-3">
        <button onClick={back} className="rounded-full border px-6 py-3">Atrás</button>
        <button disabled={!booking.startTime} onClick={next} className="rounded-full bg-[var(--color-primary)] px-6 py-3 font-semibold text-black disabled:opacity-40">
          Continuar
        </button>
      </div>
    </div>
  );
}
