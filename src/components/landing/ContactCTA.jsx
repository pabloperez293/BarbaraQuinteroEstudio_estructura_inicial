import { MessageCircle } from "lucide-react";

const whatsappNumber = "5491176550890";

export default function ContactCTA() {
  const message = encodeURIComponent(
    "Hola Barbara, quería hacer una consulta sobre tus servicios."
  );

  const href = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-24">
      <div
        className="
          relative overflow-hidden rounded-[2rem]
          border border-(--border-subtle)
          bg-(--bg-surface)
          p-8 shadow-(--shadow-elevation)
          md:p-12
        "
      >
        <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-(--accent-primary)/10 blur-3xl" />

        <div className="relative max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-(--accent-gold)">
            ¿Tenés una consulta?
          </p>

          <h2 className="mt-3 text-4xl font-medium text-(--text-primary) sm:text-5xl">
            Hablemos de tu próxima mirada.
          </h2>

          <p className="mt-5 leading-7 text-(--text-secondary)">
            Escribinos por WhatsApp y consultá sobre tratamientos, precios y
            disponibilidad.
          </p>

          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="
              mt-8 inline-flex min-h-12 items-center justify-center gap-2
              rounded-full
              bg-(--accent-primary)
              px-7 py-3.5
              font-semibold text-black
              transition-all duration-300
              hover:-translate-y-0.5
              hover:bg-(--accent-primary-hover)
            "
          >
            <MessageCircle size={19} />
            Consultar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}