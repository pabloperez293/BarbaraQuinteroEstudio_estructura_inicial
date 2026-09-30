import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Hero from "../components/landing/Hero";
import ServicesPreview from "../components/landing/ServicesPreview";
import Gallery from "../components/landing/Gallery";
import About from "../components/landing/About";
import ContactCTA from "../components/landing/ContactCTA";
import Footer from "../components/layout/Footer";

export default function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const id = decodeURIComponent(hash.replace("#", ""));

    const timeoutId = window.setTimeout(() => {
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 50);

    return () => window.clearTimeout(timeoutId);
  }, [hash]);

  return (
    <div className="min-h-screen">
      <Hero />
      <ServicesPreview />
      <Gallery />
      <About />
      <ContactCTA />
      <Footer />
    </div>
  );
}