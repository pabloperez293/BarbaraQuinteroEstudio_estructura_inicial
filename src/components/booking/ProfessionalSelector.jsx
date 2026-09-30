import professionals from "../../data/professionals";

export default function ProfessionalSelector({ booking, update, next, back }) {
  return (
    <div className="space-y-5">
      {professionals.filter((professional) => professional.active).map((professional) => (
        <button
          key={professional.id}
          type="button"
          onClick={() => update({ professionalId: professional.id })}
          className={`block w-full rounded-2xl border p-5 text-left ${booking.professionalId === professional.id ? "border-[var(--color-primary)]" : "border-[var(--color-border)]"}`}
        >
          <strong>{professional.firstName} {professional.lastName}</strong>
          <p className="mt-1 text-sm text-[var(--color-muted)]">{professional.specialty}</p>
        </button>
      ))}
      <div className="flex gap-3">
        <button onClick={back} className="rounded-full border px-6 py-3">Atrás</button>
        <button disabled={!booking.professionalId} onClick={next} className="rounded-full bg-[var(--color-primary)] px-6 py-3 font-semibold text-black disabled:opacity-40">
          Continuar
        </button>
      </div>
    </div>
  );
}
