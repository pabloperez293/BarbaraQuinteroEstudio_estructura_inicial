import {
  CalendarDays,
  GalleryHorizontalEnd,
  House,
  Sparkles,
} from "lucide-react";

import { Link } from "react-router-dom";

export default function MobileNav() {
  const sectionLink = (hash) => ({
    pathname: "/",
    hash,
  });

  return (
    <nav
      className="
        fixed inset-x-0 bottom-0 z-50
        border-t border-(--border-subtle)
        bg-(--bg-surface)/95
        px-2 pt-2
        backdrop-blur-xl
        md:hidden
      "
      style={{
        paddingBottom: "calc(0.5rem + env(safe-area-inset-bottom))",
      }}
    >
      <div className="mx-auto grid max-w-md grid-cols-4">
        <Link
          to="/"
          className="
            flex min-h-12 flex-col
            items-center justify-center
            gap-1 rounded-xl
            px-2 py-1
            text-xs
            text-(--text-secondary)
            transition-colors
            hover:text-(--text-primary)
          "
        >
          <House size={19} strokeWidth={1.8} />
          <span>Inicio</span>
        </Link>

        <Link
          to={sectionLink("#servicios")}
          className="
            flex min-h-12 flex-col
            items-center justify-center
            gap-1 rounded-xl
            px-2 py-1
            text-xs
            text-(--text-secondary)
            transition-colors
            hover:text-(--text-primary)
          "
        >
          <Sparkles size={19} strokeWidth={1.8} />
          <span>Servicios</span>
        </Link>

        <Link
          to={sectionLink("#galeria")}
          className="
            flex min-h-12 flex-col
            items-center justify-center
            gap-1 rounded-xl
            px-2 py-1
            text-xs
            text-(--text-secondary)
            transition-colors
            hover:text-(--text-primary)
          "
        >
          <GalleryHorizontalEnd size={19} strokeWidth={1.8} />
          <span>Galería</span>
        </Link>

        <Link
          to="/booking"
          className="
            flex min-h-12 flex-col
            items-center justify-center
            gap-1 rounded-xl
            px-2 py-1
            text-xs
            text-(--text-secondary)
            transition-colors
            hover:text-(--text-primary)
          "
        >
          <CalendarDays size={19} strokeWidth={1.8} />
          <span>Reservar</span>
        </Link>
      </div>
    </nav>
  );
}