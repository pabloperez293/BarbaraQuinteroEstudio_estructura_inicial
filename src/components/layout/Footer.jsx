export default function Footer() {
  return (
    <footer className="border-t border-(--border-subtle) px-4 py-10 pb-28 text-center md:pb-10">
      <p className="font-serif text-lg text-(--text-primary)">
        BARBARA QUINTERO ESTUDIO
      </p>

      <p className="mt-2 text-sm text-(--text-secondary)">
        Lash Artist & Beauty Studio
      </p>

      <p className="mt-4 text-xs text-(--text-secondary)">
        <a href="https://portafolioperezpablo.netlify.app/" target="_blank" className="hover:underline">
         Pablo Perez Desarrollador
        </a>
      </p>
    </footer>
  );
}