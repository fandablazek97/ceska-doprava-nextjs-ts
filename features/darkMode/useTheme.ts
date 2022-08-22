import useIsomorphicLayoutEffect from "@/hooks/useIsomorphicLayoutEffect";
import { useEffect, useRef, useState } from "react";

// theme settings
const storageKey = "theme";
const classNameDark = "dark";

// Updating classes function
function updateClass() {
  if (localStorage.getItem(storageKey) === "dark") {
    document.documentElement.classList.add(classNameDark);
  } else {
    document.documentElement.classList.remove(classNameDark);
  }
}

// use Theme hook
export function useTheme() {
  let [setting, setSetting] = useState("light");
  let initial = useRef(true);

  useIsomorphicLayoutEffect(() => {
    let theme = localStorage.getItem(storageKey);
    if (theme === "light" || theme === "dark") {
      setSetting(theme);
    } else if (theme === null || theme === "undefined") {
      setSetting("unset");
    }
  }, []);

  useIsomorphicLayoutEffect(() => {
    if (setting === "unset") {
      localStorage.removeItem(storageKey);
    } else if (setting === "light" || setting === "dark") {
      localStorage.setItem(storageKey, setting);
    }

    if (initial.current) {
      initial.current = false;
    } else {
      updateClass();
    }
  }, [setting]);

  useEffect(() => {
    function onStorage() {
      updateClass();
      let theme = localStorage.getItem(storageKey);
      if (theme === "light" || theme === "dark") {
        setSetting(theme);
      }
    }
    window.addEventListener("storage", onStorage);

    return () => {
      window.removeEventListener("storage", onStorage);
    };
  }, []);

  return [setting, setSetting] as const;
}
