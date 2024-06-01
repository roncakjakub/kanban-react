import { useContext } from "react";

import Switch from "react-switch";
import LightThemeIcon from "../icons/LightThemeIcon";
import DarkThemeIcon from "../icons/DarkThemeIcon";

import ThemeContext from "../../context/ThemeContext";

const highlightBg = "#635FC7";

const ThemeToggler = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className={`flex items-center justify-between gap-4 py-2 px-4 mb-6 ${
        theme === "dark" ? "bg-primaryDarkBg" : "bg-primaryLightBg"
      }`}
    >
      <LightThemeIcon />
      <Switch
        onChange={toggleTheme}
        checked={theme === "dark"}
        checkedIcon={false}
        uncheckedIcon={false}
        onColor={highlightBg}
        height={20}
        width={40}
        handleDiameter={20}
      />
      <DarkThemeIcon />
    </div>
  );
};

export default ThemeToggler;
