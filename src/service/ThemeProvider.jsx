import { useEffect } from "react";
import useThemeStore from "../store/themeStore";

const ThemeProvider = ({ children }) => {
  const theme = useThemeStore((state) => state.theme);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );

    const updateTheme = () => {
      const root = document.documentElement;

      const activeTheme =
        theme === "system"
          ? mediaQuery.matches
            ? "dark"
            : "light"
          : theme;

      root.classList.remove("light", "dark");
      root.classList.add(activeTheme);
    };

    updateTheme();

    if (theme === "system") {
      mediaQuery.addEventListener("change", updateTheme);

      return () => {
        mediaQuery.removeEventListener(
          "change",
          updateTheme
        );
      };
    }
  }, [theme]);

  return children;
};

export default ThemeProvider;