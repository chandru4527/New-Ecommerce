import {
  MdLightMode,
  MdDarkMode,
  MdSettingsBrightness,
} from "react-icons/md";

import useThemeStore from "../store/themeStore";

const ThemeToggle = () => {
  const theme = useThemeStore((state) => state.theme);
  const setTheme = useThemeStore((state) => state.setTheme);

  const themes = [
    {
      value: "light",
      icon: MdLightMode,
      label: "Light",
    },
    {
      value: "dark",
      icon: MdDarkMode,
      label: "Dark",
    },
    {
      value: "system",
      icon: MdSettingsBrightness,
      label: "System",
    },
  ];

  return (
    <div className="flex gap-1 rounded-lg bg-gray-100 p-1 dark:bg-gray-800">
      {themes.map(({ value, icon: Icon, label }) => (
        <button
          key={value}
          onClick={() => setTheme(value)}
          title={label}
          className={`rounded-md p-2 transition ${
            theme === value
              ? "bg-white shadow dark:bg-gray-700"
              : "hover:bg-gray-200 dark:hover:bg-gray-700"
          }`}
        >
          <Icon size={20} />
        </button>
      ))}
    </div>
  );
};

export default ThemeToggle;