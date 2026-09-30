import { CalendarDays, GalleryHorizontalEnd, House, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function MobileNav() {
  return (
   <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-(--border-subtle) bg-(--bg-surface)/95 px-2 py-2 backdrop-blur md:hidden">
      <div className="mx-auto grid max-w-md grid-cols-4">
        <Link to="/" className="flex flex-col items-center gap-1 p-2 text-xs">
          <House size={19} />
          Inicio
        </Link>
        <a href="/#servicios" className="flex flex-col items-center gap-1 p-2 text-xs">
          <Sparkles size={19} />
          Servicios
        </a>
        <a href="/#galeria" className="flex flex-col items-center gap-1 p-2 text-xs">
          <GalleryHorizontalEnd size={19} />
          Galería
        </a>
        <Link to="/booking" className="flex flex-col items-center gap-1 p-2 text-xs">
          <CalendarDays size={19} />
          Reservar
        </Link>
      </div>
    </nav>
  );
}
