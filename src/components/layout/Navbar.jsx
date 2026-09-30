import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 hidden border-b border-[var(--color-border)] bg-[var(--color-background)]/90 backdrop-blur md:block">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="font-semibold tracking-wide">
          BARBARA QUINTERO ESTUDIO
        </Link>
        <div className="flex items-center gap-6 text-sm">
          <a href="/#servicios">Servicios</a>
          <a href="/#galeria">Galería</a>
          <a href="/#sobre-mi">Sobre Barbara</a>
          <Link to="/booking" className="rounded-full bg-[var(--color-primary)] px-5 py-2.5 font-medium text-black">
            Reservar
          </Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
