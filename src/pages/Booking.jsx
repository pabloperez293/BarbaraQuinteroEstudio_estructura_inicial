import BookingWizard from "../components/booking/BookingWizard";

export default function Booking() {
  return (
    <div className="min-h-screen">
      <main className="mx-auto max-w-5xl px-4 py-12 pb-28 sm:px-6 md:py-20 md:pb-20">
        <BookingWizard />
      </main>
    </div>
  );
}