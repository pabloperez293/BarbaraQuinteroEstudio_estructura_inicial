import { Link } from "react-router-dom";

import ThemeToggle from "./ThemeToggle";

import barbaraLogo from "../../assets/images/brand/barbara.logo.jpeg";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 hidden border-b border-(--border-subtle) bg-(--bg-main)/90 backdrop-blur md:block">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="flex items-center gap-3"
        >
          <img
            src={barbaraLogo}
            alt="Barbara Quintero Estudio"
            className="h-10 w-10 rounded-full object-cover"
          />


        </Link>

        <div className="flex items-center gap-6 text-sm">
          <a
            href="/#servicios"
            className="text-(--text-secondary) transition-colors hover:text-(--text-primary)"
          >
            Servicios
          </a>

          <a
            href="/#galeria"
            className="text-(--text-secondary) transition-colors hover:text-(--text-primary)"
          >
            Galería
          </a>

          <a
            href="/#sobre-mi"
            className="text-(--text-secondary) transition-colors hover:text-(--text-primary)"
          >
            Sobre el estudio
          </a>

          <Link
            to="/booking"
            className="
              rounded-full
              bg-(--accent-primary)
              px-5 py-2.5
              font-medium text-black
              transition-colors duration-300
              hover:bg-(--accent-primary-hover)
            "
          >
            Reservar
          </Link>

          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}