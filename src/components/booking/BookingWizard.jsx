import { useState } from "react";
import ServiceSelector from "./ServiceSelector";
import ProfessionalSelector from "./ProfessionalSelector";
import DateSelector from "./DateSelector";
import TimeSlotSelector from "./TimeSlotSelector";
import CustomerForm from "./CustomerForm";
import BookingSummary from "./BookingSummary";

export default function BookingWizard() {
  const [step, setStep] = useState(1);
  const [booking, setBooking] = useState({
    serviceId: "",
    professionalId: "",
    date: "",
    startTime: "",
    customer: { name: "", phone: "" }
  });

  const update = (patch) => setBooking((current) => ({ ...current, ...patch }));

  return (
    <section>
      <div className="mb-10">
        <p className="text-sm uppercase tracking-[0.2em] text-[var(--color-gold)]">Reservas</p>
        <h1 className="mt-2 text-4xl font-semibold">Elegí tu turno</h1>
        <p className="mt-3 text-[var(--color-muted)]">
          Este flujo inicial es un esqueleto para validar la arquitectura antes de conectar Google Sheets.
        </p>
      </div>

      {step === 1 && <ServiceSelector booking={booking} update={update} next={() => setStep(2)} />}
      {step === 2 && <ProfessionalSelector booking={booking} update={update} next={() => setStep(3)} back={() => setStep(1)} />}
      {step === 3 && <DateSelector booking={booking} update={update} next={() => setStep(4)} back={() => setStep(2)} />}
      {step === 4 && <TimeSlotSelector booking={booking} update={update} next={() => setStep(5)} back={() => setStep(3)} />}
      {step === 5 && <CustomerForm booking={booking} update={update} next={() => setStep(6)} back={() => setStep(4)} />}
      {step === 6 && <BookingSummary booking={booking} back={() => setStep(5)} />}
    </section>
  );
}
