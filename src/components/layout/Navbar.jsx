import { Link } from "react-router-dom";

import ThemeToggle from "./ThemeToggle";

import barbaraLogo from "../../assets/images/brand/barbara.logo.jpeg";

export default function Navbar() {
  const sectionLink = (hash) => ({
    pathname: "/",
    hash,
  });

  return (
    <header
      className="
        sticky top-0 z-40
        hidden
        border-b border-(--border-subtle)
        bg-(--bg-main)/90
        backdrop-blur-xl
        md:block
      "
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          aria-label="Barbara Quintero Estudio - Inicio"
          className="flex items-center gap-3"
        >
          <img
            src={barbaraLogo}
            alt="Barbara Quintero Estudio"
            className="
              h-10 w-10
              rounded-full
              object-cover
              ring-1 ring-(--border-subtle)
            "
          />
        </Link>

        <div className="flex items-center gap-5 text-sm">
          <Link
            to={sectionLink("#servicios")}
            className="
              text-(--text-secondary)
              transition-colors
              hover:text-(--text-primary)
            "
          >
            Servicios
          </Link>

          <Link
            to={sectionLink("#galeria")}
            className="
              text-(--text-secondary)
              transition-colors
              hover:text-(--text-primary)
            "
          >
            Galería
          </Link>

          <Link
            to={sectionLink("#sobre-mi")}
            className="
              text-(--text-secondary)
              transition-colors
              hover:text-(--text-primary)
            "
          >
            Sobre el estudio
          </Link>

          <Link
            to="/booking"
            className="
              rounded-full
              bg-(--accent-primary)
              px-5 py-2.5
              font-medium
              text-black
              transition-all
              duration-300
              hover:-translate-y-0.5
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