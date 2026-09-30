import { ArrowUpRight, MessageCircle, Sparkles } from "lucide-react";

import { createWhatsAppUrl } from "../../utils/whatsapp";

const whatsappMessage =
  "Hola Barbara, quería hacer una consulta sobre tus servicios y disponibilidad.";

export default function ContactCTA() {
  const whatsappUrl = createWhatsAppUrl(whatsappMessage);

  return (
    <section
      id="contacto"
      className="scroll-mt-24 px-4 py-20 sm:px-6 md:py-24"
    >
      <div
        className="
          relative mx-auto max-w-7xl overflow-hidden
          rounded-[2rem]
          border border-(--border-subtle)
          bg-(--bg-surface)
          shadow-(--shadow-elevation)
        "
      >
        {/* Decorative elements */}
        <div
          className="
            pointer-events-none absolute
            -right-24 -top-24
            h-72 w-72
            rounded-full
            bg-(--accent-primary)/10
            blur-3xl
          "
        />

        <div
          className="
            pointer-events-none absolute
            -bottom-32 -left-20
            h-64 w-64
            rounded-full
            bg-(--accent-gold)/5
            blur-3xl
          "
        />

        <div
          className="
            relative grid
            gap-10
            p-7
            sm:p-10
            md:p-14
            lg:grid-cols-[1fr_auto]
            lg:items-center
            lg:gap-16
          "
        >
          {/* Content */}
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span
                className="
                  flex h-10 w-10
                  items-center justify-center
                  rounded-2xl
                  bg-(--accent-primary)/10
                  text-(--accent-primary)
                "
              >
                <Sparkles size={18} strokeWidth={1.8} />
              </span>

              <p
                className="
                  text-sm font-semibold
                  uppercase tracking-[0.2em]
                  text-(--accent-gold)
                "
              >
                Reservá tu momento
              </p>
            </div>

            <h2
              className="
                mt-6
                text-4xl font-medium
                leading-tight
                text-(--text-primary)
                sm:text-5xl
              "
            >
              Hablemos de tu
              <span className="block text-(--accent-gold)">
                próxima mirada.
              </span>
            </h2>

            <p
              className="
                mt-6
                max-w-xl
                text-base
                leading-7
                text-(--text-secondary)
              "
            >
              Si tenés alguna consulta sobre los servicios, precios o querés
              conocer la disponibilidad, escribinos directamente por
              WhatsApp.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  inline-flex
                  min-h-12
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-(--accent-primary)
                  px-7 py-3.5
                  font-semibold
                  text-black
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-(--accent-primary-hover)
                "
              >
                <MessageCircle
                  size={19}
                  strokeWidth={2}
                  className="transition-transform duration-300 group-hover:scale-110"
                />

                Consultar por WhatsApp

                <ArrowUpRight
                  size={17}
                  className="
                    transition-transform
                    duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />
              </a>
            </div>
          </div>

          {/* Visual card */}
          <div
            className="
              relative
              hidden
              lg:flex
              lg:h-48
              lg:w-48
              lg:items-center
              lg:justify-center
            "
          >
            <div
              className="
                absolute inset-0
                rounded-full
                border
                border-(--accent-gold)/20
              "
            />

            <div
              className="
                absolute inset-5
                rounded-full
                border
                border-(--accent-primary)/20
              "
            />

            <div
              className="
                relative
                flex h-24 w-24
                items-center justify-center
                rounded-full
                bg-(--accent-primary)/10
                text-(--accent-primary)
              "
            >
              <MessageCircle size={38} strokeWidth={1.4} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}