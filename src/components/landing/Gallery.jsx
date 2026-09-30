import { motion } from "framer-motion";

import trabajo1 from "../../assets/images/brand/gallery/barbara-trabajo1.jpg";
import trabajo2 from "../../assets/images/brand/gallery/barbara-trabajo2.jpg";
import trabajo3 from "../../assets/images/brand/gallery/barbara-trabajo3.jpg";
import trabajo4 from "../../assets/images/brand/gallery/barbara-trabajo4.jpg";
import trabajo5 from "../../assets/images/brand/gallery/barbara-trabajo5.jpg";
import trabajo6 from "../../assets/images/brand/gallery/barbara-trabajo6.jpg";

const galleryItems = [
  {
    id: 1,
    image: trabajo1,
    alt: "Resultado de trabajo de pestañas realizado por Barbara Quintero",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    id: 2,
    image: trabajo2,
    alt: "Diseño y perfilado de cejas realizado por Barbara Quintero",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: 3,
    image: trabajo3,
    alt: "Resultado de cejas y pestañas realizado por Barbara Quintero",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: 4,
    image: trabajo4,
    alt: "Resultado de belleza y mirada realizado por Barbara Quintero",
    className: "md:col-span-2 md:row-span-1",
  },
  {
    id: 5,
    image: trabajo5,
    alt: "Detalle de un trabajo de pestañas realizado por Barbara Quintero",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: 6,
    image: trabajo6,
    alt: "Resultado de lifting de pestañas realizado por Barbara Quintero",
    className: "md:col-span-1 md:row-span-1",
  },
];

export default function Gallery() {
  return (
    <section
      id="galeria"
      className="scroll-mt-24 bg-(--bg-main) px-4 py-20 sm:px-6 md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-(--accent-gold)">
            Galería
          </p>

          <h2 className="mt-3 text-4xl font-medium leading-tight text-(--text-primary) sm:text-5xl">
            Resultados que hablan por sí solos
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-(--text-secondary) sm:text-base">
            Cada detalle está pensado para realzar tu belleza y crear un
            resultado que se adapte a vos.
          </p>
        </motion.div>

        {/* Galería */}
        <div className="mt-12 grid grid-cols-1 gap-4 md:auto-rows-[180px] md:grid-cols-4">
          {galleryItems.map((item, index) => (
            <motion.figure
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: index * 0.06,
              }}
              className={`group relative overflow-hidden rounded-3xl border border-(--border-subtle) bg-(--bg-surface) ${item.className}`}
            >
              <img
                src={item.image}
                alt={item.alt}
                loading={index === 0 ? "eager" : "lazy"}
                className="
                  h-full
                  min-h-[320px]
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  ease-out
                  group-hover:scale-105
                "
              />

              {/* Overlay */}
              <div
                className="
                  pointer-events-none
                  absolute inset-0
                  bg-gradient-to-t
                  from-black/45
                  via-transparent
                  to-transparent
                  opacity-70
                  transition-opacity
                  duration-300
                  group-hover:opacity-90
                "
              />

              {/* Número */}
              <figcaption
                className="
                  absolute
                  bottom-4
                  left-4
                  rounded-full
                  border
                  border-white/20
                  bg-black/30
                  px-3
                  py-1
                  text-xs
                  font-medium
                  text-white
                  backdrop-blur-sm
                "
              >
                0{item.id}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}