import { Phone, UserRound } from "lucide-react";

export default function CustomerForm({
  booking,
  update,
  next,
  back,
}) {
  const updateCustomer = (patch) => {
    update({
      customer: {
        ...booking.customer,
        ...patch,
      },
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!booking.customer.name.trim()) return;
    if (!booking.customer.phone.trim()) return;

    next();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-7">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--accent-gold)">
          Paso 5
        </p>

        <h2 className="mt-2 text-3xl font-medium text-(--text-primary)">
          Tus datos
        </h2>

        <p className="mt-2 text-sm leading-6 text-(--text-secondary)">
          Necesitamos estos datos para identificar tu reserva.
        </p>
      </div>

      <div className="mx-auto grid max-w-xl gap-5">
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-(--text-primary)">
            Nombre y apellido
          </span>

          <div className="relative">
            <UserRound
              size={19}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-(--text-secondary)"
            />

            <input
              type="text"
              required
              autoComplete="name"
              value={booking.customer.name}
              onChange={(event) =>
                updateCustomer({
                  name: event.target.value,
                })
              }
              placeholder="Ej. María González"
              className="
                min-h-14 w-full rounded-2xl
                border border-(--border-subtle)
                bg-(--bg-main)
                pl-12 pr-4
                text-(--text-primary)
                outline-none
                placeholder:text-(--text-secondary)
                focus:border-(--accent-primary)
              "
            />
          </div>
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-(--text-primary)">
            Teléfono / WhatsApp
          </span>

          <div className="relative">
            <Phone
              size={19}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-(--text-secondary)"
            />

            <input
              type="tel"
              required
              inputMode="tel"
              autoComplete="tel"
              value={booking.customer.phone}
              onChange={(event) =>
                updateCustomer({
                  phone: event.target.value,
                })
              }
              placeholder="Ej. 11 1234-5678"
              className="
                min-h-14 w-full rounded-2xl
                border border-(--border-subtle)
                bg-(--bg-main)
                pl-12 pr-4
                text-(--text-primary)
                outline-none
                placeholder:text-(--text-secondary)
                focus:border-(--accent-primary)
              "
            />
          </div>
        </label>
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
          type="submit"
          className="
            min-h-12 rounded-full
            bg-(--accent-primary)
            px-7 py-3
            font-semibold text-black
            transition-all duration-300
            hover:-translate-y-0.5
            hover:bg-(--accent-primary-hover)
          "
        >
          Revisar reserva
        </button>
      </div>
    </form>
  );
}