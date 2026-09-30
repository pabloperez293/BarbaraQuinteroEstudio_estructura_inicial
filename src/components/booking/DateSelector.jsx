export default function DateSelector({ booking, update, next, back }) {
  return (
    <div className="space-y-5">
      <label className="block">
        <span className="mb-2 block text-sm font-medium">Fecha</span>
        <input
          type="date"
          value={booking.date}
          onChange={(event) => update({ date: event.target.value })}
          className="w-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4"
        />
      </label>
      <div className="flex gap-3">
        <button onClick={back} className="rounded-full border px-6 py-3">Atrás</button>
        <button disabled={!booking.date} onClick={next} className="rounded-full bg-[var(--color-primary)] px-6 py-3 font-semibold text-black disabled:opacity-40">
          Ver horarios
        </button>
      </div>
    </div>
  );
}
