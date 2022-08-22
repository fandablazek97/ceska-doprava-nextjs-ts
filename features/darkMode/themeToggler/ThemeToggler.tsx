import { useTheme } from "@/features/darkMode/useTheme";
import { HiMoon, HiSun } from "react-icons/hi";

type ThemeTogglerOptions = {
  className?: string;
};

export default function ThemeToggler({ className = "" }: ThemeTogglerOptions) {
  let [setting, setSetting] = useTheme();

  function switchTheme() {
    setSetting(setting === "dark" ? "light" : "dark");
  }
  return (
    <button
      className={`relative flex items-center justify-center rounded-md p-[0.4em] text-[1.65rem] leading-none text-muted transition-colors duration-200 ${className}`}
      onClick={switchTheme}
      aria-label="zapnout nebo vypnout tmavý vzhled"
    >
      <HiSun className="absolute top-1/2 left-1/2 origin-center -translate-x-1/2 -translate-y-1/2 rotate-0 transform-gpu opacity-100 transition-[transform,opacity,color] duration-[400ms] ease-out dark:rotate-45 dark:opacity-0" />
      <HiMoon className="absolute top-1/2 left-1/2 origin-center -translate-x-1/2 -translate-y-1/2 -rotate-45 transform-gpu opacity-0 transition-[transform,opacity,color] duration-[400ms] ease-out dark:visible dark:rotate-0 dark:opacity-100" />
    </button>
  );
}
