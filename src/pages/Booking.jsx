import Navbar from "../components/layout/Navbar";
import MobileNav from "../components/layout/MobileNav";
import BookingWizard from "../components/booking/BookingWizard";

export default function Booking() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="mx-auto max-w-5xl px-4 py-10 pb-28 md:py-16">
        <BookingWizard />
      </main>
      <MobileNav />
    </div>
  );
}
