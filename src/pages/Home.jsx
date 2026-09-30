import Navbar from "../components/layout/Navbar";
import MobileNav from "../components/layout/MobileNav";
import Footer from "../components/layout/Footer";
import Hero from "../components/landing/Hero";
import ServicesPreview from "../components/landing/ServicesPreview";
import Gallery from "../components/landing/Gallery";
import About from "../components/landing/About";
import ContactCTA from "../components/landing/ContactCTA";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pb-20 md:pb-0">
        <Hero />
        <ServicesPreview />
        <Gallery />
        <About />
        <ContactCTA />
      </main>
      <Footer />
      <MobileNav />
    </div>
  );
}
