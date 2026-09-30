import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={
        isDark
          ? "Activar modo claro"
          : "Activar modo oscuro"
      }
      className="
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-full
        border
        border-(--border-subtle)
        text-(--text-primary)
        transition-colors
        duration-300
        hover:bg-(--bg-surface-hover)
      "
    >
      {isDark ? (
        <Sun size={18} />
      ) : (
        <Moon size={18} />
      )}
    </button>
  );
}