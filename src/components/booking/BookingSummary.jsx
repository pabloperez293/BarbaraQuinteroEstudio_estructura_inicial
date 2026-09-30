import { CalendarDays, Clock, UserRound } from "lucide-react";

import services from "../../data/services";
import professionals from "../../data/professionals";

export default function BookingSummary({ booking, back }) {
  const service = services.find(
    (item) => item.id === booking.serviceId
  );

  const professional = professionals.find(
    (item) => item.id === booking.professionalId
  );

  return (
    <div>
      <div className="mb-7">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--accent-gold)">
          Paso 6
        </p>

        <h2 className="mt-2 text-3xl font-medium text-(--text-primary)">
          Revisá tu reserva
        </h2>

        <p className="mt-2 text-sm leading-6 text-(--text-secondary)">
          Verificá que todos los datos sean correctos antes de confirmar.
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-[1.4fr_1fr]">
        {/* Reserva */}
        <div className="rounded-3xl border border-(--border-subtle) bg-(--bg-main) p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-(--text-secondary)">
                Servicio
              </p>

              <h3 className="mt-2 text-2xl font-medium text-(--text-primary)">
                {service?.name}
              </h3>
            </div>

            <span className="text-xl font-semibold text-(--accent-primary)">
              ${service?.promotionalPrice.toLocaleString("es-AR")}
            </span>
          </div>

          <div className="my-6 h-px bg-(--border-subtle)" />

          <div className="space-y-5">
            <div className="flex items-start gap-3">
              <CalendarDays
                size={19}
                className="mt-0.5 shrink-0 text-(--accent-primary)"
              />

              <div>
                <p className="text-xs text-(--text-secondary)">
                  Fecha
                </p>

                <p className="mt-1 font-medium text-(--text-primary)">
                  {booking.date}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock
                size={19}
                className="mt-0.5 shrink-0 text-(--accent-primary)"
              />

              <div>
                <p className="text-xs text-(--text-secondary)">
                  Horario
                </p>

                <p className="mt-1 font-medium text-(--text-primary)">
                  {booking.startTime} hs
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <UserRound
                size={19}
                className="mt-0.5 shrink-0 text-(--accent-primary)"
              />

              <div>
                <p className="text-xs text-(--text-secondary)">
                  Profesional
                </p>

                <p className="mt-1 font-medium text-(--text-primary)">
                  {professional?.firstName} {professional?.lastName}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Cliente */}
        <div className="rounded-3xl border border-(--border-subtle) bg-(--bg-main) p-6">
          <p className="text-xs uppercase tracking-[0.15em] text-(--text-secondary)">
            Cliente
          </p>

          <h3 className="mt-2 text-2xl font-medium text-(--text-primary)">
            {booking.customer.name}
          </h3>

          <p className="mt-3 text-sm text-(--text-secondary)">
            {booking.customer.phone}
          </p>

          <div className="mt-6 rounded-2xl bg-(--accent-primary)/5 p-4">
            <p className="text-sm leading-6 text-(--text-secondary)">
              Al confirmar, tu solicitud será enviada al sistema de reservas
              del estudio.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-7 flex flex-col-reverse justify-between gap-3 sm:flex-row">
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
          Modificar
        </button>

        <button
          type="button"
          disabled
          className="
            min-h-12 rounded-full
            bg-(--accent-primary)
            px-7 py-3
            font-semibold text-black
            opacity-50
            cursor-not-allowed
          "
        >
          Confirmar turno
        </button>
      </div>

      <p className="mt-3 text-center text-xs text-(--text-secondary)">
        La confirmación estará disponible cuando conectemos el sistema de
        reservas.
      </p>
    </div>
  );
}