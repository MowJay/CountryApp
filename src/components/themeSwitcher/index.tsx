"use client";

import { ThemeContext } from "@/app/themeProvider";
import { useContext } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeSwitcher = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <div
      className="font-semibold flex items-center gap-2 cursor-pointer select-none"
      onClick={() => toggleTheme()}
    >
      {darkMode ? <FaSun /> : <FaMoon />}
      <span>{darkMode ? "Light" : "Dark"} Mode</span>
    </div>
  );
};

export default ThemeSwitcher;
