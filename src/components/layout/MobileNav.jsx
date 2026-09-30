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
        px-2 py-2
        backdrop-blur
        md:hidden
      "
    >
      <div className="mx-auto grid max-w-md grid-cols-4">
        <Link
          to="/"
          className="
            flex min-h-12 flex-col items-center justify-center
            gap-1 rounded-xl p-2 text-xs
            text-(--text-secondary)
          "
        >
          <House size={19} />
          Inicio
        </Link>

        <Link
          to={sectionLink("#servicios")}
          className="
            flex min-h-12 flex-col items-center justify-center
            gap-1 rounded-xl p-2 text-xs
            text-(--text-secondary)
          "
        >
          <Sparkles size={19} />
          Servicios
        </Link>

        <Link
          to={sectionLink("#galeria")}
          className="
            flex min-h-12 flex-col items-center justify-center
            gap-1 rounded-xl p-2 text-xs
            text-(--text-secondary)
          "
        >
          <GalleryHorizontalEnd size={19} />
          Galería
        </Link>

        <Link
          to="/booking"
          className="
            flex min-h-12 flex-col items-center justify-center
            gap-1 rounded-xl p-2 text-xs
            text-(--text-secondary)
          "
        >
          <CalendarDays size={19} />
          Reservar
        </Link>
      </div>
    </nav>
  );
}