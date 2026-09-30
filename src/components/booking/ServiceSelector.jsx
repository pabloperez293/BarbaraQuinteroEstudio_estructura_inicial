import services from "../../data/services";

export default function ServiceSelector({ booking, update, next }) {
  return (
    <div className="space-y-5">
      {services.map((service) => (
        <button
          key={service.id}
          type="button"
          onClick={() => update({ serviceId: service.id })}
          className={`block w-full rounded-2xl border p-5 text-left ${booking.serviceId === service.id ? "border-[var(--color-primary)]" : "border-[var(--color-border)]"}`}
        >
          <strong>{service.name}</strong>
          <p className="mt-1 text-sm text-[var(--color-muted)]">{service.description}</p>
        </button>
      ))}
      <button disabled={!booking.serviceId} onClick={next} className="rounded-full bg-[var(--color-primary)] px-6 py-3 font-semibold text-black disabled:opacity-40">
        Continuar
      </button>
    </div>
  );
}
