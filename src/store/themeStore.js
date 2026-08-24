import { create } from "zustand";
import { persist } from "zustand/middleware";

const getSystemTheme = () => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
};

const applyTheme = (theme) => {
    const root = document.documentElement;

    const activeTheme =
        theme === "system"
            ? getSystemTheme()
            : theme;

    root.classList.remove("light", "dark");
    root.classList.add(activeTheme);
};

const useThemeStore = create(
    persist(
        (set) => ({
            theme: "system",

            setTheme: (theme) => {
                applyTheme(theme);
                set({ theme });
            },
        }),
        {
            name: "theme-storage",
        }
    )
);

export default useThemeStore;