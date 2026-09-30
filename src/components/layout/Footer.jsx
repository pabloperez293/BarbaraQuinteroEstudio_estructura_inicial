import { ArrowUp, Instagram, MessageCircle } from "lucide-react";

import { createWhatsAppUrl } from "../../utils/whatsapp";

const whatsappMessage =
  "Hola Barbara, quería hacer una consulta sobre tus servicios y disponibilidad.";

export default function Footer() {
  const whatsappUrl = createWhatsAppUrl(whatsappMessage);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-(--border-subtle) bg-(--bg-surface) px-4 pb-8 pt-14 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-start">
          {/* Brand */}
          <div>
            <p className="font-serif text-xl text-(--text-primary)">
              BARBARA QUINTERO ESTUDIO
            </p>

            <p className="mt-2 text-sm text-(--text-secondary)">
              Lash Artist & Beauty Studio
            </p>

            <p className="mt-5 max-w-md text-sm leading-6 text-(--text-secondary)">
              Lujo, precisión y elegancia para realzar tu belleza natural.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3 md:items-end">
            <a
              href="#servicios"
              className="text-sm text-(--text-secondary) transition-colors hover:text-(--text-primary)"
            >
              Servicios
            </a>

            <a
              href="#galeria"
              className="text-sm text-(--text-secondary) transition-colors hover:text-(--text-primary)"
            >
              Galería
            </a>

            <a
              href="#sobre-mi"
              className="text-sm text-(--text-secondary) transition-colors hover:text-(--text-primary)"
            >
              Sobre el estudio
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-(--text-secondary) transition-colors hover:text-(--accent-primary)"
            >
              <MessageCircle size={16} strokeWidth={1.8} />
              WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="
            mt-12
            flex flex-col gap-4
            border-t border-(--border-subtle)
            pt-6
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p className="text-xs text-(--text-secondary)">
            © {new Date().getFullYear()} Barbara Quintero Estudio. Todos los
            derechos reservados.
          </p>

          <div className="flex items-center gap-5">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="
                text-(--text-secondary)
                transition-colors
                hover:text-(--accent-primary)
              "
            >
              <Instagram size={17} strokeWidth={1.7} />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Volver arriba"
              className="
                inline-flex
                items-center
                gap-2
                text-xs
                text-(--text-secondary)
                transition-colors
                hover:text-(--text-primary)
              "
            >
              Volver arriba
              <ArrowUp size={15} strokeWidth={1.8} />
            </button>
          </div>
        </div>

        {/* Developer credit */}
        <div className="mt-6 text-center">
          <a
            href="https://portafolioperezpablo.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              text-[11px]
              tracking-wide
              text-(--text-secondary)
              opacity-60
              transition-opacity
              hover:opacity-100
            "
          >
            Desarrollo web · Pablo Perez
          </a>
        </div>
      </div>
    </footer>
  );
}