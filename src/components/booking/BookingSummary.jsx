import services from "../../data/services";
import professionals from "../../data/professionals";

export default function BookingSummary({ booking, back }) {
  const service = services.find((item) => item.id === booking.serviceId);
  const professional = professionals.find((item) => item.id === booking.professionalId);

  return (
    <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
      <h2 className="text-2xl font-semibold">Resumen del turno</h2>
      <dl className="mt-6 space-y-3 text-sm">
        <div><dt className="text-[var(--color-muted)]">Servicio</dt><dd>{service?.name}</dd></div>
        <div><dt className="text-[var(--color-muted)]">Profesional</dt><dd>{professional?.firstName} {professional?.lastName}</dd></div>
        <div><dt className="text-[var(--color-muted)]">Fecha</dt><dd>{booking.date}</dd></div>
        <div><dt className="text-[var(--color-muted)]">Horario</dt><dd>{booking.startTime}</dd></div>
        <div><dt className="text-[var(--color-muted)]">Cliente</dt><dd>{booking.customer.name}</dd></div>
      </dl>
      <div className="mt-8 flex gap-3">
        <button onClick={back} className="rounded-full border px-6 py-3">Modificar</button>
        <button disabled className="rounded-full bg-[var(--color-primary)] px-6 py-3 font-semibold text-black disabled:opacity-50">
          Confirmar — próximamente
        </button>
      </div>
    </div>
  );
}
