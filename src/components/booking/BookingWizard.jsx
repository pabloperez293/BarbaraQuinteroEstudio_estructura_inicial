import { useState } from "react";
import { Check } from "lucide-react";

import ServiceSelector from "./ServiceSelector";
import ProfessionalSelector from "./ProfessionalSelector";
import DateSelector from "./DateSelector";
import TimeSlotSelector from "./TimeSlotSelector";
import CustomerForm from "./CustomerForm";
import BookingSummary from "./BookingSummary";

const steps = [
  { id: 1, label: "Servicio" },
  { id: 2, label: "Profesional" },
  { id: 3, label: "Fecha" },
  { id: 4, label: "Horario" },
  { id: 5, label: "Datos" },
  { id: 6, label: "Confirmar" },
];

export default function BookingWizard() {
  const [step, setStep] = useState(1);

  const [booking, setBooking] = useState({
    serviceId: "",
    professionalId: "",
    date: "",
    startTime: "",
    customer: {
      name: "",
      phone: "",
    },
  });

  const update = (patch) => {
    setBooking((current) => ({
      ...current,
      ...patch,
    }));
  };

  const goBack = () => {
    setStep((current) => Math.max(1, current - 1));
  };

  const goNext = () => {
    setStep((current) => Math.min(6, current + 1));
  };

  return (
    <section>
      {/* Encabezado */}
      <div className="mb-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-(--accent-gold)">
          Reservas
        </p>

        <h1 className="mt-3 text-4xl font-medium text-(--text-primary) sm:text-5xl">
          Elegí tu turno
        </h1>

        <p className="mx-auto mt-4 max-w-2xl leading-7 text-(--text-secondary)">
          Seleccioná el tratamiento, profesional, fecha y horario que mejor
          se adapte a vos.
        </p>
      </div>

      {/* Indicador de progreso */}
      <div className="mb-10">
        <div className="hidden items-center justify-between md:flex">
          {steps.map((item, index) => {
            const completed = step > item.id;
            const active = step === item.id;

            return (
              <div
                key={item.id}
                className="flex flex-1 items-center last:flex-none"
              >
                <div className="flex flex-col items-center">
                  <div
                    className={`
                      flex h-10 w-10 items-center justify-center rounded-full
                      border text-sm font-semibold transition-all duration-300
                      ${
                        completed
                          ? "border-(--accent-primary) bg-(--accent-primary) text-black"
                          : active
                            ? "border-(--accent-primary) text-(--accent-primary)"
                            : "border-(--border-subtle) text-(--text-secondary)"
                      }
                    `}
                  >
                    {completed ? <Check size={17} /> : item.id}
                  </div>

                  <span
                    className={`
                      mt-2 text-xs font-medium
                      ${
                        active
                          ? "text-(--text-primary)"
                          : "text-(--text-secondary)"
                      }
                    `}
                  >
                    {item.label}
                  </span>
                </div>

                {index < steps.length - 1 && (
                  <div
                    className={`
                      mx-3 h-px flex-1 transition-colors duration-300
                      ${
                        step > item.id
                          ? "bg-(--accent-primary)"
                          : "bg-(--border-subtle)"
                      }
                    `}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Progreso móvil */}
        <div className="md:hidden">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-sm font-medium text-(--text-primary)">
              {steps[step - 1].label}
            </span>

            <span className="text-sm text-(--text-secondary)">
              {step} de {steps.length}
            </span>
          </div>

          <div className="h-1.5 overflow-hidden rounded-full bg-(--border-subtle)">
            <div
              className="h-full rounded-full bg-(--accent-primary) transition-all duration-300"
              style={{
                width: `${(step / steps.length) * 100}%`,
              }}
            />
          </div>
        </div>
      </div>

      {/* Contenido */}
      <div
        className="
          rounded-[2rem]
          border border-(--border-subtle)
          bg-(--bg-surface)
          p-5 shadow-(--shadow-elevation)
          sm:p-8
        "
      >
        {step === 1 && (
          <ServiceSelector
            booking={booking}
            update={update}
            next={goNext}
          />
        )}

        {step === 2 && (
          <ProfessionalSelector
            booking={booking}
            update={update}
            next={goNext}
            back={goBack}
          />
        )}

        {step === 3 && (
          <DateSelector
            booking={booking}
            update={update}
            next={goNext}
            back={goBack}
          />
        )}

        {step === 4 && (
          <TimeSlotSelector
            booking={booking}
            update={update}
            next={goNext}
            back={goBack}
          />
        )}

        {step === 5 && (
          <CustomerForm
            booking={booking}
            update={update}
            next={goNext}
            back={goBack}
          />
        )}

        {step === 6 && (
          <BookingSummary
            booking={booking}
            back={goBack}
          />
        )}
      </div>
    </section>
  );
}