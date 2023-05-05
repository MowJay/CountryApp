"use client";

import { useEffect, useState, createContext } from "react";

export type ThemeContextType = {
  darkMode: boolean;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  darkMode: false,
  toggleTheme: () => {},
});

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const root = document.getElementsByTagName("html")[0];
    if (darkMode) {
      root.className += " dark";
    } else {
      root.className = root.className.replace("dark", "");
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode((darkMode) => !darkMode);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
