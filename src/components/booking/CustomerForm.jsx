export default function CustomerForm({ booking, update, next, back }) {
  const updateCustomer = (patch) =>
    update({ customer: { ...booking.customer, ...patch } });

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        next();
      }}
      className="space-y-5"
    >
      <label className="block">
        <span className="mb-2 block text-sm font-medium">Nombre</span>
        <input
          required
          value={booking.customer.name}
          onChange={(event) => updateCustomer({ name: event.target.value })}
          className="w-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4"
        />
      </label>
      <label className="block">
        <span className="mb-2 block text-sm font-medium">Teléfono</span>
        <input
          required
          inputMode="tel"
          value={booking.customer.phone}
          onChange={(event) => updateCustomer({ phone: event.target.value })}
          className="w-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4"
        />
      </label>
      <div className="flex gap-3">
        <button type="button" onClick={back} className="rounded-full border px-6 py-3">Atrás</button>
        <button type="submit" className="rounded-full bg-[var(--color-primary)] px-6 py-3 font-semibold text-black">
          Revisar
        </button>
      </div>
    </form>
  );
}
